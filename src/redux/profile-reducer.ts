import { Dispatch } from "redux"
import { AppThunk } from "./redux-store"
import { profileApi } from "../api/api"

export type ProfilePageType = {
    profile: ProfileType
    posts: Array<PostType>
    status: string,
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotoType
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotoType = {
    small: string
    large: string
}

export type PostType = {
    id: number
    post: string
    likesCount: number
}

const initialState: ProfilePageType = {
    profile: {
        userId: 30984,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: 'Maksim_SinicbIn',
        
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: ''
        },
        photos:{
            small: '',
            large: ''
        }
    },
    posts: [
        { id: 1, post: "Hi", likesCount: 15 },
        { id: 2, post: "Hi, how are you?", likesCount: 20 },
        { id: 3, post: "Hello, friend!", likesCount: 5 },
    ],
    status: 'Hello, guys!',
}


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType) => {
    switch(action.type) {
        case 'ADD-POST':
            const newPost = {
                id: new Date().getTime(),
                post: action.newPostText,
                likesCount: 1
            };
            return {...state, posts: [...state.posts, newPost]};
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile};
        case 'SET-USER-STATUS':
            return {...state, status: action.status};
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPost>
export type SetUserProfileActionType= ReturnType<typeof setUserProfile>
export type SetUserStatusActionType = ReturnType<typeof setUserStatus>

export type ProfileActionsType =
| AddPostActionType
| SetUserProfileActionType
| SetUserStatusActionType

// Action Creators
export const addPost = (newPostText: string) => ({ type: 'ADD-POST', newPostText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)
export const setUserStatus = (status: string) => ({type: 'SET-USER-STATUS', status} as const)

// Thunk Creators
export const getUserProfile = (userId: string): AppThunk => (dispatch: Dispatch) => {
    profileApi.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}

export const getUserStatus = (userId: string): AppThunk => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(data => {
            dispatch(setUserStatus(data))
        })
}

export const updateUserStatus = (status: string): AppThunk => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}