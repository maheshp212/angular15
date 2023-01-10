import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb:FormBuilder){}
  regFormGroup:FormGroup = this.fb.group({});
  
  ngOnInit(): void {
    this.regFormGroup = this.fb.group({
      fname : [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      lname : [null, [Validators.required]],
      age: [null, [Validators.min(10), Validators.max(45)]],
      phone: [null, [Validators.pattern(`[789][0-9]{9}`)]]
    });
  }

  get fc(){
    return this.regFormGroup.controls;
  }


  // this is a form submission method
  // here we will collect the form field values
  // and do the necessary business logic
  regssssssssssssssssssssss(){
    if(this.regFormGroup.valid){
      // fname value
      console.log(this.regFormGroup.controls['fname'].value)

    } else {
      alert('form is not valid');
    }
  }
}
