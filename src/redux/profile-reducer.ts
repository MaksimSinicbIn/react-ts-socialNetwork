import { Dispatch } from "redux"
import { AppThunk } from "./redux-store"
import { profileApi } from "../api/api"

export type ProfilePageType = {
    profile: ProfileType
    posts: Array<PostType>
    newPostText: string
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
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: 'Anton',
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
    newPostText: 'it-kamasutra.com'
}


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType) => {
    switch(action.type) {
        case 'ADD-POST':
            const newPost = {
                id: new Date().getTime(),
                post: state.newPostText,
                likesCount: 1
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case 'UPDATE-NEWPOST-TEXT':
            return {...state, newPostText: action.nextText};
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile};
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPost>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>
export type SetUserProfileType = ReturnType<typeof setUserProfile>

export type ProfileActionsType = AddPostActionType | UpdateNewPostTextType | SetUserProfileType

export const addPost = () => ({ type: 'ADD-POST'} as const)
export const updateNewPostText = (nextText: string) => ({type: 'UPDATE-NEWPOST-TEXT', nextText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)

export const setUserProfileTC = (userId: string): AppThunk => (dispatch: Dispatch) => {
    profileApi.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
}