import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  name = 0;
  interval:any;
  @Input() Value: any;
  ngOnInit(){
    // this.interval = setInterval(() => {
    //   this.name++;
      
    // }, 2000);
  }
  ngAfterViewInit(){
    console.log("calling child ngAfterViewInit");
  }
  ngAfterViewInitChecked(){
    console.log("calling child ngAfterViewInitChecked");
  }


}
