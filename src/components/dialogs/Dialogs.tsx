import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: number 
}

type MessagePropsType = {
    message: string
}

type DialogsPropsType = {

}

const DialogItem = ({name, id}: DialogItemPropsType) => {

    let path = "/dialogs/" + id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    );
};

const Message = ({message}: MessagePropsType) => {
    return(
        <div className={style.message}>{message}</div>
    )
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ]

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
    ]

    let dialogsElements = dialogsData.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/> );

    let messagesElements = messagesData.map( message => <Message message={message.message} /> );

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