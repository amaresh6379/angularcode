import { Component, Input, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ChildComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @ViewChild(ChildComponent, { static: false }) childComponent!: ChildComponent ;
  @Input() name: any;
  // ngOnChanges(changes:any){
  //   console.log("make api calls",changes);
  // }
  // ngDoCheck(){
  //   console.log("calling  login ngDoCheck");
    
  // }
  ngOnInit(){
    console.log(" ngOnINit name",this.childComponent.name);
    
  }
  ngAfterViewInit(){
    console.log("calling login ngAfterViewInit");
    setInterval(()=>{
      this.childComponent.name = 1;

    },5000)
  }
  ngAfterViewInitChecked(){
    console.log("calling login ngAfterViewInitChecked");
  }
  ngAfterContentChecked(){
    
  }



}
