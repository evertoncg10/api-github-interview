import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  urlSearchUserGitHub = 'https://api.github.com/users/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getUserGitHub(userSearch: string): Observable<User> {
    return this.httpClient.get<User>(this.urlSearchUserGitHub + userSearch);
  }
}
