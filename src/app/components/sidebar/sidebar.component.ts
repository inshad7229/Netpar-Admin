import { Component, OnInit,ViewChild,Inject,ViewContainerRef } from '@angular/core';
import { Routes, RouterModule ,Router,RouterLinkActive} from '@angular/router';
import {AppProvider} from '../../providers/app.provider'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
netparUser
config
  constructor(private route:Router,
             private activeLink:RouterLinkActive,public appProvider:AppProvider,public dialog: MatDialog,) { }

  ngOnInit() {
     this.netparUser=JSON.parse(localStorage['netparUser'])
     console.log(JSON.stringify(this.netparUser))
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
    if (this.netparUser.viewEditAdministrator==true) {
         this.route.navigate(['/home']);
        // code...
    }else{
        let flag='Administrator View'
        this.openDilog(flag)

    }
}
goToAddAdmin(){
  if (this.netparUser.addAdministrator==true) {
         this.appProvider.current.adminPageFlag='foradd'
          this.route.navigate(['/edit-admin']);
        // code...
    }else{
        let flag='Administrator Add'
        this.openDilog(flag)
        
    }
 
}
onSecTemp(){
    if (this.netparUser.sectionTemplate==true) {
         this.route.navigate(['/section-templates']);
        // code...
    }else{
        let flag='Section Template'
        this.openDilog(flag)
        
    }
  
}
onCatTemp(){
     if (this.netparUser.categoryTemplate==true) {
         this.route.navigate(['/category-templates']);
        // code...
    }else{
        let flag='Category Template'
        this.openDilog(flag)
        
    }
  
}
onListingTemp(){
    if (this.netparUser.listingView==true) {
         this.route.navigate(['/list-templates']);
        // code...
    }else{
        let flag='Listing Template'
        this.openDilog(flag)
        
    }
  
}
onViewSecAction(){
    if (this.netparUser.viewEditSection==true) {
         this.appProvider.current.actionFlag='menu'
         this.route.navigate(['/view-section']);
        // code...
    }else{
        let flag='View Section'
        this.openDilog(flag)
        
    }

}
onAddSecAction(){
    if (this.netparUser.addSection==true) {
         this.appProvider.current.actionFlag='menu'
          this.route.navigate(['/add-section']);
        // code...
    }else{
        let flag='Add Section'
        this.openDilog(flag)
        
    }

}
onAddCatAction(){
    if (this.netparUser.addcategory==true) {
         this.appProvider.current.actionFlag='menu'
          this.route.navigate(['/add-category']);
        // code...
    }else{
        let flag='Add Category'
        this.openDilog(flag)
        
    }

}
onAddSubcatAction(){
    if (this.netparUser.addSubcategory==true) {
         this.appProvider.current.actionFlag='menu'
         this.route.navigate(['/add-subcategory']);
        // code...
    }else{
        let flag='Add SubCategory'
        this.openDilog(flag)
        
    }
}
onViewContent(){

if (this.netparUser.contentManagement==true) {
         this.route.navigate(['/view-content']);
        // code...
    }else{
        let flag='View Content'
        this.openDilog(flag)
        
    }
}
onAddContent(){

    if (this.netparUser.addContentManagement==true) {
         this.appProvider.current.actionFlag='menu'
          this.route.navigate(['/add-content']);
        // code...
    }else{
        let flag='Add Content'
        this.openDilog(flag)
        
    }

}
onComment(){
  if (this.netparUser.commentManagement==true) {
         this.appProvider.current.actionFlag='menu'
          this.route.navigate(['/comment'])
        // code...
    }else{
        let flag='Comment Management'
        this.openDilog(flag)
        
    }  

}
onUserContribution(){
    if (this.netparUser.userContributionManagement==true) {
         this.appProvider.current.actionFlag='menu'
          this.route.navigate(['/user-contribution']);
        // code...
    }else{
        let flag='User Contribution Management'
        this.openDilog(flag)
        
    } 

}
onHomePage(){

    if (this.netparUser.homepageManagement==true) {
         this.appProvider.current.actionFlag='menu'
          this.route.navigate(['/homepage']);
        // code...
    }else{
        let flag='Homepage Management'
        this.openDilog(flag)
        
    }

}
onUser(){
    if (this.netparUser.userManagement==true) {
         this.appProvider.current.actionFlag='menu'
          this.route.navigate(['/user']);
        // code...
    }else{
        let flag='User Management'
        this.openDilog(flag)
        
    }

}
onSectionAnalytics(){
    if (this.netparUser.sectionAnalytics==true) {
         this.appProvider.current.actionFlag='menu'
          this.route.navigate(['/section-analytics']);
        // code...
    }else{
        let flag='Section Analytics'
        this.openDilog(flag)
        
    }

}
onArticleAnalytics(){
    if (this.netparUser.articleAnalytics==true) {
         this.appProvider.current.actionFlag='menu'
          this.route.navigate(['/article-analytics']);
        // code...
    }else{
        let flag='Article Analytics'
        this.openDilog(flag)
        
    }

}
onElemaentAnalytics(){
    if (this.netparUser.elementAnalytics==true) {
         this.appProvider.current.actionFlag='menu'
          this.route.navigate(['/element-analytics']);
        // code...
    }else{
        let flag='Element Analytics'
        this.openDilog(flag)
        
    }

}
onTemplateAnalytics(){
    if (this.netparUser.templateAnalytics==true) {
          this.appProvider.current.actionFlag='menu'
          this.route.navigate(['/template-analytics']);
        // code...
    }else{
        let flag='Template Analytics'
        this.openDilog(flag)
        
    }

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
    if (this.netparUser.templateAnalytics==true) {
          this.appProvider.current.actionFlag='menu'
          window.open('https://analytics.google.com/analytics/')
        // code...
    }else{
        let flag='Google Analytics'
        this.openDilog(flag)
        
    }
 
}
onFlurry(){
    if (this.netparUser.flurryAnalytics==true) {
          this.appProvider.current.actionFlag='menu'
          window.open('https://developer.yahoo.com/analytics/')
        // code...
    }else{
        let flag='Flurry Analytics'
        this.openDilog(flag)
        
    }
 
}

openDilog(lang): void {
        let dialogRef = this.dialog.open(SideBarConfirmation, {
            width: '400px',
            data:{flag:lang},
        });
        dialogRef.afterClosed().subscribe(result => {
      
        });
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


@Component({
  selector: 'sidebar-confirmation-dialog',
  templateUrl: 'confirmation.html'
})

export class SideBarConfirmation {
   

  constructor(
    public dialogRef: MatDialogRef<SideBarConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data: any,
        private router: Router,
        public appProvider: AppProvider,
        public dialog: MatDialog) {
       }

  onYesClick(): void {
    this.dialogRef.close(this.data.admin);
    // this.homePage.onDelete(this.data.admin)
  }
   onNoClick(): void {
    this.dialogRef.close();
  }


 

}
