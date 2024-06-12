import * as React from 'react';
import { useState } from 'react';
import s from './Paginator.module.css'

type PaginationPropsType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({ currentPage, totalUsersCount, pageSize, onPageChanged }: PaginationPropsType) => {

    const [startPage, setStartPage] = useState(1)
    const [endPage, setEndPage] = useState(1)

    const prevPageHandler = () => {
        if (startPage > 0) {
            setStartPage(startPage - 1)
            setEndPage(endPage - 1)
            onPageChanged(startPage - 1)
        }
    }
    const nextPageHandler = () => {
        if (endPage <= pagesCount) {
            setStartPage(startPage + 1)
            setEndPage(endPage + 1)
            onPageChanged(startPage + 1)
        }
    }

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = startPage; i <= endPage && i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div className={s.selector}>
            <button onClick={prevPageHandler}>-</button>
            {pages.map((page) => {
                const onClickPageHandler = () => { onPageChanged(page) }
                return (
                    <span key={page}
                        className={currentPage === page ? s.selectedPage : ''}
                        onClick={onClickPageHandler}>{startPage}</span>
                )
            })}
            <button onClick={nextPageHandler}>+</button>
        </div>
    );
};