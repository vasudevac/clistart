import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
