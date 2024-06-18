import { Dispatch } from "redux"
import { AppThunk } from "./redux-store"
import { profileApi } from "../api/api"
import { profile } from "console"

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
        photos: {
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
    switch (action.type) {
        case 'profile/ADD-POST':
            const newPost = {
                id: new Date().getTime(),
                post: action.newPostText,
                likesCount: 1
            };
            return { ...state, posts: [...state.posts, newPost] };
        case 'profile/DELETE-POST':
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) };
        case 'profile/SAVE-PHOTO':
            return { ...state, profile: {...state.profile, photos: action.photos} };
        case 'profile/SET-USER-PROFILE':
            return { ...state, profile: action.profile };
        case 'profile/SET-USER-STATUS':
            return { ...state, status: action.status };
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPost>
export type DeletePostActionType = ReturnType<typeof deletePost>
export type SavePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetUserStatusActionType = ReturnType<typeof setUserStatus>

export type ProfileActionsType =
    | AddPostActionType
    | DeletePostActionType
    | SavePhotoSuccessActionType
    | SetUserProfileActionType
    | SetUserStatusActionType

// Action Creators
export const addPost = (newPostText: string) => ({ type: 'profile/ADD-POST', newPostText } as const)
export const deletePost = (postId: number) => ({ type: 'profile/DELETE-POST', postId } as const)
export const savePhotoSuccess = (photos: PhotoType) => ({ type: 'profile/SAVE-PHOTO', photos } as const)
export const setUserProfile = (profile: ProfileType) => ({ type: 'profile/SET-USER-PROFILE', profile } as const)
export const setUserStatus = (status: string) => ({ type: 'profile/SET-USER-STATUS', status } as const)

// Thunk Creators
export const getUserProfile = (userId: string): AppThunk => async (dispatch: Dispatch) => {
    const data = await profileApi.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userId: string): AppThunk => async (dispatch: Dispatch) => {
    const data = await profileApi.getStatus(userId)
    dispatch(setUserStatus(data))
}

export const updateUserStatus = (status: string): AppThunk => async (dispatch: Dispatch) => {
    const data = await profileApi.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file: File): AppThunk => async (dispatch: Dispatch) => {
    const data = await profileApi.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data))
    }
}