import React from 'react';
import style from './Friend.module.css'

type FriendPropsType = {
    id: number
    name: string
    avatar: string
}

export const Friend = ({name, avatar, ...restProps}: FriendPropsType) => {
    return (
            <div className={style.friendItem}>
                <img className={style.friendAvatar} src={avatar} alt="avatar" />
                <h4>{name}</h4>
            </div>
    );
};