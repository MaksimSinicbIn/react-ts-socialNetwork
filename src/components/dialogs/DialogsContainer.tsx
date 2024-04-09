import React from 'react';
import { addMessageAC, updateNewMessageTextAC } from '../../redux/dialogs-reducer';
import { AppRootStateType } from '../../redux/redux-store';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (nextMessageText: string) => {
            dispatch(updateNewMessageTextAC(nextMessageText))
        }
    }
}

export const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);