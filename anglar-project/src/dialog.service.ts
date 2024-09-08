import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private openDialog:MatDialog) { }
  ondelete(message:any){
    return this.openDialog.open(DialogComponent,{
      data:{
        message:message

      },
      width: '450px',
      autoFocus: false
    })
  }
}
