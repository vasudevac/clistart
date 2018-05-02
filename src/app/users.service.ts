import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class UsersService {

  constructor(private http : Http) { }

  protected handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  protected extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body;
    //return body.data || { };
  }

  public getUsers () : Observable<any> {
    //return users;
    return this.http.get("https://jsonplaceholder.typicode.com/users")
    .map(this.extractData)
    .catch(this.handleError);
  }

  public getPosts () : Observable<any> {
    //return users;
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
    .map(this.extractData)
    .catch(this.handleError);
  }

  public getComments () : Observable<any> {
    //return users;
    return this.http.get("https://jsonplaceholder.typicode.com/comments")
    .map(this.extractData)
    .catch(this.handleError);
  }
}
