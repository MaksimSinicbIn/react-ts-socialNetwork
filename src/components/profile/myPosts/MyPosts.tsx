import React from 'react';
import style from './MyPosts.module.css';
import { Post } from './post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={style.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};