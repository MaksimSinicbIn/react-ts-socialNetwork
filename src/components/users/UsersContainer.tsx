import * as React from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';
import { Users } from './Users';
import { UsersPageType, UserType, followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';

type MapStatePropsType = {
    usersPage: UsersPageType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (Users);