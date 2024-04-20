import React, { ChangeEvent } from 'react';
import style from './MyPosts.module.css';
import { Post } from './post/Post';
import { PostType } from '../../../redux/profile-reducer';
import { MyPostsPropsType } from './MyPostsContainer';

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map( p => <Post key={p.id} id={p.id} message={p.post} likesCounts={p.likesCount} /> );

    // const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        props.addPost()
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        // ref={newPostElement}
                        onChange={onPostChangeHandler}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>
                { postsElements }
            </div>
        </div>
    );
};