import React from 'react';
import style from './Profile.module.css';
import { MyPosts } from './myPosts/MyPosts';
import { ProfileInfo } from './myPosts/profileInfo/ProfileInfo';
import { ActionsType, ProfilePageType } from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const Profile = ({profilePage, dispatch}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={profilePage.posts}
                newPostText={profilePage.newPostText}
                dispatch={dispatch}
            />
        </div>
    );
};