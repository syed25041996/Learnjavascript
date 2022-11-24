import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SubmitServiceService } from 'src/app/services/submit-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hideData : boolean = false;

  username : string = "";
  password : string = "";

  usernames : string[] = ["syed", "raj", "bob"]

  /* To test button */
  public checkStatus(){
    console.log("Hello syed !")
  }

  public toggleView(){
    console.log(this.hideData)
    this.hideData = !this.hideData;
  }

  constructor(private _submitAlert: SubmitServiceService, private _routes : Router ){
  }

  public alertMessage(){
    alert(this._submitAlert.loginMessage)
  }

  public userLogin(item : any){
    console.log(item)
    this._routes.navigate(['/welcome',this.username]);
  }

}
