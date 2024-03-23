import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';
import { RootStateType } from './redux/State';
import { Friends } from './components/friends/Friends';

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (nextText: string) => void
    addMessage: () => void
    updateNewMessageText: (nextMessageText: string) => void
}

const App = ({state, addPost, updateNewPostText, addMessage, updateNewMessageText}: AppPropsType) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <Dialogs
                                                                dialogPage={state.dialogsPage}
                                                                addMessage={addMessage}
                                                                updateNewMessageText={updateNewMessageText}/>} />
                    <Route path="/profile" render={ () => <Profile
                                                                profilePage={state.profilePage}
                                                                addPost={addPost}
                                                                updateNewPostText={updateNewPostText}/>} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
                <Friends friends={state.sidebar.friends} />
            </div>
        </BrowserRouter>
    );
}

export default App;