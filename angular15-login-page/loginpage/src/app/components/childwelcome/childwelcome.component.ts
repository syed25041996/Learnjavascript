import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childwelcome',
  templateUrl: './childwelcome.component.html',
  styleUrls: ['./childwelcome.component.scss']
})
export class ChildwelcomeComponent {

  @Output() 
  selectedNameEmitter = new EventEmitter();

  @Input()
  names : string[] = [];
  
  public nameSelected(selectedName : string){
    this.selectedNameEmitter.emit(selectedName)
    // console.log(selectedName)
  }
}
