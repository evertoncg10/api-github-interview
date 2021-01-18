import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositorys-list',
  templateUrl: './repositorys-list.component.html',
  styleUrls: ['./repositorys-list.component.css']
})
export class RepositorysListComponent implements OnInit {

  @Input()
  listRepositorys: any[];

  @Input()
  listRepositorysMostVisited: any[];

  @Input()
  userName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
