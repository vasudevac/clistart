import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public posts : any;

  constructor(private userService : UsersService) { }

  ngOnInit() {
    this.userService.getPosts()
    .subscribe(x => this.posts = x);
  }

}
