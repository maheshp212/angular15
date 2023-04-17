import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { HexaPipe } from './hexa.pipe';
import { ParamsPipe } from './params.pipe';
import { UsericonPipe } from './usericon.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';

@NgModule({
  declarations: [ // component, directive , pipe 
    AppComponent,
    HomeComponent,
    IntroComponent,
    VarComponent,
    DirectivesComponent,
    PipesComponent,
    HexaPipe,
    ParamsPipe,
    UsericonPipe,
    LifeCycleComponent,
    FormsComponent,
    ObjFormsComponent
  ],
  imports: [ // module
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
