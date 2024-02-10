import React from 'react';
import style from './MyPosts.module.css';
import { Post } from './post/Post';

export const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message="Hi, how are you?" likesCounts={15} />
                <Post message="It is my first post" likesCounts={20} />
                <Post message="Hello, friend!" likesCounts={5} />
            </div>
        </div>
    );
};