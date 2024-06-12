import React from 'react';
import s from './MyPosts.module.css';
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

export const MyPostsContainer = connect (mapStateToProps, {addPost}) (MyPosts);