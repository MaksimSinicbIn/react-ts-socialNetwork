import * as React from 'react';
import s from './Users.module.css'
import { UsersPagePropsType } from './UsersContainer';
import { Paginator } from '../common/paginator/Paginator';
import { User } from './User';



export type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
} & UsersPagePropsType


export const Users = ({ users, currentPage, totalUsersCount, pageSize, followingInProgress, onPageChanged, ...props }: UsersPropsType) => {
    return (
        <>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div className={s.userList}>
                {
                    users.map(u => <User
                            key={u.id}
                            user={u}
                            followingInProgress={followingInProgress}
                            unfollow={props.unfollow}
                            follow={props.follow}
                        />
                    )
                }
            </div>
        </>
    );
};