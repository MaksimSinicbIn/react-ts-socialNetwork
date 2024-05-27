import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';
import { DialogsPropsType } from './DialogsContainer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type AddMessageFormValuesType = {
    newMessageBody: string
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem key={d.id} id={d.id} name={d.name}/> );

    let messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message} /> );

    const addNewMessage = (values: AddMessageFormValuesType) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={style.messages}>
                    {messagesElements}
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormValuesType>> = (props: any) => {
    return (
        <form className={style.addMessageForm} onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormValuesType>({form:'dialogAddMessageForm'}) (AddMessageForm)