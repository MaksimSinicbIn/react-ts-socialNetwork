import { Dispatch } from "redux"
import { AppThunk } from "./redux-store"
import { ResultCodesEnum, authMeApi } from "../api/api"
import { stopSubmit } from "redux-form"

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthActionsType): AuthDataType => {
    switch (action.type) {
        case 'auth/SET-USER-DATA':
            return { ...state, ...action.payload }
        default:
            return state
    }
}

type SetUserDataActionType = ReturnType<typeof setAuthUserData>

type AuthActionsType = SetUserDataActionType

// Action Creators
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({ type: 'auth/SET-USER-DATA', payload: { id, email, login, isAuth } } as const)

// Thunk Creators
export const getAuthUserData = (): AppThunk => async (dispatch: Dispatch) => {
    const data = await authMeApi.me()
    if (data.resultCode === ResultCodesEnum.Success) {
        let { id, login, email } = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    const data = await authMeApi.login(email, password, rememberMe)
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
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