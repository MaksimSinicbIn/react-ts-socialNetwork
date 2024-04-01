import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import { ActionsType, RootStateType } from './redux/state';
import { Friends } from './components/friends/Friends';

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void
}

const App = ({state, dispatch}: AppPropsType) => {

    return (
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Redirect from="/" to="/profile" />
                    <Route path="/dialogs" render={ () => <Dialogs
                                                                dialogPage={state.dialogsPage}
                                                                dispatch={dispatch}/>} />
                    <Route path="/profile" render={ () => <Profile
                                                                profilePage={state.profilePage}
                                                                dispatch={dispatch}/>} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
                <Friends friends={state.sidebar.friends} />
            </div>
    );
}

export default App;