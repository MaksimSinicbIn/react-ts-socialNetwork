import React from "react"
import axios from "axios";
import { Profile } from "./Profile";
import { AppRootStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { ProfileType, setUserProfile } from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";


class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                this.props.setUserProfile(res.data)
            })
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
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePagePropsType = MapStatePropsType & MapDispatchToPropsType

export type PropsType = RouteComponentProps<PathParamsType> & ProfilePagePropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent);