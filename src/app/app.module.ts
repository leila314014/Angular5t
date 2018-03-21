import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import {NgPipesModule} from 'ngx-pipes';
import { Pratice1Component } from './pratice1/pratice1.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Homework1Component } from './homework1/homework1.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { InputButtomComponent } from './input-buttom/input-buttom.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { HightlightDirective } from './hightlight.directive';
import { Lesson61Component } from './lesson6-1/lesson6-1.component';
import { AppRoutingModule } from './app-routing.module';
import { Homework2Component } from './homework2/homework2.component';
import { Homeork2BtnComponent } from './homeork2-btn/homeork2-btn.component';
import { DyclassComponent } from './dyclass/dyclass.component';
import { Jq1Component } from './jq1/jq1.component';
import { Lesson7Component } from './lesson7/lesson7.component';
import { BmiService } from './bmi.service';
import { Homework3Component } from './homework3/homework3.component';
import { Hw3BtnComponent } from './hw3-btn/hw3-btn.component';
import { Hw3Service } from './hw3.service';
import { CallhttpComponent } from './callhttp/callhttp.component';
import { HttpService } from './http.service';
import { NgModelDrivenComponent } from './ng-model-driven/ng-model-driven.component';





@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Pratice1Component,
    Lesson4Component,
    Homework1Component,
    Lesson5Component,
    InputButtomComponent,
    Lesson6Component,
    HightlightDirective,
    Lesson61Component,
    Homework2Component,
    Homeork2BtnComponent,
    DyclassComponent,
    Jq1Component,
    Lesson7Component,
    Homework3Component,
    Hw3BtnComponent,
    CallhttpComponent,
    NgModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgPipesModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    BmiService,
    Hw3Service,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
