import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit{

  regFormGroup: FormGroup;
  constructor(private fb: FormBuilder){
    this.regFormGroup = this.fb.group({
      fname : ['gowri', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      lname : [null, [Validators.required]],
      age : [null, [Validators.min(14), Validators.max(45)]],
      phone : [null, [Validators.pattern('[6789][0-9]{9}')]],

    });

  }

  ngOnInit(): void {
  }
}
