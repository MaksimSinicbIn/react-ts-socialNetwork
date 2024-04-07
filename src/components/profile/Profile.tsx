import React from 'react';
import style from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './myPosts/profileInfo/ProfileInfo';
import { AppStoreType } from '../../redux/redux-store';
import { MyPostsContainer } from './myPosts/MyPostsContainer';

type ProfilePropsType = {
    // store: AppStoreType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};