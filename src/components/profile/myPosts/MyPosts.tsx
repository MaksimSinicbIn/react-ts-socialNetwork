import React from 'react';
import style from './MyPosts.module.css';
import { Post } from './post/Post';

export const MyPosts = () => {

    let postsData = [
        {id: 1, post: "Hi", likesCount: 15},
        {id: 2, post: "Hi, how are you?", likesCount: 20},
        {id: 3, post: "Hello, friend!", likesCount: 5},
    ]
    
    let postsElements = postsData.map( post => <Post message={post.post} likesCounts={post.likesCount} /> );

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
                { postsElements }
            </div>
        </div>
    );
};