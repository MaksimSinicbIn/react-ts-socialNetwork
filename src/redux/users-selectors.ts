import { createSelector } from "reselect";
import { AppRootStateType } from "./redux-store";

const getUsersSelector = (state: AppRootStateType) => state.usersPage.users
export const getUsers = createSelector(getUsersSelector, (users,) => {
    return users.filter(u => true) // fake filter
})
export const getPageSize = (state: AppRootStateType) => state.usersPage.pageSize
export const getTotalUsersCount = (state: AppRootStateType) => state.usersPage.totalUsersCount
export const getCurrentPage = (state: AppRootStateType) => state.usersPage.currentPage
export const getIsFetching = (state: AppRootStateType) => state.usersPage.isFetching
export const getFollowingInProgress = (state: AppRootStateType) => state.usersPage.followingInProgress