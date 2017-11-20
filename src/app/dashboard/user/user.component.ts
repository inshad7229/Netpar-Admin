import { Component, OnInit } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import {UserService} from '../../providers/user.service';
import { Sort } from '@angular/material';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
     userData
     waitLoader
     userDataBackup
    constructor(private dialog: MatDialog,private userProvider:UserService) { }
    openDialog(user): void {
        let dialogRef = this.dialog.open(UserDialogComponent, {
            width: '400px',
            data:{user:user}
        });
        dialogRef.afterClosed().subscribe(result => {
      
        });
    }

    openDialog2(): void {
        let dialogRef = this.dialog.open(FilterDialogComponent, {
            width: '800px',
        });
        dialogRef.afterClosed().subscribe(result => {
      
        });
    }


    ngOnInit() {
		$('.filter-plugin > a').on('click',function(){
			$(this).closest('.filter-plugin').addClass('open');
			console.log($(this));
		});
		$('.close-filter').on('click',function(){
			$(this).closest('.filter-plugin').removeClass('open');
		});


		$('.cusdropdown-toggle').on('click',function(){
            /*$('.cusdropdown-toggle').closest('.dropdown').removeClass('open');*/
            $(this).closest('.dropdown').toggleClass('open');
        })
        $(window).on('click',function(e){
            e.stopPropagation();
            
            var $trigger = $(".cusdropdown-toggle").closest('.dropdown');
            console.log($trigger);
            if($trigger !== e.target && !$trigger.has(e.target).length){
                $('.cusdropdown-toggle').closest('.dropdown').removeClass('open');
            }

            var $trigger = $(".sidebar-filter").closest('.filter-plugin');
            console.log($trigger);
            if($trigger !== e.target && !$trigger.has(e.target).length){
                $('.sidebar-filter').closest('.filter-plugin').removeClass('open');
            }
        });

        this.getUser()
    }

    getUser(){
         this.waitLoader = true;
         this.userProvider.onGetAllUser()
                .subscribe(data => {
                    this.waitLoader = false;
                    this.userData=data.response;
                    this.userDataBackup=data.response
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                }) 
    }

mobileVerification(mobileVerified){
    if (mobileVerified==true) {
        return 'text-success'
    }else{
        return 'text-danger'
    }
}
getTotalTime(totalTime){
    let hourse
    let min
    if (totalTime>60) {
       let totalmin=Math.floor(totalTime/60);
       if (totalmin>60) {
          hourse=Math.floor(totalmin/60)
          min=totalmin%60
          return hourse+' Hours '+min+' Min'
       }else{
           return totalmin+' Min'
       }
    }
    else{
        return 0+' Min'
    }

}
avgTimePerSession(totalTime,totalSessions){

    let hourse
    let min
    if (totalTime>60) {
       let totalmin=Math.floor(totalTime/60);
       let totalminPerSession=Math.floor(totalmin/totalSessions);
       if (totalminPerSession>60) {
          hourse=Math.floor(totalminPerSession/60)
          min=totalminPerSession%60
          return hourse+' Hours '+min+' Min'
       }else{
           return totalminPerSession+' Min'
       }
    }
    else{
        return 0+' Min'
    }
}
avgTimePerDay(totalTime,dayCount){
    // let totalMint
    // let hourse
    // let min
    // if (totalTime>0&& dayCount>0) {
    //     totalMint =totalTime/60
    //     let perDaymint =totalMint/dayCount
    //     hourse=perDaymint/60;
    //     min=perDaymint%60
    //     if (hourse<10) {
    //         hourse=hourse;
    //     }
    //     // min=hourse%60;
    //      return hourse+' Hours '+min+' Min'
    //  //  return totalTime/totalSessions

    // }else{

    //  return 0;
    // }
     let hourse
    let min
    if (totalTime>60) {
       let totalmin=Math.floor(totalTime/60);
       let totalmindayCount=Math.floor(totalmin/dayCount);
       if (totalmindayCount>60) {
          hourse=Math.floor(totalmindayCount/60)
          min=totalmindayCount%60
          return hourse+' Hours '+min+' Min'
       }else{
           return totalmindayCount+' Min'
       }
    }
    else{
        return 0+' Min'
    }
}
avgPageViewPerSession(totalPageViews,totalSessions){
     if (totalPageViews>0&& totalSessions>0) {
       let val=totalPageViews/totalSessions
       return val.toFixed(2)
    }else{

     return 0;
    }
}
getTime(lastlogin){
    if (lastlogin=='1970-01-01T00:00:00.000Z') {
       return '-'
    }else{

      return lastlogin.split('T')[1].substring(0, 5);
    }
}
getDate(lastlogin){
 if (lastlogin=='1970-01-01T00:00:00.000Z') {
       return '-'
    }else{

      return lastlogin.split('T')[0]
    }
}

onStatusChange(user){
    this.waitLoader = true;
         this.userProvider.onEditStatus(user)
                .subscribe(data => {
                    this.waitLoader = false;
                    // this.userData=data.response;
                    if (data.success==true) {
                      this.getUser()
                    }
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                }) 
}
onInfluencerStatusChange(user){
this.waitLoader = true;
         this.userProvider.onEditInfluencer(user)
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success==true) {
                       this.getUser()
                    }
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                }) 
}
sortData(sort: Sort) {
    //  this.contentBackup
    // this.contentList
    // this.userData=data.response;
    //                 this.userDataBackup=data.response
    const data =this.userDataBackup.slice();
    if (!sort.active || sort.direction == '') {
      this.userData = data;
      
      return;
    }

    this.userData  = data.sort((a, b) => {
      console.log(a)
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'session': return compare(a.totalSessions, b.totalSessions, isAsc);
        case 'time': return compare(a.totalTime, b.totalTime, isAsc);
        case 'avgs': return compare((a.totalTime/a.totalSessions), (b.totalTime/b.totalSessions), isAsc);
        case 'avgd': return compare((a.totalTime/a.dayCount), (b.totalTime/b.dayCount), isAsc);
        case 'page': return compare(a.totalPageViews, b.totalPageViews, isAsc);
        case 'avgp': return compare((a.totalPageViews/a.totalSessions), (b.totalPageViews/b.totalSessions), isAsc);
        case 'online': return compare(a.lastlogin, b.lastlogin, isAsc);
        case 'Like': return compare(a.totalLikest, b.totalLikest, isAsc);
        case 'share': return compare(a.totalShares, b.totalShares, isAsc);
        case 'comment': return compare(a.totalComments, b.totalComments, isAsc);
        case 'save': return compare(a.totalSaves, b.totalSaves, isAsc);
        case 'download': return compare(a.totalDownloads, b.totalDownloads, isAsc);
        case 'Submission': return compare(a.totalSubmissions, b.totalSubmissions, isAsc);
        case 'Call': return compare(a.totalsCalls, b.totalsCalls, isAsc);
        case 'CallMeBack': return compare(a.totalCallBacks, b.totalCallBacks, isAsc);
        case 'Publications': return compare(a.totalPublications, b.totalPublications, isAsc);



        default: return 0;
      }
    });
  }
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
