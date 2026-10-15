import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import User from './user';
import { Observable } from 'rxjs';

@Service()
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


    // the fetch api returns a "promise"
    // we use .then() to get the response
    //fetch(this.url)
    //  .then(response=>response.json())
    //  .then(data=>console.log(data));
  }


}
