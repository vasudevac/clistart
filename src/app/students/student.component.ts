import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { User } from '../models/user';
import * as userActions from '../actions/user.actions';

@Component({
  template: `<div>Student</div>
  <pre>
  {{users$ | async | json}}
</pre>
  `
})
export class StudentComponent implements OnInit {

  public users$: Observable<User[]>;

  constructor(private store: Store<any>, private route: ActivatedRoute) {
    this.users$ = store.select(state => state.user).map(x => x.data);//Working

    //this.store.dispatch(new userActions.LoadUserAction());
   }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    //alert(id);
  }

}
