import React from 'react';
import style from './MyPosts.module.css';
import { Post } from './post/Post';
import { PostType } from '../../../redux/State';

type MyPostsPropsType = {
    posts: Array<PostType>
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map( post => <Post message={post.post} likesCounts={post.likesCount} /> );

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