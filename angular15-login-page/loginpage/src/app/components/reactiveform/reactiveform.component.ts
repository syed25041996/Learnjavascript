import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
// import { DetailsService } from 'src/app/services/details.service';
import { gmailValidator } from './gmailValidator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {

  constructor() { }

  registerForm: any = new FormGroup({
    username: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, gmailValidator()]),
    userPhone: new FormControl(''),
    userPassword: new FormControl(''),
    userConfirmPassword: new FormControl(''),
  })

  checkPassword = false

  checkUser = false

  ngOnInit(): void {


    this.registerForm.valueChanges.pipe(distinctUntilChanged()).
      subscribe((value: any) => {
        if (value.userPassword === value.userConfirmPassword) {
          this.checkPassword = true
          // console.log(this.checkPassword)
        } else {
          this.checkPassword = false
          // console.log(this.checkPassword)
        }

        if (value.username === "admin") {
          // this.email.disable({ emitEvent: false })
          // this.phone.disable({ emitEvent: false })
          // this.password.disable({ emitEvent: false })
          // this.confirmPassword.disable({ emitEvent: false })
          this.checkUser = true
          this.registerForm.disable({emitEvent:false})
        }


        // this.registerForm.get('username').updateValueAndValidity({ emitEvent: false })
        // this.registerForm.get('userEmail').updateValueAndValidity({ emitEvent: false })
        // this.registerForm.get('userPhone').updateValueAndValidity({ emitEvent: false })
        // this.registerForm.get('userPassword').updateValueAndValidity({ emitEvent: false })
        // this.registerForm.get('userConfirmPassword').updateValueAndValidity({ emitEvent: false })
        // this.registerForm.updateValueAndValidity({emitEvent : false})

        // this.registerForm.patchValue(value.username , {emitEvent:false})
        // this.registerForm.get('username').updateValueAndValidity()
      })
  }



  onSubmit() {
    console.log(this.registerForm.value)
  }

  //getters and setters
  // Function name is passed as variable to the directive

  get username() {
    // return this.registerForm.get('username')
    return this.registerForm.get('username')
  }

  get email() {
    return this.registerForm.get('userEmail')
  }

  get phone() {
    return this.registerForm.get('userPhone')
  }

  get password() {
    return this.registerForm.get('userPassword')
  }

  get confirmPassword() {
    return this.registerForm.get('userConfirmPassword')
  }

}
