import React, { ComponentType } from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import { FriendsContainer } from './components/friends/FriendsContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './login/Login';
import { connect } from 'react-redux';
import { AppRootStateType } from './redux/redux-store';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';


class App extends React.Component<AppPropsType> {

    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.isInitialized) {
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    {/* <Redirect from="/*" to="/profile" /> */}
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route path="/dialogs" render={() => <DialogsContainer />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
                <FriendsContainer />
            </div>
        );
    }
}

type MapStatePropsType = {
    isInitialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

export type AppPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default compose<ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)