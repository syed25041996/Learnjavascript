import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  name : string = '';
  userEmail : string = '';
  userPhone : number[] = [];
  userPassword : string = '';
  userConfirmPassword : string = '';

  constructor(private routes: Router){}

  goToLogin(){
    
  }

  getValues(values : any){
    console.log(values)
    this.routes.navigate(['/login']);
  }
}
