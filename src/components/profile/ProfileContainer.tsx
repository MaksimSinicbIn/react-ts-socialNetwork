import React, { ComponentType } from "react"
import { Profile } from "./Profile";
import { AppRootStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { ProfileType, getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount(): void {
        let userId: number | null = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.autorizedUserId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId as number)
        this.props.getUserStatus(userId as number)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
    status: string
    autorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

export type ProfilePagePropsType = MapStatePropsType & MapDispatchToPropsType

export type PropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)