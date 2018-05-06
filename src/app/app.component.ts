import { Component, OnInit } from '@angular/core';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as userActions from './actions/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public pageTitle = 'CLI Start : Vasu';  
  public closeResult: string;

  constructor(private store: Store<any>) {
    this.store.dispatch(new userActions.LoadUserAction());
   }

  ngOnInit() {
    
  }

  open(content) {
    // this.modalService.open(content, {size: 'lg', windowClass: 'modal-xxl', backdrop: 'static'}).result.then((result) => {
    //  this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  openSm(contentsm) {
    //this.modalService.open(contentsm, { size: 'sm', backdrop: 'static' });
  }

  private getDismissReason(reason: any): string {
    // if (reason === ModalDismissReasons.ESC) {
    //   return 'by pressing ESC';
    // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   return 'by clicking on a backdrop';
    // } else {
    //   return  `with: ${reason}`;
    // }
    return "";

  }
  
}
