import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { WelcomeComponent} from './dashboard/welcome/welcome.component';
import { EditAdminComponent } from './dashboard/edit-admin/edit-admin.component';

const routes: Routes =[
    { path: 'login',      component: LoginComponent },
     { path: 'edit-admin', component:  EditAdminComponent },
    { path: '',          redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
