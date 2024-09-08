import { Component } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select'; 
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider'; 
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FlexLayoutModule,MatFormFieldModule,MatDatepickerModule,MatSelectModule,MatNativeDateModule,MatInputModule,MatDividerModule,ReactiveFormsModule,MatButtonModule,MatIconModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {
  desigination =[ 
    {id:1,name:'Team Leader'},
    {id:2,name:'Senior Software Engineer'},
    {id:3,name:'Sofware Engineer'},
    {id:4,name:'Product Designer'},
    {id:5,name:'Business Analyst'}
  ]
  role =[
    {id:1,name:'Super Admin'},
    {id:2,name:'store Admin'},
    {id:3,name:'guest'}
  ];

  employeeRegirationForm!: FormGroup
  constructor(private fb: FormBuilder){}
  ngOnInit(){
    this.employeeRegirationForm = this.fb.group({
      firstName : [null,Validators.required],
      lastName : [null,Validators.required],
      email : [null,Validators.required],
      alternativeEmail: [null,Validators.required],
      dataOfBirth : [null,Validators.required],
      dateOfJoining : [null,Validators.required],
      desgination: [null,Validators.required],
      role: [null,Validators.required],
      contact: this.fb.array([])
    })
    this.createContact();
  }
  createContact(){
    return (this.employeeRegirationForm.get('contact') as FormArray).push(this.fb.group({
      address: [null,Validators.required],
      city: [null,Validators.required],
      state: [null,Validators.required],
      pincode: [null,Validators.required]
    }))
    console.log("this.employeeRegirationForm",this.employeeRegirationForm.value);
    

  }

  formSubmit(){
    console.log("this.employeeRegirationForm",this.employeeRegirationForm.value);
  }


}
