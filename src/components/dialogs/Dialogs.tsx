import React, { ChangeEvent } from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';
import { DialogType, DialogsPageType, addMessageAC, updateNewMessageTextAC } from '../../redux/dialogs-reducer';
import { AppStoreType } from '../../redux/redux-store';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}

export const Dialogs = ({dialogsPage, addMessage, updateNewMessageText}: DialogsPropsType) => {

    let dialogsElements = dialogsPage.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/> );

    let messagesElements = dialogsPage.messages.map( message => <Message message={message.message} /> );

    const addMessageHandler = () => {
        addMessage()
    }

    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let text = e.currentTarget.value
            updateNewMessageText(text)
    }

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messagesElements}
                    <div className={style.addMessageForm}>
                        <div>
                            <textarea
                                onChange={onMessageChangeHandler}
                                value={dialogsPage.newMessageText}
                                placeholder='Enter your message...'
                            />
                        </div>
                        <div>
                            <button onClick={addMessageHandler}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};