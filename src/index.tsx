import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootStateType, store} from './redux/State';

const rerenderEntireTree = (_state: RootStateType ) => {
    ReactDOM.render(
        <App 
            state={_state}
            addPost={store.addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
            addMessage={store.addMessage.bind(store)}
            updateNewMessageText={store.updateNewMessageText.bind(store)}
        />,
    document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => rerenderEntireTree(store._state))