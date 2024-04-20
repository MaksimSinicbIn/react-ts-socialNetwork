export type UsersPageType = {
    users: UserType[]
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}

export type UserLocationType = {
    country: string
    city: string
}

const initialState: UsersPageType = {
    users: []
}


export const usersReducer = (state: UsersPageType = initialState, action: ProfileActionsType): UsersPageType => {
    switch(action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: true} : u)};
        case 'UNFOLLOW':
            return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: false} : u)};
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}; // склеиваем 2 массива, тех юзеров, которые были в стейте и тех, которые придут к нам из action
        default:
            return state
    }
}

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type setUsersACActionType = ReturnType<typeof setUsersAC>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>

export type ProfileActionsType = FollowActionType | UnfollowActionType | setUsersACActionType

export const followAC = (userId: number) => {
    return { type: 'FOLLOW', userId} as const
}
export const unfollowAC = (userId: number) => {
    return { type: 'UNFOLLOW', userId} as const
}
export const setUsersAC = (users: UserType[]) => {
    return { type: 'SET-USERS', users} as const
}

export const updateNewPostTextAC = (nextText: string) => {
    return {type: 'UPDATE-NEWPOST-TEXT', nextText} as const
}