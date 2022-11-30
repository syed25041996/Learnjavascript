import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childwelcome',
  templateUrl: './childwelcome.component.html',
  styleUrls: ['./childwelcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildwelcomeComponent implements OnChanges {

title = "Main page"

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['names']['currentValue'].length)
    if(changes['names']['currentValue'].length > 4){
      alert("Your movie bucket is full")
    }
  }

  // ngDoCheck(): void {
  //   console.log("event has hapeenend")
  // }

  @Output() 
  selectedNameEmitter = new EventEmitter();

  @Input()
  names : string[] = [];
  
  public nameSelected(selectedName : string){
    this.selectedNameEmitter.emit(selectedName)
    // console.log(selectedName)
  }
}
