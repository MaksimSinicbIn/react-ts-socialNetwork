import React, { memo } from 'react';
import s from './MyPosts.module.css';
import { Post } from './post/Post';
import { MyPostsPropsType } from './MyPostsContainer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Input } from '../../common/formsControl/FormsControl';

type AddPostFormValuesType = {
    newPostText: string
}

const maxLength15 = maxLengthCreator(15)

export const MyPosts = memo(({ posts, addPost }: MyPostsPropsType) => {
    console.log('myPosts render');

    let postsElements = posts.map(p => <Post key={p.id} id={p.id} message={p.post} likesCounts={p.likesCount} />);

    const onAddPost = (values: AddPostFormValuesType) => {
        addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

const AddNewPostForm: React.FC<InjectedFormProps<AddPostFormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    type='textarea'
                    name='newPostText'
                    placeholder='Enter your message'
                    validate={[required, maxLength15]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<AddPostFormValuesType>({ form: 'profileAddNewPostForm' })(AddNewPostForm)