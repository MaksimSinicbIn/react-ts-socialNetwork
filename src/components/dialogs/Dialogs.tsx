import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: string 
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
    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    <DialogItem id="1" name="Dimych"/>
                    <DialogItem id="2" name="Andrey"/>
                    <DialogItem id="3" name="Sveta"/>
                    <DialogItem id="4" name="Sasha"/>
                    <DialogItem id="5" name="Viktor"/>
                    <DialogItem id="6" name="Valera"/>
                </div>
                <div className={style.messages}>
                    <Message message="Hi" />
                    <Message message="How is your it-kamasutra?" />
                    <Message message="Yo" />
                </div>
            </div>
        </div>
    );
};