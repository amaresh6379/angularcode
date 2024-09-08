import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    // MatDialog,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    // MatDialogRef,
    MatDialogTitle,],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})

export class DialogComponent {

  constructor( @Inject(MAT_DIALOG_DATA )public data:any){

  }

}

