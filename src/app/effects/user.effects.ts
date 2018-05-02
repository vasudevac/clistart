import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';

import * as userActions from '../actions/user.actions';
import { User } from '../models/user';
import { Observable, pipe } from 'rxjs/Rx';
import { UsersService } from '../users.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/of';
//import 'rxjs/add/observable/catch';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private userService: UsersService, private http : Http) {

    }

    @Effect()
    loadUsers$: Observable<Action> = this.actions$
    .ofType(userActions.LOAD_USER)
    .switchMap(() => this.userService.getUsers()
        .map((users: User[]) => new userActions.LoadUserSuccessAction(users))    
        .catch((error) => Observable.of(new userActions.LoadUserFailedAction(error)))
      );   

}
