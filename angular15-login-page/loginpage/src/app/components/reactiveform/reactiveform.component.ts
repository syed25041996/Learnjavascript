import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {

  registerForm = new FormGroup({
    username : new FormControl(''),
    userEmail : new FormControl(''),
    userPhone : new FormControl(''),
    userPassword : new FormControl(''),
    userConfirmPassword : new FormControl(''),
  })

  ngOnInit(){
    this.registerForm.valueChanges.subscribe(value => {
      console.log(value)
    })
  }

  getValues(){
    console.log(this.registerForm.value)
  }
}
