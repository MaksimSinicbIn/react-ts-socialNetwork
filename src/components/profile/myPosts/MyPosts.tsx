import React from 'react';
import style from './MyPosts.module.css';
import { Post } from './post/Post';
import { MyPostsPropsType } from './MyPostsContainer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type AddPostFormValuesType = {
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map( p => <Post key={p.id} id={p.id} message={p.post} likesCounts={p.likesCount} /> );

    const onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={style.posts}>
                { postsElements }
            </div>
        </div>
    );
};

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' placeholder='Enter your message' />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<AddPostFormValuesType>({form: 'profileAddNewPostForm'}) (AddNewPostForm)