import React, { ChangeEvent } from 'react';
import style from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, StateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
        
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
                    : <div><input type="text" autoFocus onChange={this.onStatusChange} onBlur={this.deActivateEditMode} value={this.state.status} /></div>
                }
            </div>
        )
    }
};