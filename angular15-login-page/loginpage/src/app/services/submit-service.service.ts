import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitServiceService {
  loginMessage : string = "You've been logged in successfully"
  registerMessage : string = "You've been registered successfully"
  constructor() {
   }
}
