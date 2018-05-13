import { Component, OnInit, Input, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  @Input() data: string;
  @Input() ref: ComponentRef<Comp3Component>;

  constructor() { }

  ngOnInit() {
    console.log("Comp3 init called");
  }

  ngOnDestroy() {
    console.log("Comp3 ondestroy called");
  }

  remove() {
    console.log("Comp3 remove called");
    this.ref.destroy();
  }

}
