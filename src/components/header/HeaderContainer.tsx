import React from 'react';
import { Header } from './Header';
import { AuthDataType, getUserDataTC } from '../../redux/auth-reducer';
import { AppRootStateType } from '../../redux/redux-store';
import { connect } from 'react-redux';



class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount(): void {
        this.props.getUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStatePropsType = {
    data: AuthDataType
}

type MapDispatchToPropsType = {
    getUserData: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        data: state.auth
    }
}

export type AuthPropsType = MapStatePropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {getUserData: getUserDataTC}) (HeaderContainer);