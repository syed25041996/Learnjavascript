import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitServiceService {
  message : string = "Thank you for submitting"
  constructor() {
   }
}
