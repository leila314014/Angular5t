import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-ng-model-driven',
  templateUrl: './ng-model-driven.component.html',
  styleUrls: ['./ng-model-driven.component.css']
})
export class NgModelDrivenComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder) { }

  userForm = new FormGroup({
    name: new FormControl('Abc',[Validators.required,Validators.minLength(4)]),
    email: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postalcode: new FormControl(null,Validators.pattern('^[1-9][0-9]{4}'))
    })
  });

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

}
