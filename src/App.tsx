import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { Redirect, Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import { Friends } from './components/friends/Friends';
import { AppStoreType } from './redux/redux-store';
import { DialogsContainer } from './components/dialogs/DialogsContainer';
import { FriendsContainer } from './components/friends/FriendsContainer';

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
                    <Route path="/profile" render={ () => <Profile />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
                <FriendsContainer />
            </div>
    );
}

export default App;