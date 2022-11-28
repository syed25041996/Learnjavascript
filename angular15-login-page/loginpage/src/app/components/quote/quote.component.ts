import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuotesService } from 'src/app/services/quotes.service';
import { IQuote} from './quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor(private apiService: QuotesService) { }

  quotes$: Observable<string> | any

  dd : any

  ngOnInit(): void {
    this.apiService.getQuotes().subscribe((data : any) => {
      // console.log(data)
      this.quotes$ = data["quotes"]
  
      console.log(data["quotes"][0])
    })
  }

  
}
