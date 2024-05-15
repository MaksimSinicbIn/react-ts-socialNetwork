import React from "react"
import axios from "axios";
import { Profile } from "./Profile";
import { AppRootStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { ProfileType, setUserProfileTC } from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { profileApi } from "../../api/api";


class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.setUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (userId: string) => void
}

export type ProfilePagePropsType = MapStatePropsType & MapDispatchToPropsType

export type PropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile: setUserProfileTC}) (withUrlDataContainerComponent);