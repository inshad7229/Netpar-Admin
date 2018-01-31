import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastsManager , Toast} from 'ng2-toastr';
import {LoginModel} from './login.model.component';
import {LoginService} from './login.service'
import {AppProvider} from '../providers/app.provider'

declare var google : any;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  complexForm: FormGroup;
  loginModel:LoginModel=new LoginModel();
  buttonStatus:boolean=false
 constructor(
         private router: Router,
         private fb: FormBuilder,
         private loginService:LoginService,
         public toastr: ToastsManager, 
         vcr: ViewContainerRef,
         public appProvider:AppProvider
       ) {
        this.complexForm = fb.group({
            'loginAs': [null, Validators.compose([Validators.required])],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(15)])],
            'email': [null, Validators.compose([Validators.required, Validators.minLength(2),Validators.pattern(EMAIL_REGEX)])],
            'remember':[null]
        }) 
        this.toastr.setRootViewContainerRef(vcr);
 }
  ngOnInit() {
    if (localStorage['remember']==true || localStorage['remember']=='true') {
            this.loginModel.remember=localStorage['remember'];
            this.loginModel.email=localStorage['email'];
            this.loginModel.password=localStorage['password'];
            this.loginModel.role=localStorage['role'];
    }else{
      this.loginModel.role="superAdmin"  
    }
  }
 onLogIn(){

     this.buttonStatus=true
     this.loginService.onLogin(this.loginModel)
     .subscribe(data=>{
       this.buttonStatus=false
       if(data.success==false){
           this.toastr.error( 'Please check you login credential !!','Authentication failed. ',{toastLife: 3000, showCloseButton: true});
       }else if (data.success==true) {
          this.appProvider.current.loginData=data.response
          localStorage['netparUser']=JSON.stringify(data.response)
          if (this.loginModel.remember==true || this.loginModel.remember=='true') {
            localStorage['remember']=true;
            localStorage['email']=this.loginModel.email;
            localStorage['password']=this.loginModel.password;
            localStorage['role']=this.loginModel.role;
          }else{
            localStorage['remember']=null;
            localStorage['email']=null;
            localStorage['password']=null;
            localStorage['role']=null;
          }
          localStorage['token']=data.token
          this.toastr.success('successfully!', 'Success!', {toastLife: 3000, showCloseButton: true});
  	      this.router.navigate(['/welcome'],{ skipLocationChange: true });
       }
     },error=>{
       this.buttonStatus=false;
       this.toastr.error( 'Something went wrong please try again after some time !!','Authentication failed. ',{toastLife: 3000, showCloseButton: true});
     })
  }
  onRemember(remember){
         alert(remember)
  }
}
