import React from 'react';
import style from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './myPosts/profileInfo/ProfileInfo';
import { ProfilePageType } from '../../redux/State';

type ProfilePropsType = {
    profilePage: ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} />
        </div>
    );
};