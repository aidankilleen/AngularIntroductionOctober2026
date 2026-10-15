import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import User from './user';
import { Observable } from 'rxjs';

//@Service()
@Injectable({providedIn:'root'})
export class UserHttpService {

  // angular uses rxjs for making ajax calls
  url = "http://localhost:3000/users";
  http = inject(HttpClient);

  // constructor parameter injection doesn't work for services
  constructor() {
  }

  getUsers(): Observable<User[]> {
    // the http client returns an "Observable"
    // we use .subscribe() to get the response
    return this.http.get<User[]>(this.url);

    // Observables are "lazy"
    // they only make the request
    // if someone provides a "subscribe()"

    // the fetch api is "eager"
    // the request is always made
    // even if there is no "then()"

    // the fetch api returns a "promise"
    // we use .then() to get the response
    //fetch(this.url)
    //  .then(response=>response.json())
    //  .then(data=>console.log(data));
  }

  getUser(id: number): Observable<User> {

    return this.http.get<User>(`${this.url}/${id}`);
  }

  deleteUser(id: number): Observable<void> {

    return this.http.delete<void>(`${this.url}/${id}`);
  }

  addUser(user: User): Observable<User> {

    // remove the id field from the user so that json server will
    // assign a new id.

    const {id, ...userToAdd} = user;
    return this.http.post<User>(this.url, userToAdd);
  }

  updateUser(user: User): Observable<User> {

    return this.http.put<User>(`${this.url}/${user.id}`, user);
  }
}
