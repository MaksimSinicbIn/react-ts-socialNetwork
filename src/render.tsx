import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootStateType, addPost, state } from './redux/State';

export const rerenderEntireTree = (state: RootStateType ) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
    document.getElementById('root')
    );
}

rerenderEntireTree(state);
