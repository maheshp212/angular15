import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  fname:any;
  email:any;
  age:any;
  phone:any;
  date:any;

  takeValues(){
    console.log(this.fname)
    console.log(this.phone)
    console.log(this.date)
    console.log(this.email)
    console.log(this.age)

    // we will call API here--
  }
}
