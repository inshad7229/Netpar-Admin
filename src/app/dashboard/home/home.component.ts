import { Component, OnInit,ViewChild,Inject,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatProgressBar} from '@angular/material';
import {AdminService} from './admin.service'
import { ToastsManager , Toast} from 'ng2-toastr';
import {AppProvider} from '../../providers/app.provider'
import { AdminService as  EditAdminService} from '../edit-admin/edit.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LanguageDialogComponent } from './language-dialog/language-dialog.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [AdminService, EditAdminService]
})
export class HomeComponent implements OnInit {

    adminData: any
    enablePasswordEdit: number;
    editPasswordModel: any;
    waitLoader: boolean;
    animal: string="ram";
    name: string;
    constructor(private router: Router,
        private adminService: AdminService,
        private editadminService: EditAdminService,
        private appProvider: AppProvider,
        public dialog: MatDialog,
         vcr: ViewContainerRef,
        public toastr: ToastsManager, ) {
        this.toastr.setRootViewContainerRef(vcr);

    }

    ngOnInit() {
       this.getAdminList()

    }

    getAdminList(){
          this.enablePasswordEdit=-1;
          this.waitLoader = true
          this.adminService.onGetAdmin().subscribe(data => {
            this.waitLoader = false
            this.adminData = data.response;
           // console.log(JSON.stringify(this.adminData))
        }, error => {
            this.waitLoader = false
           this.toastr.error( 'Something went worng please try again after some time !!','Error !!. ',{toastLife: 3000, showCloseButton: true});
        })
        localStorage['currentpath'] = this.router.url;
    }

    palinPass(a) {
        return window.atob(a)

    }
    editAdmin(a, pageFlag) {
        this.appProvider.current.adminData = a;
        this.appProvider.current.adminPageFlag = pageFlag;
        this.router.navigate(['/edit-admin'], {
            skipLocationChange: true
        });
       // console.log(JSON.stringify(this.appProvider.current.adminData))

    }
    editPassword(index) {
        this.enablePasswordEdit = index;
    }

    onStatusChange(adminData) {
        this.waitLoader = true
        this.editadminService.onEditAdminStatus(adminData).subscribe(data => {
            this.getAdminList()
        }, error => {
           this.toastr.error( 'Something went worng please try again after some time !!','Error !!. ',{toastLife: 3000, showCloseButton: true});
        })
    }
    onDelete(adminData) {
        this.waitLoader = true
        adminData.delstatus = "true";

        this.editadminService.onAdminDelete(adminData).subscribe(data => {
            this.getAdminList()
        }, error => {
            this.toastr.error( 'Something went worng please try again after some time !!','Error !!. ',{toastLife: 3000, showCloseButton: true});
        })
    }
    onEditPassSend(adminData, newPass) {
        this.waitLoader = true
        console.log(adminData)
        // adminData.password=newPass;
        // adminData.plain=window.btoa(newPass);
        this.editadminService.onEditAdminPassword(adminData._id, newPass).subscribe(data => {
            // this.adminData=data.response;
            // console.log(JSON.stringify(this.adminData))
            this.getAdminList()
        }, error => {
            this.toastr.error( 'Something went worng please try again after some time !!','Error !!. ',{toastLife: 3000, showCloseButton: true});
        })
    }
    openDialog(admin): void {
    let dialogRef = this.dialog.open(AdminConfirmation, {
      width: '330px',
      data: { admin: admin}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // alert('closed')
      // alert(JSON.stringify(result))
      if (result) {
          // code...
        this.onDelete(result)
      }
     // this.animal = result;
    });
  }
  hideEditText(){
   this.enablePasswordEdit=-1; 
  }
  openDialogLanguage(lang): void {
        let dialogRef = this.dialog.open(LanguageDialogComponent, {
            width: '400px',
            data:{lang:lang},
        });
        dialogRef.afterClosed().subscribe(result => {
      
        });
    }


}


@Component({
  selector: 'admin-confirmation-dialog',
  templateUrl: 'confirmation.html',
  providers: [AdminService, EditAdminService]
})

export class AdminConfirmation {
   

  constructor(
    public dialogRef: MatDialogRef<AdminConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data: any,
        private router: Router,
        private adminService: AdminService,
        private editadminService: EditAdminService,
        private appProvider: AppProvider,
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