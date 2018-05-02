import { ActionReducerMap } from '@ngrx/store';

import * as fromUser from './user.reducer';

export interface FinalState {
    users: fromUser.UserState
}

export const reducers: ActionReducerMap<FinalState> = {
    users: fromUser.reducer
}