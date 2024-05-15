export type AuthDataType = {
    id: string
    email: string
    login: string
    isAuth: boolean
}

const initialState: AuthDataType = {
        id: '1',
        email: 'sinicbIn@gmail.com',
        login: 'MaksimSinicbIn',
        isAuth: false
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

export const setUserData = (data: AuthDataType) => ({type: 'SET-USER-DATA', data} as const)