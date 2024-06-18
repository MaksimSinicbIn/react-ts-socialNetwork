import React, { ChangeEvent, useState } from 'react';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/jizn.webp';
import { ContactsType, ProfileType } from '../../../redux/profile-reducer';
import { Preloader } from '../../common/preloader/Preloader';
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
import ProfileDataFormReduxForm from './ProfileDataForm';

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateUserStatus: (status: string) => void
    savePhoto: (photos: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

export const ProfileInfo = ({ profile, status, isOwner, updateUserStatus, savePhoto, saveProfile }: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files?.length) {
            savePhoto(e.currentTarget.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <div>
                <img className={s.profileInfoImg} src='https://sun9-12.userapi.com/impg/UvVPRI_LiSEp-kOwFQlLDeH37AOhq36mJVSFKg/QKcTyKChz3g.jpg?size=1920x1080&quality=96&sign=a11517a8914c7e7ba6a08784dca2abfe&type=album' alt='love' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt='smallPhoto' className={s.mainPhoto} />
                {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
                {
                    editMode
                        ? <ProfileDataFormReduxForm initialValues={profile  } profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />
                }
                <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
            </div>
        </div>
    );
};

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData = ({ profile, isOwner, goToEditMode }: ProfileDataPropsType) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
            <div>
                <b>{profile.fullName}</b>
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>:
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => <Contact
                    key={key}
                    contactTitle={key}
                    contactValue={profile.contacts[key as keyof ContactsType]} />)}
            </div>
        </div>
    )
}



type PropsType = {
    contactTitle: string
    contactValue: string
}

export const Contact = ({ contactTitle, contactValue }: PropsType) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}