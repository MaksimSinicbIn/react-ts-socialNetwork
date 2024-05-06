import * as React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/jizn.webp';
import { UsersPagePropsType } from './UsersContainer';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { usersApi } from '../../api/api';

type UsersPropsType = {
    onPageChanged: (pageNumber: number) => void
} & UsersPagePropsType


export const Users = (props: UsersPropsType) => {

    const[startPage, setStartPage] = useState(1)
    const[endPage, setEndPage] = useState(1)

    const prevPageHandler = () => {
        if (startPage > 0) {
            setStartPage(startPage - 1)
            setEndPage(endPage - 1)
            props.onPageChanged(startPage - 1)
        }
    }
    const nextPageHandler = () => {
        if (endPage <= pagesCount ) {
            setStartPage(startPage + 1)
            setEndPage(endPage + 1)
            props.onPageChanged(startPage + 1)
        }
    }

    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)
    let pages = []
    for (let i = startPage; i <= endPage && i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            <div className={s.selector}>
                <button onClick={prevPageHandler}>-</button>
                {pages.map((page) => {
                    const onClickPageHandler = () => {
                        props.onPageChanged(page)
                    }
                    return (
                        <span key={page}
                            className={props.usersPage.currentPage === page ? s.selectedPage : ''}
                            onClick={onClickPageHandler}>{startPage}</span>
                    )
                })}
                <button onClick={nextPageHandler}>+</button>
            </div>
            <div className={s.userList}>
                {
                    props.usersPage.users.map(u => {
                        const onFollowClickHandler = () => {
                            usersApi.follow(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                        }
                        const onUnFollowClickHandler = () => {
                            usersApi.unfollow(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                        }
                        return (
                            <div className={s.userItem} key={u.id}>
                                <span>
                                    <div>
                                        <NavLink to={`/profile/${u.id}`}>
                                            <img src={userPhoto} className={s.userAvatar} alt="" />
                                        </NavLink>
                                    </div>
                                </span>
                                <div>
                                    {
                                        u.followed
                                            ? <button onClick={onUnFollowClickHandler}>Unfollow</button>
                                            : <button onClick={onFollowClickHandler}>Follow</button>
                                    }
                                </div>
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
        </>
    );
};