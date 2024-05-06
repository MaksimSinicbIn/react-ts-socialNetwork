import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Redirect, Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import { DialogsContainer } from './components/dialogs/DialogsContainer';
import { FriendsContainer } from './components/friends/FriendsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';



type AppPropsType = {
    // store: AppStoreType
}

const App = (props: AppPropsType) => {

    return (
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Redirect from="/" to="/profile" />
                    <Route path="/dialogs" render={ () => <DialogsContainer />} />
                    <Route path="/profile/:userId?" render={ () => <ProfileContainer />} />
                    <Route path="/users" render={ () => <UsersContainer />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
                <FriendsContainer />
            </div>
    );
}

export default App;