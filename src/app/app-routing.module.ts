import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Emp2wayComponent } from './emp2way/emp2way.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  // {path:"",component:EmployeesComponent},
{path:"emps",component:EmployeesComponent},

{path:"2way",component:Emp2wayComponent},

{path:"login",component:LoginComponent},

{path:"register",component:RegisterComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
