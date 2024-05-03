import * as React from 'react';
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer';
import axios from 'axios';
import userPhoto from '../../assets/images/jizn.webp';

export const Users = (props: UsersPropsType) => {

    let getUsers = () => {
        if(props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((res) => {
                    props.setUsers(res.data.items)
                })
    }
        // props.setUsers(
        //     [
        //         { id: 1, photoUrl: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album', followed: true, fullName: 'Dmitry', status: 'Za pridurka menya ne derzhi', location: { country: 'Russia', city: 'Krasnoyarsk' } },
        //         { id: 2, photoUrl: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album', followed: false, fullName: 'Tolyan', status: 'Chisti, chisti, chtob chisto bbIlo', location: { country: 'Russia', city: 'Ekaterinburg' } },
        //         { id: 3, photoUrl: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album', followed: false, fullName: 'Serega', status: 'Copim dengi na comp', location: { country: 'Russia', city: 'Kansk' } },
        //         { id: 4, photoUrl: 'https://sun9-64.userapi.com/impg/mQnQb3d1jJ9y9KfsDwtdb2aD2J7VyhfxBadOgg/_0yQfA3B4p8.jpg?size=241x225&quality=96&sign=67c70c59641e14bcdfd925c60b702eb9&type=album', followed: true, fullName: 'Maksim', status: 'Hozyain svarki', location: { country: 'Russia', city: 'Krasnoyarsk' } }
        //     ]
        // )
    }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
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
                                    <img src={userPhoto} className={s.userAvatar} alt="" />
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
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{'u.location.country'}</div>
                                    <div>{'u.location.city'}</div>
                                </span>
                            </span>
                        </div>
                    );
                })
            }
        </div>
    );
};