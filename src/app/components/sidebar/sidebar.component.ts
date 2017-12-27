import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { Routes, RouterModule ,Router,RouterLinkActive} from '@angular/router';
import {AppProvider} from '../../providers/app.provider'
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
  styleUrls: ['./sidebar.component.css'],
  providers:[RouterLinkActive]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  adminPath;
  sectionPath;
  content;
  analaytics;
  template;
  /////////////link status'
homeLink=' '
addAdminLink=' '
secTempLink=' '
catTempLink=' '
SubCatTempLink=' '
viewSecLink=' '
addSecLink=' '
addCatLink=' '
addSubCatLink=' '
viewContLink=' '
addContLink=' '
commentContLink=' '
userContriLink=' '
homePageLink=' '
userLink=' '
secAnalLink=' '
artiAnalLink=' '
elemAnalLink=' '
tempAnalLink=' '

  constructor(private route:Router,
             private activeLink:RouterLinkActive,private appProvider:AppProvider) { }

  ngOnInit() {
    //alert(this.route.url)
   this.appProvider.current.adminPageFlag
this.menuItems = ROUTES.filter(menuItem => menuItem);

 if (this.route.url=="/home" ||this.route.url=="/edit-admin") {
      this.adminPath="in";
      this.sectionPath=' ';
      this.content=' ';
      this.analaytics=' ';
      this.template=' ';
      if (this.route.url=="/home") {
         this.homeLink='active'
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=' '
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }else if (this.route.url=="/edit-admin") {
         this.homeLink=' '
         this.addAdminLink='active'
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=' '
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }

  } else if(this.route.url=="/view-section" ||this.route.url=="/add-section" ||this.route.url=="/add-category" || this.route.url=="/add-subcategory"){
      this.adminPath=" ";
      this.sectionPath='in';
      this.content=' ';
      this.analaytics=' ';
      this.template=' ';
      if (this.route.url=="/view-section") {
         this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink='active'
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }else if (this.route.url=="/add-section") {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink='active'
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }else if (this.route.url=="/add-category") {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink='active'
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }else if (this.route.url=="/add-subcategory") {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink='active'
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }
  }else if (this.route.url=='/add-content' || this.route.url=='/view-content' || this.route.url=='/comment') {
      this.adminPath=" ";
      this.sectionPath=' ';
      this.content='in';
      this.analaytics=' ';
      this.template=' ';
      if (this.route.url=='/add-content') {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink='active'
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }else if (this.route.url=='/view-content') {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink='active'
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }else if (this.route.url=='/comment') {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink='active'
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }
  }else if (this.route.url=='/section-analytics' || this.route.url=='/template-analytics'||this.route.url=='/element-analytics'||this.route.url=='/article-analytics') {
    
       this.adminPath="";
      this.sectionPath=' ';
      this.content=' ';
      this.analaytics='in';
      this.template=' ';
      if (this.route.url=='/section-analytics') {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink='active'
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }else if (this.route.url=='/template-analytics') {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=''
         this.elemAnalLink=' '
         this.tempAnalLink='active'
      }else if (this.route.url=='/element-analytics') {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink='active'
         this.tempAnalLink=' '
      }else if (this.route.url=='/article-analytics') {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink='active'
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }
  }else if (this.route.url=='/section-templates' || this.route.url=='/category-templates' ||this.route.url=='/list-templates' ||this.route.url=='/homepage-templates') {
   
      this.adminPath="";
      this.sectionPath=' ';
      this.content=' ';
      this.analaytics=' ';
      this.template='in';
      if (this.route.url=='/section-templates') {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink='active'
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }else if (this.route.url=='/category-templates') {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=''
         this.catTempLink='active'
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }else if (this.route.url=='/list-templates') {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink='active'
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }else if (this.route.url=='/homepage-templates') {
        this.homeLink=' '
         this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink='active'
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
      }
  }else if (this.route.url=='/user-contribution') {
    this.adminPath=" ";
      this.sectionPath=' ';
      this.content=' ';
      this.analaytics=' ';
      this.template=' ';
         this.homeLink=' '
        this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink='active'
         this.homePageLink=' '
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
  }else if (this.route.url=='/homepage') {
    this.adminPath=" ";
      this.sectionPath=' ';
      this.content=' ';
      this.analaytics=' ';
      this.template=' ';
        this.homeLink=' '
        this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink='active'
         this.userLink=' '
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
  }else if (this.route.url=='/user') {
    this.adminPath=" ";
      this.sectionPath=' ';
      this.content=' ';
      this.analaytics=' ';
      this.template=' ';
        this.homeLink=' '
        this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink='active'
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
  }
  else{
      this.adminPath=" ";
      this.sectionPath=' ';
      this.content=' ';
      this.analaytics=' ';
      this.template=' ';
       this.homeLink=' '
        this.addAdminLink=' '
         this.secTempLink=' '
         this.catTempLink=' '
         this.SubCatTempLink=' '
         this.viewSecLink=''
         this.addSecLink=' '
         this.addCatLink=' '
         this.addSubCatLink=' '
         this.viewContLink=' '
         this.addContLink=' '
         this.commentContLink=' '
         this.userContriLink=' '
         this.homePageLink=' '
         this.userLink=''
         this.secAnalLink=' '
         this.artiAnalLink=' '
         this.elemAnalLink=' '
         this.tempAnalLink=' '
  }
}

