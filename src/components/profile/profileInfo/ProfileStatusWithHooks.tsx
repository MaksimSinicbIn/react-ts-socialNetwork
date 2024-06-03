import React, { ChangeEvent, useState } from 'react';
import style from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks= (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [newStatus, setNewStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(newStatus)
    }

        return (
            <div>
                {!editMode
                    ? <div><span onDoubleClick={activateEditMode}>{props.status || '------'}</span></div>
                    : <div><input type="text" autoFocus onChange={onStatusChange} onBlur={deActivateEditMode} value={newStatus} /></div>
                }
            </div>
        )
    }