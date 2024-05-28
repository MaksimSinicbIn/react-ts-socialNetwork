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

export const authReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type ) {
        case 'SET-USER-DATA':
            return {...state, ...action.payload}
        default:
            return state
    }
}

type SetUserDataActionType = ReturnType<typeof setAuthUserData>

type AuthActionsType = SetUserDataActionType

// Action Creators
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: 'SET-USER-DATA', payload: {id, email, login, isAuth}} as const)

// Thunk Creators
export const getAuthUserData = (): AppThunk => (dispatch: Dispatch) => {
    authMeApi.me()
        .then(data => {
            if (data.resultCode === ResultCodesEnum.Success) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authMeApi.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === ResultCodesEnum.Success) {
                dispatch(getAuthUserData())
            } else {
                const message = data.messages.length > 0 ? data.messages[0] : 'Something went wrong...'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logOut = (): AppThunk => (dispatch: Dispatch) => {
    authMeApi.logOut()
        .then(data => {
            if (data.resultCode === ResultCodesEnum.Success) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}