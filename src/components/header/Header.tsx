import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { AuthPropsType } from './HeaderContainer';

export const Header = (props: AuthPropsType) => {
    return (
        <header className={style.header}>
            <img src='https://sun9-41.userapi.com/impg/Ce2KnasDEw1QqJ7axTPjj0swk_mmZeIgln2tfQ/b71QAiRBvYU.jpg?size=248x261&quality=96&sign=52ed1ff9cb7234bded92512c1eb5cd44&type=album' alt='logo' />
            <div className={style.loginSection}>
                {
                    props.data.isAuth
                        ? props.data.login
                        : <button><NavLink to={'/login'}>Login</NavLink></button>
                }
            </div>
        </header>
    );
};