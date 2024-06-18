import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/jizn.webp';
import { ProfileType } from '../../../redux/profile-reducer';
import { Preloader } from '../../common/preloader/Preloader';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateUserStatus: (status: string) => void
    savePhoto: (photos: File) => void
}

export const ProfileInfo = ({ profile, status, isOwner, updateUserStatus, savePhoto }: ProfileInfoPropsType) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    return (
        <div>
            <div>
                <img className={s.profileInfoImg} src='https://sun9-12.userapi.com/impg/UvVPRI_LiSEp-kOwFQlLDeH37AOhq36mJVSFKg/QKcTyKChz3g.jpg?size=1920x1080&quality=96&sign=a11517a8914c7e7ba6a08784dca2abfe&type=album' alt='love' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt='smallPhoto' className={s.mainPhoto}/>
                {isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
                <p>{profile.fullName}</p>
                <input type='checkbox' checked={profile.lookingForAJob} />
                <p>{profile.lookingForAJobDescription}</p>
                {JSON.stringify(profile.contacts)}
            </div>
        </div>
    );
};