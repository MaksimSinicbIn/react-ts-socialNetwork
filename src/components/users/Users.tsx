import * as React from 'react';
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer';


export const Users = (props: UsersPropsType) => {
    
    if(props.usersPage.users.length === 0) {
        props.setUsers(
            [
                { id: 1, photoUrl: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album', followed: true, fullName: 'Dmitry', status: 'Za pridurka menya ne derzhi', location: { country: 'Russia', city: 'Krasnoyarsk' } },
                { id: 2, photoUrl: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album', followed: false, fullName: 'Tolyan', status: 'Chisti, chisti, chtob chisto bbIlo', location: { country: 'Russia', city: 'Ekaterinburg' } },
                { id: 3, photoUrl: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album', followed: false, fullName: 'Serega', status: 'Copim dengi na comp', location: { country: 'Russia', city: 'Kansk' } },
                { id: 4, photoUrl: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album', followed: true, fullName: 'Maksim', status: 'Hozyain svarki', location: { country: 'Russia', city: 'Krasnoyarsk' } }
            ]
        )
    }

    return (
        <div>
            {
                props.usersPage.users.map(u => {
                    const onFollowClickHandler = () => {
                        props.follow(u.id)
                    };
                    const onUnFollowClickHandler = () => {
                        props.unfollow(u.id)
                    };
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img src={u.photoUrl} className={s.userAvatar} alt="" />
                                </div>
                                <div>
                                    {
                                        u.followed
                                        ? <button onClick={onUnFollowClickHandler}>Unfollow</button>
                                        : <button onClick={onFollowClickHandler}>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </span>
                            </span>
                        </div>
                    );
                })
            }
        </div>
    );
};