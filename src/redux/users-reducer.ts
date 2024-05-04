export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}

export type UserLocationType = {
    country: string
    city: string
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 3
}


export const usersReducer = (state: UsersPageType = initialState, action: ProfileActionsType): UsersPageType => {
    switch(action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: true} : u)};
        case 'UNFOLLOW':
            return {...state, users: state.users.map( u => u.id === action.userId ? {...u, followed: false} : u)};
        case 'SET-USERS':
            return {...state, users: action.users}; // склеиваем 2 массива, тех юзеров, которые были в стейте и тех, которые придут к нам из action
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage};
        case 'SET-USERS-TOTAL-COUNT':
            return {...state, totalUsersCount: action.totalCount};
        default:
            return state
    }
}

export type FollowActionType = ReturnType<typeof followAC>
export type UnfollowActionType = ReturnType<typeof unfollowAC>
export type SetUsersACActionType = ReturnType<typeof setUsersAC>
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export type SetUsersTotalCountType = ReturnType<typeof setTotalUsersCountAC>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>

export type ProfileActionsType = FollowActionType | UnfollowActionType | SetUsersACActionType | SetCurrentPageType | SetUsersTotalCountType

export const followAC = (userId: number) => {
    return { type: 'FOLLOW', userId} as const
}
export const unfollowAC = (userId: number) => {
    return { type: 'UNFOLLOW', userId} as const
}
export const setUsersAC = (users: UserType[]) => {
    return { type: 'SET-USERS', users} as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return { type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalUsersCountAC = (totalCount: number) => {
    return { type: 'SET-USERS-TOTAL-COUNT', totalCount} as const
}
export const updateNewPostTextAC = (nextText: string) => {
    return {type: 'UPDATE-NEWPOST-TEXT', nextText} as const
}