import React from 'react';
import style from './MyPosts.module.css';
import { Post } from './post/Post';
import { ActionsType, PostType, addPostAC, updateNewPostTextAC } from '../../../redux/State';

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export const MyPosts = ({posts, newPostText, dispatch}: MyPostsPropsType) => {

    let postsElements = posts.map( p => <Post key={p.id} id={p.id} message={p.post} likesCounts={p.likesCount} /> );

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        dispatch(addPostAC())
    }

    const onPostChangeHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            dispatch(updateNewPostTextAC(text))
        }
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChangeHandler}
                        value={newPostText}
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