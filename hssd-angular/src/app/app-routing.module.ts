import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApisComponent } from './apis/apis.component';
import { DirComponent } from './dir/dir.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ObjFormsComponent } from './obj-forms/obj-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { VarComponent } from './var/var.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'intro/:name/:id', component: IntroComponent},
  {path:':pname/p/:pcode', component: ProductComponent}, // dynamic url
  {path:'var', component:VarComponent},
  {path:'directives', component:DirComponent},
  {path:'forms', component:FormsComponent},
  {path:'obj-forms', component:ObjFormsComponent},
  {path:'reactive-forms', component:ReactiveFormsComponent},
  {path:'pipes', component:PipesComponent},
  {path:'life', component:LifeCycleComponent},
  {path:'apis', component:ApisComponent},
  {path:'**', component:NotfoundComponent}, //** should be the last line in the routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
