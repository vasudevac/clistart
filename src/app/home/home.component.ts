import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public data : any;

  constructor(private userService : UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(x => this.data = x);
  }

}
