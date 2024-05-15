import React, { ChangeEvent } from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';
import { DialogsPropsType } from './DialogsContainer';

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} id={d.id} name={d.name}/> );

    let messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message} /> );

    const addMessageHandler = () => {
        props.addMessage()
    }

    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessageText(text)
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
                                value={props.dialogsPage.newMessageText}
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