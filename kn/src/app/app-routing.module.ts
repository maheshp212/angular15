import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { VarComponent } from './var/var.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'intro', component:IntroComponent},
  {path:'varrr', component:VarComponent},
  {path:'directives', component:DirectivesComponent},
  {path:'pipes', component:PipesComponent},
  {path:'life-cycle', component:LifeCycleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
