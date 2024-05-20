import React, { ComponentType } from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { followSuccess, followTC, getUsersTC, setCurrentPage, unfollowSuccess, unfollowTC, UsersPageType } from '../../redux/users-reducer';
import { Users } from './Users';
import Preloader from '../common/preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component<UsersPagePropsType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.usersPage.pageSize)
    }

    render() {
        return <>
        { this.props.usersPage.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                {...this.props} // UsersPagePropsType
            />
        </>
    }
}

type MapStatePropsType = {
    usersPage: UsersPageType
}

type MapDispatchPropsType = {
    followSuccess: (userId: number) => void
    unfollowSuccess: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export type UsersPagePropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default compose<ComponentType>(
    connect (mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setCurrentPage,
        getUsers: getUsersTC,
        follow: followTC,
        unfollow: unfollowTC
    }),
    withAuthRedirect
)(UsersContainer)