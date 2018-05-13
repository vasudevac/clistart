import { TestBed, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
//import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './home/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from './reducer/user.reducer';

//import { UsersService } from './users.service';
//import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        StoreModule.forRoot({user: reducer})
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        StudentComponent,
        StudentsComponent,
        PageNotFoundComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have valid page title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.pageTitle).toBe("CLI Start : Vasu");
  }));
});
