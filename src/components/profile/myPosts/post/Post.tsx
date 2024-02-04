import React from 'react';
import style from './Post.module.css';

export const Post = () => {
    return (
        <div className={style.item}>
            <img src='https://sun9-60.userapi.com/impg/YdOcbH3mO846v2o4vHTD58R7cG0beppAXgKjXQ/P2dWvkdSoBU.jpg?size=512x512&quality=96&sign=b6e76ea19bb4a2c9237f3d552869684b&type=album' alt='bg-bear' />
            Post
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};