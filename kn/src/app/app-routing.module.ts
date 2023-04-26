import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FormsComponent } from './forms/forms.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'intro/:id', component:IntroComponent},
  {path:'varrr', component:VarComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'pipes', component:PipesComponent},
  {path:'life-cycle', component:LifeCycleComponent},
  {path:'forms', component:FormsComponent},
  {path:'obj-forms', component:ObjFormsComponent},
  {path:'reactive-forms', component:ReactiveFormsComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
