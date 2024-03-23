import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';
import { DialogsPageType } from '../../redux/State';

type DialogsPropsType = {
    dialogPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (nextMessageText: string) => void
}

export const Dialogs = ({dialogPage, addMessage, updateNewMessageText}: DialogsPropsType) => {

    let dialogsElements = dialogPage.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/> );

    let messagesElements = dialogPage.messages.map( message => <Message message={message.message} /> );

    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessageHandler = () => {
        addMessage()
    }

    const onMessageChangeHandler = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            updateNewMessageText(text)
        }
    }

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messagesElements}
                </div>
                <div className={style.addMessageForm}>
                    <div>
                        <textarea 
                            ref={newMessageElement}
                            onChange={onMessageChangeHandler}
                            value={dialogPage.newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={addMessageHandler}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};