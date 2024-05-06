import React from 'react';
import { Header } from './Header';
import { AuthDataType, setUserData } from '../../redux/auth-reducer';
import { AppRootStateType } from '../../redux/redux-store';
import { connect } from 'react-redux';
import { authMeApi } from '../../api/api';


class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount(): void {
        authMeApi.authMeResponse()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setUserData(data.data)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStatePropsType = {
    data: AuthDataType
}

type MapDispatchToPropsType = {
    setUserData: (data: AuthDataType) => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        data: state.auth
    }
}

export type AuthPropsType = MapStatePropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {setUserData}) (HeaderContainer);