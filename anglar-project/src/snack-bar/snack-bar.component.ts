import { Component, inject, TemplateRef, ViewChild, viewChild } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';  

@Component({
  selector: 'app-snack-bar',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss'
})
export class SnackBarComponent {
  message:any
  @ViewChild('snackbar', { static: true }) snackbar!: TemplateRef<any>;
  private _snackBar = inject(MatSnackBar);
  openSnackBar1(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  openSnackBar(message: string, action: string) {
    this.message = message;
    console.log("message",message);
        
    this._snackBar.openFromTemplate(this.snackbar );
  }

}
