import { Component, OnInit,Inject } from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {MdListModule} from '@angular/material';


import {AdminService} from '../../../providers/admin.service'
import {AppProvider} from '../../../providers/app.provider'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  providers:[AdminService]
})
export class DialogComponent implements OnInit {
waitLoader
adminData 
adminName=[];
  constructor(private dialog: MdDialog, 
              public dialogRef: MdDialogRef<DialogComponent>,
              private adminService:AdminService,
              private appProvider:AppProvider,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  	 this.getAdminList()
  }
   getAdminList(){
          this.waitLoader = true
          this.adminService.onGetAdmin().subscribe(data => {
            this.waitLoader = false
            this.adminData = data.response;
           // console.log(JSON.stringify(this.adminData))
        }, error => {
            this.waitLoader = false
         //  this.toastr.error( 'Something went worng please try again after some time !!','Error !!. ',{toastLife: 3000, showCloseButton: true});
        })

    }
  onClosed(){
  	this.dialogRef.close();
  }
  getName(){
  let value=this.getvalue() 
  console.log(JSON.stringify(value))
   return value;
  }
 getvalue(){
 
          for (var i = 0; i<=this.adminData.length ; i++) {
         var obj=this.adminData[0];
         for (var j = 0; j <=obj.sectionName.length; j++) {
          var  obj2=obj.sectionName[j]
          if (obj2) {
             if (obj2.name==this.appProvider.current.currentSectionName) {
               if (obj2.check==true) {
                 this.adminName.push({firstName:obj.firstName,lastName:obj.lastNmae})
               }
           }
          }
          
         }
      }
 
 }
 validate(vale){
  // alert(JSON.stringify(vale))
  for (let i = 0; i <vale.length; i++) {
      var obj=vale[i]
      if (obj.name==this.appProvider.current.currentSectionName && obj.checked==true) {
        // code...
        return true
      }
  }
 }
}
