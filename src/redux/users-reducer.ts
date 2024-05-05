export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
    currentPage: 3,
    isFetching: false
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
        case 'IS-FETCHING':
            return {...state, isFetching: action.isFetching};
        default:
            return state
    }
}

export type FollowActionType = ReturnType<typeof follow>
export type UnfollowActionType = ReturnType<typeof unfollow>
export type SetUsersACActionType = ReturnType<typeof setUsers>
export type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export type SetUsersTotalCountType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>


export type ProfileActionsType = FollowActionType | UnfollowActionType | SetUsersACActionType | SetCurrentPageType | SetUsersTotalCountType | ToggleIsFetchingACType

export const follow = (userId: number) => {
    return { type: 'FOLLOW', userId} as const
}
export const unfollow = (userId: number) => {
    return { type: 'UNFOLLOW', userId} as const
}
export const setUsers = (users: UserType[]) => {
    return { type: 'SET-USERS', users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return { type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return { type: 'SET-USERS-TOTAL-COUNT', totalCount} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: 'IS-FETCHING', isFetching} as const
}
export const updateNewPostText = (nextText: string) => {
    return {type: 'UPDATE-NEWPOST-TEXT', nextText} as const
}
