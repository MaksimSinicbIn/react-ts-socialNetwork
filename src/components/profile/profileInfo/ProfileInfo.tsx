import React from 'react';
import style from './ProfileInfo.module.css';
import { ProfileType } from '../../../redux/profile-reducer';
import { Preloader } from '../../common/preloader/Preloader';
import { ProfileStatus } from './ProfileStatus';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';



type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileInfo = ({profile, status, updateUserStatus}: ProfileInfoPropsType) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={style.profileInfoImg} src='https://sun9-12.userapi.com/impg/UvVPRI_LiSEp-kOwFQlLDeH37AOhq36mJVSFKg/QKcTyKChz3g.jpg?size=1920x1080&quality=96&sign=a11517a8914c7e7ba6a08784dca2abfe&type=album' alt='love' />
            </div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.small} alt='smallPhoto'/>
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
                <p>{profile.fullName}</p>
                <input type='checkbox' checked={profile.lookingForAJob}/>
                <p>{profile.lookingForAJobDescription}</p>
                {JSON.stringify(profile.contacts)}
            </div>
        </div>
    );
};