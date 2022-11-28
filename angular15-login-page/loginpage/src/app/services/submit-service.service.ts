import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitServiceService {
  loginMessage : string = "You've been logged in successfully"
  registerMessage : string = "You've been registered successfully"

  constructor(private httpClient:HttpClient) {}

  //Countires api
  public getAllCountries() : Observable<any>{
    return this.httpClient.get("https://restcountries.com/v3.1/all")
  }
}
