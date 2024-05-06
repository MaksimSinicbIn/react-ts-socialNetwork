import React from "react"
import axios from "axios";
import { Profile } from "./Profile";
import { AppRootStateType } from "../../redux/redux-store";
import { connect } from "react-redux";
import { ProfileType, setUserProfile } from "../../redux/profile-reducer";


class ProfileContainer extends React.Component<ProfilePagePropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePagePropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);