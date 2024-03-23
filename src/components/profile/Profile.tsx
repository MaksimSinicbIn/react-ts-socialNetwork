import React from 'react';
import style from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './myPosts/profileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/State';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (nextText: string) => void
}

export const Profile = ({profilePage, addPost, updateNewPostText}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </div>
    );
};