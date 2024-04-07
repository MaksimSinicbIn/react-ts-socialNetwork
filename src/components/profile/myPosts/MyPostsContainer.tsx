import React from 'react';
import style from './MyPosts.module.css';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import { AppRootStateType } from '../../../redux/redux-store';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';


const mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
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