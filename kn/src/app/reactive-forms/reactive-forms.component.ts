import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit{

  regFormGroup: FormGroup = {} as FormGroup;
  isSubmitted:boolean = false
  constructor(private fb : FormBuilder){}

  ngOnInit(): void {
    this.regFormGroup = this.fb.group({
      fname: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      lname: [null, [Validators.required]],
      age: [null, [Validators.min(10), Validators.max(60)]],
      phone: [null, [Validators.pattern('[6789][0-9]{9}')]],
    })
  }

  get fc(){
    return this.regFormGroup.controls;
  }

  reg(){
    if(this.regFormGroup.valid){
      //call api
      this.isSubmitted = false;
    } else {
      //throw some error
      this.isSubmitted = true;
    }
  }

}
