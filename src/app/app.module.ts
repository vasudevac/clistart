import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Http, Response } from '@angular/http';
import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentComponent } from './students/student.component';
import { NavComponent } from './home/nav.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducer';
import { reducer } from './store/reducer/user.reducer';
import { UserEffects } from './store/effects/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Comp1Component } from './dynamic-comp-loader/comp1/comp1.component';
import { Comp2Component } from './dynamic-comp-loader/comp2/comp2.component';
import { Comp3Component } from './dynamic-comp-loader/comp3/comp3.component';
import { DynamicCompLoaderComponent } from './dynamic-comp-loader/dynamic-comp-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    StudentsComponent,
    StudentComponent,
    PageNotFoundComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    DynamicCompLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({user: reducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([UserEffects])
  ],
  entryComponents: [Comp1Component, Comp2Component, Comp3Component],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
