import { AppDispatch,  } from "./redux-store"
import { getAuthUserData } from "./auth-reducer"

const initialState = {
    isInitialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type ) {
        case 'app/SET-IS-INITIALIZED':
            return {...state, isInitialized: true}
        default:
            return state
    }
}

type SetIsInitializedActionType = ReturnType<typeof setIsInitialized>

type AppActionsType = SetIsInitializedActionType

// Action Creators
export const setIsInitialized = () => ({ type: 'app/SET-IS-INITIALIZED' } as const)

// Thunk Creators
export const initializeApp = () => (dispatch: AppDispatch) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(setIsInitialized())
        })

}