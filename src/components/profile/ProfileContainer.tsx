import React from "react"
import { Profile } from "./Profile";
import { AppRootStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { ProfileType, getUserProfileTC } from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

export type ProfilePagePropsType = MapStatePropsType & MapDispatchToPropsType

export type PropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile: getUserProfileTC}) (withUrlDataContainerComponent);