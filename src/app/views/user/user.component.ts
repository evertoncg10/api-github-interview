import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.user = nav.extras.state;
  }

  ngOnInit(): void {
  }

}
