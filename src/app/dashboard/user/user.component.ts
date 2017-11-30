import { Component, OnInit } from '@angular/core';
// import {DataTableModule} from "angular2-datatable";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';
import {UserService} from '../../providers/user.service';
import {StateService} from '../../providers/state.service';
import { Sort } from '@angular/material';
import { forkJoin } from "rxjs/observable/forkJoin";
import {StateResource} from '../../models/stateResourcesModel'
import {StringResource} from '../../models/saredResources'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[UserService,StateService]
})
export class UserComponent implements OnInit {
     userData
     waitLoader
     userDataBackup
     stateList
     stateListBackup
     limitedFilter
     limit
     stateListState
     filterApplyStatus:boolean=false
     dataForSorting
    distList=[]
    activeDist:number=-1
    selectedState=[]
    selectedDist=[]
    selectedBlock=[]
    rigthSide
    onMobileStatusData=[]
    onHyperData=[]
    onModrateData=[]
    onActiveData=[]
    onInactiveData=[]
    onMaleData=[]
    onFemaleData=[]
    onInfluencereData=[]
    onVerifiedData=[]
    onUnverifiedData=[]
    onSelectLangData=[]
    statusMobileStatusData
    statusHyperData
    statusModrateData
    statusActiveData
    statusInactiveData
    statusMaleData
    statusFemaleData
    statusInfluencereData
    statusVerifiedData
    statusUnverifiedData
    statusSelectLangData
    filterLanguage=[]
    filterState=[]
    filterDist=[]
    filterBlock=[]
dataAfterLanguage=[]
dataAfterState=[]
dataAfterDist=[]
dataAfterBlock=[]
dataAfterFilterApply
afterApplyStatus
 stateResource:StateResource=new StateResource()
 stringResource:StringResource=new  StringResource()
    constructor(private dialog: MatDialog,private userProvider:UserService,private stateService:StateService) { 
    this.stateListState=this.stateResource.state
    this.limitedFilter={}
    this.rigthSide={}
    this.afterApplyStatus={}
                         this.limitedFilter.perPage='25'
                         this.limit=25}
    openDialog(user): void {
        let dialogRef = this.dialog.open(UserDialogComponent, {
            width: '400px',
            data:{user:user}
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
         // this.userProvider.onGetAllUser()
         //        .subscribe(data => {
         //            this.waitLoader = false;
         //            this.userData=data.response;
         //            this.userDataBackup=data.response
                    
         //        },error=>{
                     
         //            alert(error)
         //            this.waitLoader = false;
         //        })
         forkJoin([ this.userProvider.onGetAllUser(),this.stateService.getStates()])
         .subscribe(results => {
                    this.waitLoader = false;
                    if (results) {
                      this.userData=results[0].response;
                      this.userDataBackup=results[0].response;
                      this.dataForSorting=results[0].response
                      this.stateList=results[1]
                      this.stateListBackup=results[1]
                      //console.log(JSON.stringify( this.stateList))
                    }
                    
                    
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
onSateSelect(stateListState){
  if (stateListState.check!=true) {
    for(var i = 0; i <this.stateListState[0].dist.length; i++) {
      this.stateListState[0].dist[i].check=false;
        for(var j = 0; j <this.stateListState[0].dist[i].block.length; j++) {
        this.stateListState[0].dist[i].block[j].check=false;    
       }
     }
      this.dataAfterState= this.dataAfterState.filter(arg=>arg.state!=stateListState.name)
      this.filterState=this.filterState.filter(arg=>arg.name!=stateListState.name)
  }else{
     this.filterState.push(stateListState)
     let data=this.userDataBackup.filter(arg=>arg.state==stateListState.name)
      for(let i=0;i<data.length;i++){
        this.dataAfterState.push(data[i])
      }
      
    }
}

openDialog2(): void {
        let dialogRef = this.dialog.open(FilterDialogComponent, {
            width: '800px',
            data:{state:this.stateListState}
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
                this.selectedState=result.state
                this.selectedDist=result.dist
                
                this.selectedBlock=result.block

                let data=this.userDataBackup.filter(arg=>this.getStateIndex(arg.state)==true)
                for(let i=0;i<data.length;i++){
                this.dataAfterState.push(data[i])
                }

              let data2=this.userDataBackup.filter(arg=>this.getDistrictIndex(arg.district)==true)
              for(let i=0;i<data2.length;i++){
              this.dataAfterDist.push(data2[i])
              }


              let data3=this.userDataBackup.filter(arg=>this.getBlockIndex(arg.block)==true)
              for(let i=0;i<data3.length;i++){
              this.dataAfterBlock.push(data3[i])
              }
          }
      
        });
    }
getStateIndex(state):boolean{
  if (this.selectedState.indexOf(state)!=-1) {
    return true
  }else{
    return false
  }

}
getDistrictIndex(dist):boolean{
  if (this.selectedDist.indexOf(dist)!=-1) {
    return true
  }else{
    return false
  }


}
getBlockIndex(block):boolean{
   if (this.selectedBlock.indexOf(block)!=-1) {
    return true
  }else{
    return false
  }

}
openFilter(){
  if (this.limitedFilter.state=='Maharashtra') {
    this.stateListState[0].check=true;
    //this.distList=this.stateListState[0].dist
  }else{
     this.stateListState[0].check=false;
     for(var i = 0; i <this.stateListState[0].dist.length; i++) {
      this.stateListState[0].dist[i].check=false;
        for(var j = 0; j <this.stateListState[0].dist[i].block.length; j++) {
        this.stateListState[0].dist[i].block[j].check=false;    
       }
     }
  }

}
onChangeDist(check,index){
  if (index==0) {
     if (check==true) {
       this.activeDist=0
        this.filterDist.push(this.stateListState[0].dist[0])
         let data=this.userDataBackup.filter(arg=>arg.district==this.stateListState[0].dist[0].name)
      for(let i=0;i<data.length;i++){
        this.dataAfterDist.push(data[i])
      }
     }else{
       this.dataAfterDist= this.dataAfterDist.filter(arg=>arg.district!=this.stateListState[0].dist[0].name)
      this.filterDist=this.filterDist.filter(arg=>arg.name!=this.stateListState[0].dist[0].name)
       if (this.stateListState[0].dist[1].check==true && this.stateListState[0].dist[2].check==true) {
          this.activeDist=2
       }else if(this.stateListState[0].dist[1].check!=true && this.stateListState[0].dist[2].check==true){
           this.activeDist=2
       }else if(this.stateListState[0].dist[1].check==true && this.stateListState[0].dist[2].check!=true){
           this.activeDist=1
       }
       for (var i = 0; i <this.stateListState[0].dist[0].block.length; i++) {
         this.stateListState[0].dist[0].block[i].check=false
       }
     }
  }else if (index==1) {
     if (check==true) {
       this.activeDist=1
       this.filterDist.push(this.stateListState[0].dist[1])
       let data=this.userDataBackup.filter(arg=>arg.district==this.stateListState[0].dist[1].name)
       for(let i=0;i<data.length;i++){
        this.dataAfterDist.push(data[i])
      } 

     }else{
        this.dataAfterDist= this.dataAfterDist.filter(arg=>arg.district!=this.stateListState[0].dist[1].name)
      this.filterDist=this.filterDist.filter(arg=>arg.name!=this.stateListState[0].dist[1].name)
       if (this.stateListState[0].dist[0].check==true && this.stateListState[0].dist[2].check==true) {
          this.activeDist=2
       }else if(this.stateListState[0].dist[0].check!=true && this.stateListState[0].dist[2].check==true){
           this.activeDist=2
       }else if(this.stateListState[0].dist[0].check==true && this.stateListState[0].dist[2].check!=true){
           this.activeDist=0
       }
       for (var i = 0; i <this.stateListState[0].dist[1].block.length; i++) {
         this.stateListState[0].dist[1].block[i].check=false
       }
     }
  } else if (index==2) {
     if (check==true) {
       this.activeDist=2
       this.filterDist.push(this.stateListState[0].dist[2])
       let data=this.userDataBackup.filter(arg=>arg.district==this.stateListState[0].dist[2].name)
       for(let i=0;i<data.length;i++){
        this.dataAfterDist.push(data[i])
      } 
     }else{
       this.dataAfterDist= this.dataAfterDist.filter(arg=>arg.district!=this.stateListState[0].dist[2].name)
      this.filterDist=this.filterDist.filter(arg=>arg.name!=this.stateListState[0].dist[2].name)
        if (this.stateListState[0].dist[0].check==true && this.stateListState[0].dist[1].check==true) {
          this.activeDist=1
       }else if(this.stateListState[0].dist[0].check!=true && this.stateListState[0].dist[1].check==true){
           this.activeDist=1
       }else if(this.stateListState[0].dist[0].check==true && this.stateListState[0].dist[1].check!=true){
           this.activeDist=0
       }
       for (var i = 0; i <this.stateListState[0].dist[2].block.length; i++) {
         this.stateListState[0].dist[2].block[i].check=false
       }
     }
  } 

}

onChangeBlock(block){
  if (block.check==true) {
    this.filterBlock.push(block.name)
       let data=this.userDataBackup.filter(arg=>arg.block==block.name)
       for(let i=0;i<data.length;i++){
        this.dataAfterBlock.push(data[i])
      } 
  }else{
      this.dataAfterBlock= this.dataAfterBlock.filter(arg=>arg.block!=block.name)
      this.filterBlock=this.filterBlock.filter(arg=>arg!=block.name)
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
    const data =this.dataForSorting.slice();
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
  onPerPage(perPage){
      if (perPage=='25') {
           this.limit=25
        // code...
      }else if (perPage=='50') {
        this.limit=50
        // code...
      }else if (perPage=='100') {
        this.limit=100
        // code...
      }else if (perPage=='200') {
        this.limit=100
        // code...
      }else if (perPage=='All') {
        this.limit=this.userData.length
        // code...
      }
    }
onRange(range){
  //alert(range)
  if (this.filterApplyStatus) {
     this.userData=this.dataAfterFilterApply.filter(arg=>this.getStatus(arg.dateOfCreation,range)==true)
  }else{
    this.userData=this.userDataBackup.filter(arg=>this.getStatus(arg.dateOfCreation,range)==true) 
  }
  this.dataForSorting=this.userData
}
getStatus(time,range):boolean {
  let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  let firstDate = new Date();
  let secondDate = new Date(time);
  let diffDays = Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay));
  console.log(diffDays)
  switch (range) {
        case '7d':
         console.log('7d')
          if (diffDays<8) {
             return true;
           }else{
             return false;
           } 
        case '15d': 
        if (diffDays<16) {
             return true;
           }else{
             return false;
           } 
        case '1m': 
        if (diffDays<31) {
             return true;
           }else{
             return false;
           }
        case '3m':
        if (diffDays<91) {
             return true;
           }else{
             return false;
           } 
        case '6m': 
        if (diffDays<181) {
             return true;
           }else{
             return false;
           }
        case '1y': 
        if (diffDays<365) {
             return true;
           }else{
             return false;
           }
        case 'all':return true
        default: return false;
      }
 }

onMobileStatus(status){
  if (status==true) {
   this.onMobileStatusData=this.userDataBackup.filter(arg=>arg.mobileVerified!=true)
  }else{
    this.onMobileStatusData=[]
  }
}
onHyper(status){
  if (status==true) {
   this.onHyperData=this.userDataBackup.filter(arg=>this.getActiveStatus(arg.lastlogin,'7d')==true)
 }else{
   this.onHyperData=[]
 }

}
onModrate(status){
 if (status==true) {
   this.onModrateData=this.userDataBackup.filter(arg=>this.getActiveStatus(arg.lastlogin,'15d')==true)
 }else{
   this.onModrateData=[]
 }
}
onActive(status){
  if (status==true) {
   this.onActiveData=this.userDataBackup.filter(arg=>this.getActiveStatus(arg.lastlogin,'1m')==true)
 }else{
   this.onActiveData=[]
 }
}
onInactive(status){
   if (status==true) {
   this.onInactiveData=this.userDataBackup.filter(arg=>this.getActiveStatus(arg.lastlogin,'31day')==true)
 }else{
   this.onInactiveData=[]
 }
}
onMale(status){
  if (status==true) {
   this.onMaleData=this.userDataBackup.filter(arg=>arg.gender=='male')
 }else{
   this.onMaleData=[]
 }
}
onFemale(status){
  if (status==true) {
   this.onFemaleData=this.userDataBackup.filter(arg=>arg.gender=='female')
 }else{
   this.onFemaleData=[]
 }
}
onInfluencere(status){
  if (status==true) {
   this.onInfluencereData=this.userDataBackup.filter(arg=>arg.influencer==true)
 }else{
   this.onInfluencereData=[]
 }
}
onVerified(status){
 if (status==true) {
   this.onVerifiedData=this.userDataBackup.filter(arg=>arg.status==true)
 }else{
   this.onVerifiedData=[]
 }
}
onUnverified(status){
 if (status==true) {
   this.onUnverifiedData=this.userDataBackup.filter(arg=>arg.status==false)
 }else{
   this.onUnverifiedData=[]
 }
}

onSelectLang(lang){
  if (lang.check==true) {
      this.filterLanguage.push(lang.language)
      let data=this.userDataBackup.filter(arg=>arg.language==lang.language)
      for(let i=0;i<data.length;i++){
        this.dataAfterLanguage.push(data[i])
      }
     //this.getCategory(subCat._id)
    }else{
      this.dataAfterLanguage= this.dataAfterLanguage.filter(arg=>arg.language!=lang.language)
      this.filterLanguage=this.filterLanguage.filter(arg=>arg!=lang.language)
    }
}

getActiveStatus(time,range):boolean {
  let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  let firstDate = new Date();
  let secondDate = new Date(time);
  let diffDays = Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay));
  console.log(diffDays)
  switch (range) {
        case '7d':
         console.log('7d')
          if (diffDays<8) {
             return true;
           }else{
             return false;
           } 
        case '15d': 
        if (diffDays<16) {
             return true;
           }else{
             return false;
           } 
        case '1m': 
        if (diffDays<31) {
             return true;
           }else{
             return false;
           }
        case '3m':
        if (diffDays<91) {
             return true;
           }else{
             return false;
           } 
        case '6m': 
        if (diffDays<181) {
             return true;
           }else{
             return false;
           }
        case '1y': 
        if (diffDays<365) {
             return true;
           }else{
             return false;
           }
       case '31day': 
        if (diffDays>30) {
             return true;
           }else{
             return false;
           }
        case 'all':return true
        default: return false;
      }
 }
 unique(array){
         return array.filter(function(el, index, arr) {
                  return index == arr.indexOf(el);     
              }); 
}

  onApplyFilter(){
        this.filterApplyStatus=true
       let finalData= this.dataAfterLanguage.concat(this.dataAfterState ,this.dataAfterDist,
                                                    this.dataAfterBlock,this.onMobileStatusData,
                                                    this.onHyperData,this.onModrateData,this.onInactiveData,
                                                    this.onInactiveData,this.onMaleData,this.onFemaleData,
                                                    this.onInfluencereData,this.onVerifiedData,this.onUnverifiedData);
       if (this.unique(finalData).length>0) {
            this.dataAfterFilterApply=this.unique(finalData)
            this.userData=this.unique(finalData);
            this.dataForSorting=this.unique(finalData);
         // code...
       }
      this.afterApplyStatus.unverified=this.rigthSide.unverified
      this.afterApplyStatus.verified=this.rigthSide.verified
      this.afterApplyStatus.influencere=this.rigthSide.influencere
      this.afterApplyStatus.female=this.rigthSide.female
      this.afterApplyStatus.male=this.rigthSide.male
      this.afterApplyStatus.active=this.rigthSide.active
      this.afterApplyStatus.modrate=this.rigthSide.modrate
      this.afterApplyStatus.hyper=this.rigthSide.hyper
       this.afterApplyStatus.inactive=this.rigthSide.inactive
      this.afterApplyStatus.mobileStatus=this.rigthSide.mobileStatus
      let state=this.filterState.concat(this.selectedState)
      let block=this.filterBlock.concat(this.selectedBlock)
      let dist=this.filterDist.concat(this.selectedDist)
      if (this.unique(state).length>0) {
         this.afterApplyStatus.state=this.unique(state)
        // code...
      }
      if (this.unique(block).length>0) {
         this.afterApplyStatus.block=this.unique(block)
        // code...
      }
      if (this.unique(dist).length>0) {
          this.afterApplyStatus.dist=this.unique(dist)
        // code...
      }
      this.afterApplyStatus.language=this.filterLanguage


}

onClearLangFilter(lang){
    this.userData=this.userData.filter(arg=>arg.language!=lang)
    this.afterApplyStatus.language= this.afterApplyStatus.language.filter(arg=>arg!=lang)
    this.filterLanguage= this.filterLanguage.filter(arg=>arg!=lang)
}
onClearStateFilter(state){
    this.userData=this.userData.filter(arg=>arg.state!=state)
    this.afterApplyStatus.state=this.afterApplyStatus.state.filter(arg=>arg.name!=state)
    this.filterState=this.filterState.filter(arg=>arg.name!=state)
    this.selectedState=this.selectedState.filter(arg=>arg.name!=state)
}
onClearDistFilter(dist){
    this.userData=this.userData.filter(arg=>arg.district!=dist)
    this.afterApplyStatus.dist=this.afterApplyStatus.dist.filter(arg=>arg.name!=dist)
    this.filterDist=this.filterDist.filter(arg=>arg.name!=dist)
    this.selectedDist=this.selectedDist.filter(arg=>arg.name!=dist)
}
onClearBlockFilter(block){
    this.userData=this.userData.filter(arg=>arg.district!=block)
    this.afterApplyStatus.block=this.afterApplyStatus.block.filter(arg=>arg.name!=block)
    this.filterBlock=this.filterBlock.filter(arg=>arg.name!=block)
    this.selectedBlock=this.selectedBlock.filter(arg=>arg.name!=block)
}
onClearmobileStatusFilter(){
    this.userData=this.userData.filter(arg=>arg.mobileVerified!=true)
    this.afterApplyStatus.mobileStatus=false
    this.rigthSide.mobileStatus=false
}
onClearUnverifiedFilter(){
    this.userData=this.userData.filter(arg=>arg.status==true)
    this.afterApplyStatus.unverified=false
    this.rigthSide.unverified=false
}
onClearVerifiedFilter(){
    this.userData=this.userData.filter(arg=>arg.status!=true)
    this.afterApplyStatus.verified=false
    this.rigthSide.verified=false
}
onClearInfluencereFilter(){
    this.userData=this.userData.filter(arg=>arg.influencere!=true)
    this.afterApplyStatus.influencere=false
    this.rigthSide.influencere=false
}
onClearFemaleFilter(){
    this.userData=this.userData.filter(arg=>arg.gender!='female')
    this.afterApplyStatus.female=false
    this.rigthSide.female=false
}
onClearMaleFilter(){
    this.userData=this.userData.filter(arg=>arg.gender!='male')
    this.afterApplyStatus.male=false
    this.rigthSide.male=false
}
onClearActiveFilter(){
  this.afterApplyStatus.active=false
  this.rigthSide.active=false
     this.userData=this.userData.filter(arg=>this.getActiveStatus(arg.lastlogin,'7d')!=true)
}
onClearModrateFilter(){
      this.afterApplyStatus.modrate=false
      this.rigthSide.modrate=false
     this.userData=this.userData.filter(arg=>this.getActiveStatus(arg.lastlogin,'15d')!=true)
}
onClearHyperFilter(){
      this.afterApplyStatus.hyper=false
      this.rigthSide.hyper=false
     this.userData=this.userData.filter(arg=>this.getActiveStatus(arg.lastlogin,'1m')!=true)
}
onClearInactiveFilter(){
       this.afterApplyStatus.inactive=false
       this.rigthSide.inactive=false
     this.userData=this.userData.filter(arg=>this.getActiveStatus(arg.lastlogin,'31day')!=true)
}
clearAll(){
     this.afterApplyStatus.mobileStatus=false
    this.rigthSide.mobileStatus=false
    this.afterApplyStatus.unverified=false
    this.rigthSide.unverified=false
    this.afterApplyStatus.verified=false
    this.rigthSide.verified=false
    this.afterApplyStatus.influencere=false
    this.rigthSide.influencere=false
    this.afterApplyStatus.female=false
    this.rigthSide.female=false
    this.afterApplyStatus.male=false
    this.rigthSide.male=false
    this.afterApplyStatus.active=false
    this.rigthSide.active=false
this.afterApplyStatus.modrate=false
this.rigthSide.modrate=false
this.afterApplyStatus.hyper=false
this.rigthSide.hyper=false
this.afterApplyStatus.inactive=false
this.rigthSide.inactive=false
this.afterApplyStatus.languag=[]
this.filterLanguage=[]
this.afterApplyStatus.state=[]
this.filterState=[]
this.selectedState=[]
this.afterApplyStatus.dist=[]
this.filterDist=[]
this.selectedDist=[]
this.afterApplyStatus.block=[]
this.filterBlock=[]
this.userData=this.userDataBackup.slice(0)
this.selectedBlock=[]
this.filterApplyStatus=false
      for (var i = 0; i < this.stateListState.length; i++) {
           let obj=this.stateListState[i]
           obj.check=false
           for (var j = 0; j < obj.dist.length; j++) {
            let obj2=obj.dist[j]
            obj2.check=false
            for (var k = 0; k < obj2.block.length; k) {
              let obj3=obj2.block[k]
              obj3.check=false
              // code...
            }
           }
      }
}


 onSortMulti(value){
      //alert(value)
 const data =this.dataForSorting.slice();
    if (!value || value == '') {
      this.userData = data;
      
      return;
    }

    this.userData.sort((a, b) => {
      //alert(value)
      let isAsc =  'asc';
      switch (value) {

        case 'session': return compare2(a.totalSessions, b.totalSessions, isAsc);
        case 'time': return compare2(a.totalTime, b.totalTime, isAsc);
        case 'avgs': return compare2((a.totalTime/a.totalSessions), (b.totalTime/b.totalSessions), isAsc);
        case 'avgd': return compare2((a.totalTime/a.dayCount), (b.totalTime/b.dayCount), isAsc);
        case 'page': return compare2(a.totalPageViews, b.totalPageViews, isAsc);
        case 'avgp': return compare2((a.totalPageViews/a.totalSessions), (b.totalPageViews/b.totalSessions), isAsc);
        case 'online': return compare2(a.lastlogin, b.lastlogin, isAsc);
        case 'Like': return compare2(a.totalLikest, b.totalLikest, isAsc);
        case 'share': return compare2(a.totalShares, b.totalShares, isAsc);
        case 'comment': return compare2(a.totalComments, b.totalComments, isAsc);
        case 'save': return compare2(a.totalSaves, b.totalSaves, isAsc);
        case 'download': return compare2(a.totalDownloads, b.totalDownloads, isAsc);
        case 'Submission': return compare2(a.totalSubmissions, b.totalSubmissions, isAsc);
        case 'Call': return compare2(a.totalsCalls, b.totalsCalls, isAsc);
        case 'CallMeBack': return compare2(a.totalCallBacks, b.totalCallBacks, isAsc);
        case 'Publications': return compare2(a.totalPublications, b.totalPublications, isAsc);
        case 'invite': return compare2(a.totalInvites, b.totalInvites, isAsc);
        case 'conversation': return compare2(a.totalConversations, b.totalConversations, isAsc);
        default: return 0;
      }
    });
}
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
function compare2(a, b, isAsc) {
  return (b-a) 
}