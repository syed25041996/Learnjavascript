import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SubmitServiceService } from 'src/app/services/submit-service.service';
import { ChildwelcomeComponent } from '../childwelcome/childwelcome.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {


  //Routes
  constructor(private route: ActivatedRoute) { }

  title = ""

  @ViewChild(ChildwelcomeComponent)
  childWelcomeComponent!: ChildwelcomeComponent;

  @ViewChild('country')
  country!: ElementRef

  ngAfterViewInit(): void {
    console.log(this.country)
    this.country.nativeElement.innerHTML = "Hello Angular"
    this.title = this.childWelcomeComponent.title
  }

  ngOnInit(): void {

  }


  user = this.route.snapshot.paramMap.get('username')

  movies: string[] = ["Friends", "Big Bang theory", "Spiderman"]

  selectedNameByUser(data: string) {
    alert(data)
  }

  addMovie() {
    this.movies = [...this.movies, "Avatar"]
  }

  // country$ : Observable<any> | any


}
