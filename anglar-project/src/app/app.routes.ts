import { Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { ChildComponent } from '../child/child.component';
import { FlexComponent } from '../flex/flex.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

export const routes: Routes = [
    { path:'', redirectTo:'/app/home',pathMatch:'full'},
    {
        path:'app', component:NavbarComponent, children: [
            {path:'home',component: HomeComponent},
            {path:'child', component: ChildComponent},
            {path:'flex', component: FlexComponent},
            {path:'employee-form',component: EmployeeFormComponent},
            {path:'snack-bar',component: SnackBarComponent}
        ]
    }
];
