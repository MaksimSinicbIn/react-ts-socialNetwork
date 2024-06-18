import { Dispatch } from "redux"
import { AppThunk } from "./redux-store"
import { ResultCodesEnum, authMeApi, securityApi } from "../api/api"
import { stopSubmit } from "redux-form"

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

const initialState: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null as string | null // if null, then captcha is not required
}

export const authReducer = (state = initialState, action: AuthActionsType): AuthDataType => {
    switch (action.type) {
        case 'auth/SET-USER-DATA':
        case 'auth/GET-CAPTCHA-URL-SUCCESS':
            return { ...state, ...action.payload }
        default:
            return state
    }
}

type SetUserDataActionType = ReturnType<typeof setAuthUserData>
type GetCaptchaUrlSuccessActionType = ReturnType<typeof getCaptchaUrlSuccess>

type AuthActionsType = SetUserDataActionType | GetCaptchaUrlSuccessActionType

// Action Creators
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({ type: 'auth/SET-USER-DATA', payload: { id, email, login, isAuth } } as const)

export const getCaptchaUrlSuccess = (captchaUrl: string | null) =>
    ({ type: 'auth/GET-CAPTCHA-URL-SUCCESS', payload: { captchaUrl } } as const)

// Thunk Creators
export const getAuthUserData = (): AppThunk => async (dispatch: Dispatch) => {
    const data = await authMeApi.me()
    if (data.resultCode === ResultCodesEnum.Success) {
        let { id, login, email } = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl: string | null): AppThunk => async (dispatch) => {
    const data = await authMeApi.login(email, password, rememberMe, captchaUrl)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodesEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong...'
        dispatch(stopSubmit('login', { _error: message }))
    }
}

export const logOut = (): AppThunk => async (dispatch: Dispatch) => {
    const data = await authMeApi.logOut()
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = (): AppThunk => async (dispatch: Dispatch) => {
    const data = await securityApi.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}