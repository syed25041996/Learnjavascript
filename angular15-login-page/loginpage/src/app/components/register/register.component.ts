import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubmitServiceService } from 'src/app/services/submit-service.service';

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

  constructor(private _routes: Router, private _message : SubmitServiceService){}

  registerMessage(){
    alert(this._message.registerMessage);
  }

  getValues(values : any){
    console.log(values)
    this._routes.navigate(['/admin/login']);
  }
}
