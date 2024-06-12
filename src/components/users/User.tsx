import s from './Users.module.css'
import userPhoto from '../../assets/images/jizn.webp';
import { UserType } from "../../redux/users-reducer";
import { NavLink } from "react-router-dom";

type UserPropsType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const User = ({ user, followingInProgress, follow, unfollow }: UserPropsType) => {

    const onFollowClickHandler = () => { follow(user.id) }
    const onUnFollowClickHandler = () => { unfollow(user.id) }

    return (
        <div className={s.userItem} key={user.id}>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={userPhoto} className={s.userAvatar} alt="" />
                    </NavLink>
                </div>
            </span>
            <div>
                {
                    user.followed
                        ? <button
                            onClick={onUnFollowClickHandler}
                            disabled={followingInProgress.some(id => id === user.id)}
                        >Unfollow</button>
                        : <button
                            onClick={onFollowClickHandler}
                            disabled={followingInProgress.some(id => id === user.id)}
                        >Follow</button>
                }
            </div>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
        </div>
    );
}