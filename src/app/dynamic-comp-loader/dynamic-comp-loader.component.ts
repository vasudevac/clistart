import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Comp1Component } from '../dynamic-comp-loader/comp1/comp1.component';
import { Comp2Component } from '../dynamic-comp-loader/comp2/comp2.component';
import { Comp3Component } from '../dynamic-comp-loader/comp3/comp3.component';
import { CompModel } from '../models/comp-model';

@Component({
  selector: 'app-dynamic-comp-loader',
  templateUrl: './dynamic-comp-loader.component.html',
  styleUrls: ['./dynamic-comp-loader.component.css']
})
export class DynamicCompLoaderComponent implements OnInit {

  @ViewChild('compcontainer', {read: ViewContainerRef}) compcontainer: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  addComp1() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Comp1Component);
    const component = this.compcontainer.createComponent(componentFactory);
    let compInstance = (<CompModel>component.instance);
    compInstance.data = "1";
    compInstance.ref = component;
  }

  addComp2() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Comp2Component);
    const component = this.compcontainer.createComponent(componentFactory);
    let compInstance = (<CompModel>component.instance);
    compInstance.data = "2";
    compInstance.ref = component;
  }

  addComp3() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(Comp3Component);
    const component = this.compcontainer.createComponent(componentFactory);
    let compInstance = (<CompModel>component.instance);
    compInstance.data = "3";
    compInstance.ref = component;
  }

  clearComp() {
    this.compcontainer.clear();
  }

}