onHomeTemp(){
 this.route.navigate(['/home']);
}
goToAddAdmin(){
  this.appProvider.current.adminPageFlag='foradd'
  this.route.navigate(['/edit-admin']);
}
onSecTemp(){
  this.route.navigate(['/section-templates']);
}
onCatTemp(){
  this.route.navigate(['/category-templates']);
}
onListingTemp(){
  this.route.navigate(['/list-templates']);
}
onViewSecAction(){
this.appProvider.current.actionFlag='menu'
this.route.navigate(['/view-section']);
}
onAddSecAction(){
this.appProvider.current.actionFlag='menu'
this.route.navigate(['/add-section']);
}
onAddCatAction(){
this.appProvider.current.actionFlag='menu'
this.route.navigate(['/add-category']);
}
onAddSubcatAction(){
this.appProvider.current.actionFlag='menu'
this.route.navigate(['/add-subcategory']);
}
onViewContent(){
this.route.navigate(['/view-content']);
}
onAddContent(){
this.appProvider.current.actionFlag='menu'
this.route.navigate(['/add-content']);
}
onComment(){
this.route.navigate(['/comment']);
}
onUserContribution(){
this.route.navigate(['/user-contribution']);
}
onHomePage(){
this.route.navigate(['/homepage']);
}
onUser(){
this.route.navigate(['/user']);
}
onSectionAnalytics(){
this.route.navigate(['/section-analytics']);
}
onArticleAnalytics(){
this.route.navigate(['/article-analytics']);
}
onElemaentAnalytics(){
this.route.navigate(['/element-analytics']);
}
onTemplateAnalytics(){
this.route.navigate(['/template-analytics']);
}
goToAddSection(){
  this.appProvider.current.sectionAddFlag='foradd'
  this.route.navigate(['/edit-admin']);
}
goToAddCategory(){
  this.appProvider.current.categoryAddFlag='foradd'
  this.route.navigate(['/edit-admin']);
}

goToAddSubcategory(){
  this.appProvider.current.SubcategoryFlag='foradd'
  this.route.navigate(['/edit-admin']);
}

onAction(){
 // alert( this.appProvider.current.actionFlag)
  this.appProvider.current.actionFlag='menu'
}

onGoogle(){
 window.open('https://analytics.google.com/analytics/')
}
onFlurry(){
 window.open('https://developer.yahoo.com/analytics/')
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
