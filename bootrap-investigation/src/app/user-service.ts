import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Service()
export class UserService {

  url = "http://localhost:3000/users"

  http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  addUser(user:User): Observable<User> {

    const {id, ...userToAdd} = user;
    return this.http.post<User>(this.url, userToAdd);
  }

  updateUser(user:User): Observable<User> {

    return this.http.put<User>(`${this.url}/${user.id}`, user);
  }
}
