import React, { ComponentType } from 'react';
import { Redirect } from 'react-router-dom';
import { AppRootStateType } from '../redux/redux-store';
import { connect } from 'react-redux';

export const withAuthRedirect = (Component: ComponentType<any>) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>

            return <Component {...this.props}/>
        }
    }
    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent
}

type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}