import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositorysService {

  urlListRepositorysOfUserSearched = 'https://api.github.com/users/';


  constructor(
    private httpClient: HttpClient
  ) { }

  public getListRepositorysOfUserSearched(userName: string): Observable<any[]>{
    return this.httpClient.get<any[]>(this.urlListRepositorysOfUserSearched + userName + '/repos');
  }

  public getListRepositorysMostVisitedOfUserSearched(userName: string): Observable<any[]>{
    return this.httpClient.get<any[]>(this.urlListRepositorysOfUserSearched + userName + '/starred');
  }


}
