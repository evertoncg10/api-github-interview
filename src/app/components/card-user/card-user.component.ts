import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../../shared/model/user.model';
import { RepositorysService } from './../../shared/service/repositorys.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {

  @Input()
  // tslint:disable-next-line: variable-name
  private _user: User;

  listRepositorys: any[];
  listRepositorysMostVisited: any[];

  public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }

  constructor(
    private repositorysService: RepositorysService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public getListRepositorysOfUserSearched(): void {
    this.repositorysService.getListRepositorysOfUserSearched(this.user.login).subscribe(data => {
      this.listRepositorys = data;
      this.listRepositorysMostVisited = null;
    });
  }

  public getListRepositorysMostVisitedOfUserSearched(): void {
    this.repositorysService.getListRepositorysMostVisitedOfUserSearched(this.user.login).subscribe(data => {
      this.listRepositorysMostVisited = data;
      this.listRepositorys = null;
    });
  }

  goToUserByState(user: User): void {
    this.router.navigateByUrl('/user', {
      state: user
    });
  }

}
