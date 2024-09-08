import { Component, TemplateRef, ViewChild } from '@angular/core'; 
import {MatButtonModule} from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { PageSelectionComponent } from '../page-selection/page-selection.component';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon'; 
import { DialogService } from '../dialog.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,MatTableModule,MatPaginator,PageSelectionComponent,MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private openDialog: MatDialog,private dialogService : DialogService){}
   ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  clickedRows = new Set<PeriodicElement>();
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('Delete', {static: true}) dialog !: TemplateRef<any>;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  valuechanges(event:any){
    console.log("eveent",event.value);

  }
  actionEvent = [{label:'active'},{label:'Inactive'}];


  deleteRow(element:any){
    const dialog = this.dialogService.ondelete('hello every one how are you?');
    dialog.afterClosed().subscribe(res=>{
      if(res == true){    
        this.ELEMENT_DATA = this.ELEMENT_DATA.filter(res=>res && res.position !== element.position);
        this.clickedRows = new Set<PeriodicElement>();
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      }
      
    })

  }



}
