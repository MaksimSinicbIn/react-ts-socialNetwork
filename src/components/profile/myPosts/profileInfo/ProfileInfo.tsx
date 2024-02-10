import React from 'react';
import style from './ProfileInfo.module.css';

type ProfileInfoPropsType = {

}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img src='https://sun9-12.userapi.com/impg/UvVPRI_LiSEp-kOwFQlLDeH37AOhq36mJVSFKg/QKcTyKChz3g.jpg?size=1920x1080&quality=96&sign=a11517a8914c7e7ba6a08784dca2abfe&type=album' alt='love' />
            </div>
            <div className={style.descriptionBlock}>
                avatar+description
            </div>
        </div>
    );
};