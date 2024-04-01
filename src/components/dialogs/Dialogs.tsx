import React, { ChangeEvent } from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';
import { ActionsType, DialogsPageType} from '../../redux/state';
import { addMessageAC, updateNewMessageTextAC } from '../../redux/dialogs-reducer';

type DialogsPropsType = {
    dialogPage: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export const Dialogs = ({dialogPage, dispatch}: DialogsPropsType) => {

    let dialogsElements = dialogPage.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/> );

    let messagesElements = dialogPage.messages.map( message => <Message message={message.message} /> );

    const addMessageHandler = () => {
        dispatch(addMessageAC())
    }

    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let text = e.currentTarget.value
            dispatch(updateNewMessageTextAC(text))
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
                                value={dialogPage.newMessageText}
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