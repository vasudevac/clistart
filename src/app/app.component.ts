import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private title = 'CLI Start : Vasu';
  private data : any;
  private closeResult: string;

  constructor(private userService : UsersService, private modalService: NgbModal) { }

  ngOnInit() {
    //alert(this.userService.getUsers());
    this.userService.getUsers().subscribe(x => this.data = x._body);
  }

  open(content) {
    this.modalService.open(content, {size: 'lg', windowClass: 'modal-xxl', backdrop: 'static'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openSm(contentsm) {
    this.modalService.open(contentsm, { size: 'sm', backdrop: 'static' });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
}
