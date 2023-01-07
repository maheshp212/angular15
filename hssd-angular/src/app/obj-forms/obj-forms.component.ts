import { Component } from '@angular/core';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent {

  user = {
    fname: '',
    age: 0,
    today: '',
    phone:''
  }
}
