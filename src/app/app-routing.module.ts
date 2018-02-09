//////////////////// start Importing local file and library/////////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { WelcomeComponent} from './dashboard/welcome/welcome.component';
import { EditAdminComponent } from './dashboard/edit-admin/edit-admin.component';
//////////////////// end Importing local file and library/////////////////////
//////////////declaration of routes//////////
const routes: Routes =[
    { path: 'login',      component: LoginComponent },////////login compomnet 
     { path: 'edit-admin', component:  EditAdminComponent },//edit or add admin conponent 
    { path: '',          redirectTo: 'login', pathMatch: 'full' }/////if routes is null it will redirect to login page 
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
