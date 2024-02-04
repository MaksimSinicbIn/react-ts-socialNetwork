import React from 'react';
import style from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src='https://sun9-28.userapi.com/impg/jpdJwKPD8UXxz8OuQFDJmsMafKUGlDAYAyB6IA/0pe2_tAcCmw.jpg?size=2560x1440&quality=96&sign=45ae858cb2b319bc35afc8fb90971ed9&type=album' alt='bg-piggy' />
            </div>
            <div>
                avatar+description
            </div>
            <MyPosts />
        </div>
    );
};