import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';


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
callToActionButton=[]
  constructor(private dialog: MatDialog, 
              public dialogRef: MatDialogRef<DialogComponent>,
              private adminService:AdminService,
              private appProvider:AppProvider,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.appProvider.current.currentSectionName)
  	 this.getAdminList()
  }
   getAdminList(){
      this.waitLoader = true
      this.adminService.onGetAdmin().subscribe(data => {
      this.waitLoader = false
      this.adminData = data.response;
      for (var i = 0; i<this.adminData.length ; i++) {
        var obj=this.adminData[i];
        console.log(obj)
        if (obj.sectionName.length>0) {
          for (var j = 0; j <obj.sectionName.length; j++) {
            var  obj2=obj.sectionName[j]
            console.log(obj2)
            if (obj2) {
              if (obj2.name==this.appProvider.current.currentSectionName && obj2.checked==true) {
                if (this.adminName.map(function (img) { return img._id; }).indexOf(obj._id) ==-1) {
                this.adminName.push({_id:obj._id,firstName:obj.firstName,lastName:obj.lastName})
                }
              }
            }
          }
        }
      }
      console.log(JSON.stringify(this.adminName))
      }, error => {
      this.waitLoader = false
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
  for (let i = 0; i <vale.length; i++) {
      var obj=vale[i]
      if (obj.name==this.appProvider.current.currentSectionName && obj.checked==true) {
        return true
      }
    }
 }
}
