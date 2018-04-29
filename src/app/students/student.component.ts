import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  template: `<div>Student</div>`
})
export class StudentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    alert(id);
  }

}
