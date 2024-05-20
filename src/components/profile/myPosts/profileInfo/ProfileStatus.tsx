import React from 'react';
import style from './ProfileInfo.module.css';

type ProfileStatusPropsType = {
    status: string
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
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
                    : <div><input type="text" autoFocus onBlur={this.deActivateEditMode} value={this.props.status} /></div>
                }
            </div>
        )
    }
};