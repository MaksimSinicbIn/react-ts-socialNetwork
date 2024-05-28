import React from 'react';
import { Header } from './Header';
import { AuthDataType, getAuthUserData, logOut } from '../../redux/auth-reducer';
import { AppRootStateType } from '../../redux/redux-store';
import { connect } from 'react-redux';



class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount(): void {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStatePropsType = {
    data: AuthDataType
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logOut: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        data: state.auth
    }
}

export type AuthPropsType = MapStatePropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {getAuthUserData, logOut}) (HeaderContainer);