import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';
 import {StateResource} from '../../../models/stateResourcesModel'
import {StateService} from '../../../providers/state.service'

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss'],
  providers:[StateService]
})
export class FilterDialogComponent implements OnInit {
  stateList
  stateListState
  stateListBlock
  stateListDist
  listDist
  waitLoader
  selectedData
  listBlock
  stateResource:StateResource=new StateResource()
	constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<FilterDialogComponent>,
  	@Inject(MAT_DIALOG_DATA) public data: any,private stateService:StateService) {
    this.selectedData={}
    this.stateListState=this.stateResource.state

  }

  	ngOnInit() {
  	  this.stateService.getStates()
                .then(data => {
                    this.stateList = data;
                    // this.stateListState=data
                    // this.stateListBlock
                    // this.stateListDist
                    // this.userData=data.response;
                    // this.userDataBackup=data.response
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                })
  	}

  	onClosed(){
  		this.dialogRef.close();
  	}
   getState(){
     
   }
forState(state){
  let stateData=this.stateListState.slice()
  if (state.length>0) {
    for (var i =0; i<stateData.length; i++) {
       // let obj=this.stateListState[i]
        if (state.indexOf(stateData[i].name)!=-1) {
           stateData[i].check=true
        }else{
            stateData[i].check=false
        }
    }
  }else{
    for (var i =0; i<stateData.length; i++) {
            stateData[i].check=false
       
    }
    this.listBlock=[]
  }

   this.stateListDist=stateData.filter(arg=>arg.check==true)
   let dist=[]
   for (var i =0; i<this.stateListDist.length; i++) {
        let obj=this.stateListState[i]
        dist=dist.concat(obj.dist)
    }
  this.listDist=dist
}

forDist(dist){
 let distData= this.listDist.slice()
  if (dist.length>0) {
    for (var i =0; i<distData.length; i++) {
       // let obj=this.distListState[i]
        if (dist.indexOf(distData[i].name)!=-1) {
           distData[i].check=true
        }else{
            distData[i].check=false
        }
    }
  }else{
    for (var i =0; i<distData.length; i++) {
            distData[i].check=false
       
    }
    this.listBlock=[]
  }

   this.stateListBlock=distData.filter(arg=>arg.check==true)
   let block=[]
   for (var i =0; i<this.stateListBlock.length; i++) {
        let obj=this.stateListBlock[i]
        block=block.concat(obj.block)
    }
  this.listBlock=block
}
getStateStatus(i){
 if (i>0) {
    if (this.stateList[i].stateName!=this.stateList[i-1].stateName) {
     return true
   }else{
     return false
   }
 }else{
    return false
 }
 
}
getDistStatus(i){
 if (i>0) {
    if (this.stateList[i].distName!=this.stateList[i-1].distName) {
     return true
   }else{
     return false
   }
 }else{
    return false
 }
}
getBlockStatus(i){
  if (i>0) {
    if (this.stateList[i].name!=this.stateList[i-1].name) {
     return true
     }else{
       return false
     }
   }else{
      return false
   }
 }

 getClass(i){
   if (i>0) {
    if (this.stateList[i].stateName!=this.stateList[i-1].stateName) {
     return 'li'
     }else if (this.stateList[i].distName!=this.stateList[i-1].distName) {
       return 'sub-li'
     }else if (this.stateList[i].name!=this.stateList[i-1].name) {
       return 'sub-sub-li'
     }
   }
 }
}
