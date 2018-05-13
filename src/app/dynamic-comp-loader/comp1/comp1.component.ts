import { Component, OnInit, Input, ComponentRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnDestroy {

  @Input() data: string;
  @Input() ref: ComponentRef<Comp1Component>;

  constructor() { }

  ngOnInit() {
    console.log("Comp1 init called");
  }

  ngOnDestroy() {
    console.log("Comp1 ondestroy called");
  }

  remove() {
    console.log("Comp1 remove called");
    this.ref.destroy();
  }

}
