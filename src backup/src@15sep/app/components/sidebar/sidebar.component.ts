import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Administrator',  icon: 'dashboard', class: '' },
    { path: 'admin', title: 'Template',  icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'Section',  icon:'person', class: '' },
    { path: 'table-list', title: 'Content',  icon:'content_paste', class: '' },
    { path: 'typography', title: 'User contribution',  icon:'library_books', class: '' },
    { path: 'icons', title: 'Homepage',  icon:'bubble_chart', class: '' },
    { path: 'maps', title: 'User',  icon:'location_on', class: '' },
    { path: 'notifications', title: 'Platform Analytics',  icon:'notifications', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  adminPath;
sectionPath;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
       if (localStorage['currentpath']=="/home" ||localStorage['currentpath']=="/editAdministrator") {
      // code...
      this.adminPath="active";

    } else if(localStorage['currentpath']=="/sectionManagement" ||localStorage['currentpath']=="/addSectionInSectionMang" ||localStorage['currentpath']=="/addCategoryInSectionMang"){
       this.sectionPath="active";
    }
  }

  /*ngOnInit() {
      System.import('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
  }*/
  
  // isMobileMenu() {
  //     if ($(window).width() > 991) {
  //         return false;
  //     }
  //     return true;
  // };
}
