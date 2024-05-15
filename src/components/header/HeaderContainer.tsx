import React from 'react';
import { Header } from './Header';
import { AuthDataType, setUserDataTC } from '../../redux/auth-reducer';
import { AppRootStateType } from '../../redux/redux-store';
import { connect } from 'react-redux';



class HeaderContainer extends React.Component<AuthPropsType> {

    componentDidMount(): void {
        this.props.setUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStatePropsType = {
    data: AuthDataType
}

type MapDispatchToPropsType = {
    // setUserData: (data: AuthDataType) => void
    setUserData: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        data: state.auth
    }
}

export type AuthPropsType = MapStatePropsType & MapDispatchToPropsType

export default connect(mapStateToProps, {setUserData: setUserDataTC}) (HeaderContainer);