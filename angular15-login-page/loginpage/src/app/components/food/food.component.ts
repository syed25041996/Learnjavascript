import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  foods = ["burger", "fries", "pasta", "noodles", "ice cream"]

  


  tray : any[] = []

  ngOnInit(): void {

    this.myObservable.subscribe((value) => {
      this.tray.push(value)

    },(error) =>{
      console.log(error)
    },() =>{
      alert("The list has been completed")
    })
  }

  myObservable = new Observable((observer) =>{
    setTimeout(() => observer.next(this.foods[0]), 1000)
    setTimeout(() => observer.next(this.foods[1]), 2000)
    setTimeout(() => observer.next(this.foods[2]), 3000)
    setTimeout(() => observer.next(this.foods[3]), 4000)
    setTimeout(() => observer.next(this.foods[4]), 5000)
    setTimeout(() => observer.complete(), 6000)
  })


 //myObservableNew = new Observable((observer) =>{
   // observer.next("1");
    //observer.next("2");
    //observer.next("3");
    // setTimeout(() => observer.complete(), 6000)
  //})


}
