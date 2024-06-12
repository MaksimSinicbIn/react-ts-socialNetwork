import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppRootStateType } from '../../redux/redux-store';
import { Users } from './Users';
import Preloader from '../common/preloader/Preloader';
import { follow, followSuccess, getRequestUsers, setCurrentPage, unfollow, unfollowSuccess, UserType } from '../../redux/users-reducer';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';

class UsersContainer extends React.Component<UsersPagePropsType> {

    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getRequestUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        const { pageSize } = this.props
        this.props.getRequestUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                onPageChanged={this.onPageChanged}
                {...this.props} // UsersPagePropsType
            />
        </>
    }
}

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    followSuccess: (userId: number) => void
    unfollowSuccess: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    getRequestUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setCurrentPage,
        getRequestUsers,
        follow,
        unfollow
    })
)(UsersContainer)