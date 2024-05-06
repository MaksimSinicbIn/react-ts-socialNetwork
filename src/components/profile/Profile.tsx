import React from 'react';
import style from './Profile.module.css';
import { ProfileInfo } from './myPosts/profileInfo/ProfileInfo';
import { MyPostsContainer } from './myPosts/MyPostsContainer';
import { ProfilePagePropsType } from './ProfileContainer';

export const Profile = (state: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo profile={state.profile}/>
            <MyPostsContainer />
        </div>
    );
};