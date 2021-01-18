import { Component, OnInit } from '@angular/core';

import { User } from './../../shared/model/user.model';
import { UserService } from './../../shared/service/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchUser: string;
  userDto: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  public getUserGitHub(): void {
    this.userService.getUserGitHub(this.searchUser).subscribe(data => {
      this.createdUserDto(data);
    });
  }

  private createdUserDto(user: any): void {
    this.userDto = new User();
    this.userDto.id = user.id;
    this.userDto.login = user.login;
    this.userDto.avatarUrl = user.avatar_url;
    this.userDto.urlGitHUb = user.html_url;
    this.userDto.name = user.name;
    this.userDto.location = user.location;
    this.userDto.publicRepos = user.public_repos;
    this.userDto.followers = user.followers;
    this.userDto.following = user.following;
    this.userDto.DateCreated = user.created_at;
    this.userDto.DateUpdated = user.updated_at;
  }
}
