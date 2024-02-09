import React from 'react';
import style from './Post.module.css';

type PostPropsType = {
    message: string
    likesCounts: number
}

export const Post = ({message, likesCounts}: PostPropsType) => {
    return (
        <div className={style.item}>
            <img src='https://sun9-60.userapi.com/impg/YdOcbH3mO846v2o4vHTD58R7cG0beppAXgKjXQ/P2dWvkdSoBU.jpg?size=512x512&quality=96&sign=b6e76ea19bb4a2c9237f3d552869684b&type=album' alt='bg-bear' />
            {message}
            <div>
                <span>Like</span> {likesCounts}
            </div>
        </div>
    );
};