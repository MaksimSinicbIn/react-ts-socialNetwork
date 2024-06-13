import React, { ComponentType } from 'react';
import './App.css';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { AppRootStateType, store } from './redux/redux-store';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Navbar } from './components/navbar/Navbar';
import { Settings } from './components/settings/Settings';
import { FriendsContainer } from './components/friends/FriendsContainer';
import Login from './login/Login';
import Preloader from './components/common/preloader/Preloader';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import ProfileContainer from './components/profile/ProfileContainer';

class App extends React.Component<AppPropsType> {

    componentDidMount(): void {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized) {
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

const AppContainer = compose<ComponentType>(withRouter, connect(mapStateToProps, { initializeApp }))(App)

const SocialNetworkApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default SocialNetworkApp