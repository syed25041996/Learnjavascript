import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpclient: HttpClient) { }

  public getQuotes(){
    return this.httpclient.get("https://dummyjson.com/quotes");
  }
}
