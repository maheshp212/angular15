import { Component } from '@angular/core';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent {

  user:any={}

  login(){
    console.log('form submitted')
    console.log(this.user);
  }

}
