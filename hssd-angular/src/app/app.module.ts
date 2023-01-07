import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirComponent } from './dir/dir.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';

@NgModule({
  declarations: [ // components, directives, pipes
    AppComponent,
    HomeComponent,
    IntroComponent,
    VarComponent,
    DirComponent,
    FormsComponent,
    ObjFormsComponent
  ],
  imports: [ //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //services
  bootstrap: [AppComponent]
})
export class AppModule { }
