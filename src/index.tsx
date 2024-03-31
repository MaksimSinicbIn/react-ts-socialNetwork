import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootStateType, store} from './redux/State';

const rerenderEntireTree = (_state: RootStateType ) => {
    ReactDOM.render(
        <App 
            state={_state}
            dispatch={store.dispatch.bind(store)}
        />,
    document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => rerenderEntireTree(store._state))