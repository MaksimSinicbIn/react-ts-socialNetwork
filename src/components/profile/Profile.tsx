import React from 'react';
import s from './Profile.module.css';
import { ProfileInfo } from './profileInfo/ProfileInfo';
import { MyPostsContainer } from './myPosts/MyPostsContainer';
import { ProfileType } from '../../redux/profile-reducer';

type PropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateUserStatus: (status: string) => void
    savePhoto: (photos: File) => void
}

export const Profile = ({ profile, status, isOwner, updateUserStatus, savePhoto }: PropsType) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner} savePhoto={savePhoto}/>
            <MyPostsContainer />
        </div>
    );
};