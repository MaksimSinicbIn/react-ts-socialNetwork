import React from 'react';
import style from './MyPosts.module.css';
import { PostType, addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { AppRootStateType } from '../../../redux/redux-store';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

type MapStatePropsType = {
    posts: PostType[]
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (nextText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);