import React from 'react';
import { DialogsPageType, addMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import { AppRootStateType } from '../../redux/redux-store';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AuthDataType } from '../../redux/auth-reducer';

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}

type MapDispatchPropsType = {
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageAC())
//         },
//         updateNewMessageText: (nextMessageText: string) => {
//             dispatch(updateNewMessageTextAC(nextMessageText))
//         }
//     }
// }

export const DialogsContainer = connect (mapStateToProps, {addMessage, updateNewMessageText}) (Dialogs);