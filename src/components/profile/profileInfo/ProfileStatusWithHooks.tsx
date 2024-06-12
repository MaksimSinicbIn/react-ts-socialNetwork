import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    return (
        <div>
            {!editMode
                ? <div><span onDoubleClick={activateEditMode}>{props.status || '------'}</span></div>
                : <div><input type="text" autoFocus onChange={onStatusChange} onBlur={deActivateEditMode} value={status} /></div>
            }
        </div>
    )
}