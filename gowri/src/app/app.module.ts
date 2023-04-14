import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ParamsPipe
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
