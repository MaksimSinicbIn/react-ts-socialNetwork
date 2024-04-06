import React, { ChangeEvent } from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';
import { ActionsType, DialogsPageType, StoreType} from '../../redux/store';
import { addMessageAC, updateNewMessageTextAC } from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    store: StoreType
}

export const Dialogs = ({store}: DialogsPropsType) => {

    let state = store.getState().dialogsPage

    let dialogsElements = state.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/> );

    let messagesElements = state.messages.map( message => <Message message={message.message} /> );

    const addMessageHandler = () => {
        store.dispatch(addMessageAC())
    }

    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let text = e.currentTarget.value
            store.dispatch(updateNewMessageTextAC(text))
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
                                value={state.newMessageText}
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