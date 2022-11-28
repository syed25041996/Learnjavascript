import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SubmitServiceService } from 'src/app/services/submit-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


  //Routes
  constructor(private route: ActivatedRoute, private countries: SubmitServiceService) { }
  
  ngOnInit(): void {
    this.countries.getAllCountries().subscribe((data) => {
      console.table(data)
    })
  }
  user = this.route.snapshot.paramMap.get('username')

  movies: string[] = ["Friends", "Big Bang theory", "Spiderman"]

  selectedNameByUser(data: string) {
    alert(data)
  }

  country$ : Observable<any> | any


}
