import { Dispatch } from "redux"
import { AppThunk } from "./redux-store"
import { authMeApi } from "../api/api"

export type AuthDataType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}

const initialState: AuthDataType = {
        id: '30984',
        email: 'sinicbIn@gmail.com',
        login: 'MaksimSinicbIn',
        isAuth: true
}

export const authReducer = (state = initialState, action: SetUserDataType) => {
    switch (action.type ) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

type SetUserDataType = ReturnType<typeof setUserData>

// Action Creators
export const setUserData = (data: AuthDataType) => ({type: 'SET-USER-DATA', data} as const)

// Thunk Creators
export const getUserData = (): AppThunk => (dispatch: Dispatch) => {
    authMeApi.authMeResponse()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data))
            }
        })
}