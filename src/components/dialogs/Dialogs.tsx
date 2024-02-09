import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type DialogsPropsType = {

}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div>
            <div className={style.dialogs}>
                <div className={style.dialogsItems}>
                    <div className={style.dialog + ' ' + style.active}>
                        <NavLink to="/dialogs/1">Dimych</NavLink>
                    </div>
                    <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                    </div>
                    <div className={style.dialog}>
                    <NavLink to="/dialogs/3">Sveta</NavLink>
                    </div>
                    <div className={style.dialog}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                    </div>
                    <div className={style.dialog}>
                    <NavLink to="/dialogs/5">Viktor</NavLink>
                    </div>
                    <div className={style.dialog}>
                    <NavLink to="/dialogs/6">Valera</NavLink>
                    </div>
                
                </div>
                <div className={style.messages}>
                    <div className={style.message}>Hi</div>
                    <div className={style.message}>How is your it-kamasutra?</div>
                    <div className={style.message}>Yo</div>
                </div>
            </div>
        </div>
    );
};