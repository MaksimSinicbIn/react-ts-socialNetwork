import React, { ChangeEvent } from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';
import { DialogsPageType} from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}

export const Dialogs = ({dialogsPage, addMessage, updateNewMessageText}: DialogsPropsType) => {

    let dialogsElements = dialogsPage.dialogs.map( d => <DialogItem key={d.id} id={d.id} name={d.name}/> );

    let messagesElements = dialogsPage.messages.map( m => <Message key={m.id} message={m.message} /> );

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