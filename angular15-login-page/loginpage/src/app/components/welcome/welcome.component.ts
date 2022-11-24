import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {


  //Routes
  constructor(private route: ActivatedRoute) { }

  user = this.route.snapshot.paramMap.get('username')
  
  movies: string[] = ["Friends", "Big Bang theory", "Spiderman"]

  selectedNameByUser(data: string) {
    alert(data)
  }
}
