export type UsersPageType = {
    users: UsersType[]
}

export type UsersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

export type LocationType = {
    country: string
    city: string
}

const initialState: UsersPageType = {
    users: [
        { id: 1, followed: true, fullName: 'Dmitry', status: 'Za pridurka menya ne derzhi', location: { country: 'Russia', city: 'Krasnoyarsk'}},
        { id: 2, followed: false, fullName: 'Tolyan', status: 'Chisti, chisti, chtob chisto bbIlo', location: { country: 'Russia', city: 'Ekaterinburg'}},
        { id: 3, followed: false, fullName: 'Serega', status: 'Copim dengi na comp', location: { country: 'Russia', city: 'Kansk'}},
        { id: 4, followed: true, fullName: 'Maksim', status: 'Hozyain svarki', location: { country: 'Russia', city: 'Krasnoyarsk'}}
    ]
}


export const usersReducer = (state = initialState, action: ProfileActionsType) => {
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
export const setUsersAC = (users: any) => {
    return { type: 'SET-USERS', users} as const
}

export const updateNewPostTextAC = (nextText: string) => {
    return {type: 'UPDATE-NEWPOST-TEXT', nextText} as const
}