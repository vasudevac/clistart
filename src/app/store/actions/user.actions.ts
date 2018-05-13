import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export const LOAD_USER = '[User] Load user';
export const LOAD_USER_SUCCESS = '[User] Load user success';
export const LOAD_USER_FAILED = '[User] Load user failed'; 

export class LoadUserAction implements Action {
    readonly type = LOAD_USER;

    constructor() {};
}

export class LoadUserSuccessAction implements Action {
    readonly type = LOAD_USER_SUCCESS;

    constructor(public payload: User[]) {};
}

export class LoadUserFailedAction implements Action {
    readonly type = LOAD_USER_FAILED;

    constructor(public payload: any) {};
}

export type LoadUserActions = LoadUserAction | LoadUserSuccessAction | LoadUserFailedAction;