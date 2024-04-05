import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RootStateType, store} from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const rerenderEntireTree = (_state: RootStateType ) => {
    ReactDOM.render(
        <BrowserRouter>
            <App 
            state={_state}
            dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe( () => rerenderEntireTree(store._state))