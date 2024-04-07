import React from 'react';
import style from './Friends.module.css';
import { FriendsType } from '../../redux/store';
import { Friend } from './friend/Friend';
import { AppRootStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';
import { Friends } from './Friends';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppRootStateType) => {
    return {
        friends: state.sidebar.friends
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        
    }
}

export const FriendsContainer = connect (mapStateToProps, mapDispatchToProps) (Friends);
