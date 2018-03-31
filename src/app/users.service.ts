import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor(private http : Http) { }

  getUsers (): Observable<any> {
    return this.http.get("https://reqres.in/api/unknown")
    //return "Hi Here Here";
  }
}
