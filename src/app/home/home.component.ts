import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as userActions from '../actions/user.actions';
import { UserState, getUsers, getAllUsers } from '../reducer/user.reducer';
import { FinalState } from '../reducer';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  //public data : any;
  public counter: Observable<number>;
  public users$: Observable<User[]>;

  constructor(private store: Store<any>, private userService : UsersService) { 
    //this.users$ = this.store.select(getAllUsers);
    this.users$ = this.store.select(state => state.user).map(x => x.data);//Working

    this.store.dispatch(new userActions.LoadUserAction());
  }

  ngOnInit() {
    //this.userService.getUsers()
    //.subscribe(x => this.data = x);
  }

  increment() {
    this.store.dispatch(new userActions.LoadUserAction());
  }

  decrement() {
    //this.store.dispatch(new CounterActions.Decrement());
  }

  reset() {
    //this.store.dispatch(new CounterActions.Reset(3));
  }

}
