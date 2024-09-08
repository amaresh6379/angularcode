import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'anglar-project';

  ngAfterViewInitChecked(){
    console.log("app calling ngAfterViewChecked");
    
  }
}

