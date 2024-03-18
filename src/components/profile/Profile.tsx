import React from 'react';
import style from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './myPosts/profileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/State';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: (post: string) => void
}

export const Profile = ({profilePage, addPost}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={profilePage.posts} addPost={addPost}/>
        </div>
    );
};