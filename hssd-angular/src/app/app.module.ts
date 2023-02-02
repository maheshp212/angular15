import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirComponent } from './dir/dir.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { DollarPipe } from './dollar.pipe';
import { ParamsPipe } from './params.pipe';
import { HssdPipe } from './pipes/hssd.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ApisComponent } from './apis/apis.component';
import { UsersService } from './users.service';
import {HttpClientModule} from '@angular/common/http';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialExampleModule } from './material.module';

@NgModule({
  declarations: [ // components, directives, pipes
    AppComponent,
    HomeComponent,
    IntroComponent,
    VarComponent,
    DirComponent,
    FormsComponent,
    ObjFormsComponent,
    ReactiveFormsComponent,
    PipesComponent,
    HexaPipe,
    DollarPipe,
    ParamsPipe,
    HssdPipe,
    LifeCycleComponent,
    ApisComponent,
    Child1Component,
    Child2Component,
    NotfoundComponent,
    ProductComponent
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  //providers: [UsersService], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
