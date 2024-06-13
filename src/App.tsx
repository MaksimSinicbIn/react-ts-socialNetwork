import React, { ComponentType, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { AppRootStateType, store } from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Navbar } from './components/navbar/Navbar';
import { Settings } from './components/settings/Settings';
import { FriendsContainer } from './components/friends/FriendsContainer';
import Login from './login/Login';
import Preloader from './components/common/preloader/Preloader';
import HeaderContainer from './components/header/HeaderContainer';

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'))

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
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
                    <Route path="/users" render={withSuspense(UsersContainer)} />
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