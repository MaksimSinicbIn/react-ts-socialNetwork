import { combineReducers, createStore } from 'redux'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { sidebarReducer } from './sidebar-reducer';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

export const store = createStore(rootReducer);

export  type AppStoreType = typeof store

export type AppRootStateType = ReturnType<typeof rootReducer>;

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;