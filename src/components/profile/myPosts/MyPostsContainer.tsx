import React from 'react';
import style from './MyPosts.module.css';
import { PostType, addPost } from '../../../redux/profile-reducer';
import { AppRootStateType } from '../../../redux/redux-store';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';

type MapStatePropsType = {
    posts: PostType[]
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         addPost: () => {
//             dispatch(addPostAC())
//         }
//     }
// }

export const MyPostsContainer = connect (mapStateToProps, {addPost}) (MyPosts);