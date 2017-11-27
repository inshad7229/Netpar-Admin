import { Component, OnInit } from '@angular/core';
import {AppProvider} from '../../providers/app.provider'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( private appProvider: AppProvider) { }

  ngOnInit() {
  }
   adminRole(role){
    if (role=='superAdmin') {
       return 'Super Administrator';
    }else if(role=='sectionAdministrator'){
    	return 'section Administrator'
    }else if (role=='contentWriter') {
    	return 'Content Writer'
    }else if (role=='businessuser') {
    	return 'Business user'
    }
  }
}
