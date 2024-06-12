import React from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './dialogItem/DialogItem';
import { Message } from './message/Message';
import { DialogsPropsType } from './DialogsContainer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { Input } from '../common/formsControl/FormsControl';

type AddMessageFormValuesType = {
    newMessageBody: string
}

const maxLength30 = maxLengthCreator(30)

export const Dialogs = ({ dialogsPage, addMessage }: DialogsPropsType) => {

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />);

    let messagesElements = dialogsPage.messages.map(m => <Message key={m.id} message={m.message} />);

    const addNewMessage = (values: AddMessageFormValuesType) => {
        addMessage(values.newMessageBody)
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
};

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormValuesType>> = (props: any) => {
    return (
        <form className={s.addMessageForm} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    name='newMessageBody'
                    type='textarea'
                    placeholder='Enter your message'
                    validate={[required, maxLength30]}
                />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormValuesType>({ form: 'dialogAddMessageForm' })(AddMessageForm)