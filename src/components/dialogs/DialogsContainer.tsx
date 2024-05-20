import React, { ComponentType } from 'react';
import { DialogsPageType, addMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import { AppRootStateType } from '../../redux/redux-store';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose<ComponentType>(
    connect (mapStateToProps, {addMessage, updateNewMessageText}),
    withAuthRedirect
)(Dialogs)