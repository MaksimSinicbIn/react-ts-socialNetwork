export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
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
    isFetching: false,
    followingInProgress: [2, 3, 4, 5]
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
        case 'TOOGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching};
        case 'TOOGLE-FOLLOWING-PROGRESS':
            return {...state, followingInProgress: action.isFetching 
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
                };
        default:
            return state
    }
}

export type FollowActionType = ReturnType<typeof follow>
export type UnfollowActionType = ReturnType<typeof unfollow>
export type SetUsersACActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetUsersTotalCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type ToggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>


export type ProfileActionsType = 
    | FollowActionType
    | UnfollowActionType
    | SetUsersACActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingProgressActionType

export const follow = (userId: number) => ({ type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({ type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: UserType[]) => ({ type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({ type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({ type: 'SET-USERS-TOTAL-COUNT', totalCount} as const)
export const toggleIsFetching = (isFetching: boolean) =>({type: 'TOOGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: 'TOOGLE-FOLLOWING-PROGRESS', isFetching, userId} as const)
export const updateNewPostText = (nextText: string) => ({type: 'UPDATE-NEWPOST-TEXT', nextText} as const)