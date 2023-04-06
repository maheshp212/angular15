import { Component } from '@angular/core';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent {
  user :any = {}

  takeValues(){
    console.log(this.user)

    // we will call API here--
  }
}