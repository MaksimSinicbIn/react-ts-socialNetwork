import React from 'react';
import style from './Friends.module.css';
import { FriendsType } from '../../redux/store';
import { Friend } from './friend/Friend';

type FriendsPropsType = {
    friends: FriendsType[]
}

export const Friends = ({friends}: FriendsPropsType) => {

    const friendsItem = friends.map( f => <Friend key={f.id} id={f.id} avatar={f.avatar} name={f.name} />)

    return (
        <div className={style.friends}>
            <h3>My friends</h3>
            {friendsItem}
        </div>
    );
};