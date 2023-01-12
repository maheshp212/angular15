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
    HssdPipe
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
