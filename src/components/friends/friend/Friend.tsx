import React from 'react';
import s from './Friend.module.css'

type FriendPropsType = {
    id: number
    name: string
    avatar: string
}

export const Friend = ({name, avatar, ...restProps}: FriendPropsType) => {
    return (
            <div className={s.friendItem}>
                <img className={s.friendAvatar} src={avatar} alt="avatar" />
                <h4>{name}</h4>
            </div>
    );
};