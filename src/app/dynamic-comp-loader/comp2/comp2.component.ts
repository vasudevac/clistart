import { Component, OnInit, Input, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @Input() data: string;
  @Input() ref: ComponentRef<Comp2Component>;

  constructor() { }

  ngOnInit() {
    console.log("Comp2 init called");
  }

  ngOnDestroy() {
    console.log("Comp2 ondestroy called");
  }

  remove() {
    console.log("Comp2 remove called");
    this.ref.destroy();
  }

}
