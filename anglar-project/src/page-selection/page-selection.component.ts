import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-page-selection',
  standalone: true,
  imports: [MatMenuModule],
  templateUrl: './page-selection.component.html',
  styleUrl: './page-selection.component.scss'
})
export class PageSelectionComponent {
  @Input() name:any;
  @Input() description:any;
  @Input() actionArray:any;
  @Output() actionEmit = new EventEmitter();
  

  functionCalls(event:any){
    this.actionEmit.emit(event);
    console.log(event);
    

  }
  

}
