import * as userActions from '../actions/user.actions';
import { User } from '../models/user';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface UserState {
    loaded: boolean;
    loading: boolean;
    data: any;
}

const initialState: UserState = {
    loaded: false,
    loading: false,
    data: []
}

export function reducer(state = initialState, action: userActions.LoadUserActions): UserState {

    switch(action.type) {

        case userActions.LOAD_USER: {
            // return Object.assign({}, state, {
            //     loading: true,
            //     data : [{"id":"1", "name": "Vasu"}]
            // });
            var user: User = { id: 1, name: "Vasu"}
            //alert("3");
            return {
                loaded: false,
                loading: true,
                data: []
            }
        }

        case userActions.LOAD_USER_SUCCESS: {
            const users = action.payload;
            //alert("4");
            return {
                loaded: true,
                loading: false,
                data: users
            }
        }

        case userActions.LOAD_USER_FAILED: {
            alert('5');
            return {
                loaded: true,
                loading: false,
                data: []
            }
        }

        default: {
            return state;
        }
    }
}

export const getUsers = (state: UserState) => state.data;

export const getUserState = createFeatureSelector<UserState>('user');

export const getAllUsers = createSelector(getUserState, (state: UserState) => state.data);