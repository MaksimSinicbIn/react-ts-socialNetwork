import React from 'react';
import style from './../Dialogs.module.css';

type MessagePropsType = {
    message: string
}

export const Message = ({message}: MessagePropsType) => {
    return(
        <div className={style.message}>{message}</div>
    )
}