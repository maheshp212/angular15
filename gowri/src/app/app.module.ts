import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { CustomComponent } from './custom/custom.component';
import { AttrDirective } from './attr.directive';
import { ClassDirective } from './class.directive';
import { ApisComponent } from './apis/apis.component';
import { UsersService } from './users.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserAuthInterceptor } from './user-auth.interceptor';
import { NgbModule,NgbCarouselModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';


@NgModule({
  declarations: [ // components / pipes / directives
    AppComponent,
    HomeComponent,
    IntroComponent,
    VarComponent,
    DirectivesComponent,
    FormsComponent,
    ObjFormsComponent,
    ReactiveFormsComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    LifeCycleComponent,
    Cmp1Component,
    CustomComponent,
    AttrDirective,
    ClassDirective,
    ApisComponent,
    NotFoundComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    NgbDatepickerModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [UsersService,
    {provide: HTTP_INTERCEPTORS, useClass: UserAuthInterceptor, multi:true}], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
