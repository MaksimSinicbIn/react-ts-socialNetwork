import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';
import { DialogsPageType } from '../../redux/State';

type DialogsPropsType = {
    dialogPage: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogPage.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/> );

    let messagesElements = props.dialogPage.messages.map( message => <Message message={message.message} /> );

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    );
};