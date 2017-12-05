import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material';
import { forkJoin } from "rxjs/observable/forkJoin";
import {TemplateService} from '../../providers/template.service'
@Component({
  selector: 'app-template-analytics',
  templateUrl: './template-analytics.component.html',
  styleUrls: ['./template-analytics.component.scss'],
  providers:[TemplateService]
})
export class TemplateAnalyticsComponent implements OnInit {
  waitLoader
  categoryResult
  listingResult
  constructor(private templateService:TemplateService) { }
  
  ngOnInit() {
     this.waitLoader = true;
  	 forkJoin([this.templateService.onGetTemplate('4'),this.templateService.onGetTemplate('1')])
        .subscribe(data => {
                    this.waitLoader = false;
                    if (data[0].success == false || data[1].success == false) {                        
                        // this.toastr.error('failed Please try again', 'Error !!. ', {
                        //     toastLife: 3000,
                        //     showCloseButton: true
                        // });
                    }
                    else if (data[0].success == true || data[1].success == true) {
                    	this.categoryResult=data[0].response
                    	this.listingResult=data[1].response
                     // this.categortTemplateList=data[0].response;response
                     // this.categoryList=data[1].filter(arg=>arg.deleteStatus!=true);
                  
                    }                 
                },error=>{
                  this.waitLoader = false;
                })
  }

  getSartDateTime(i,j){
  	if (i && j) {
  		if (this.categoryResult[i].categories.length>0) {
  			let cat=  this.categoryResult[i].categories[j].startTime
  	        return cat.split('T')[0]
  		}
  		else{

  		 return '--'
  	   }
  		
  	}else{
  		return '--'
  	}
   
  } 
  getStartTime(i,j){
    if (i && j) {
    	if (this.categoryResult[i].categories.length>0) {
  		let cat=  this.categoryResult[i].categories[j].startTime
  		return cat.split('T')[1].substring(0, 5);
  	  }else{
  		return '--'
  	  }
  	}else{
  		return '--'
  	}
  } 
  geteEndDateTime(i,j){
    if (i && j) {
      if (j< this.categoryResult[i].categories.length-1) {
       if (this.categoryResult[i].categories.length>j && this.categoryResult[i].categories[j+1].startTime && j< this.categoryResult[i].categories.length-1) {
        // code...
        let cat=  this.categoryResult[i].categories[j+1].startTime
        return cat.split('T')[0]
      }else{
         return '--'  
      }
      }else{
      return '--'
    }
    	
  	}else{
  		return '--'
  	}
  } 
  getEndTime(i,j){
    if (i && j) {
     if (j< this.categoryResult[i].categories.length-1) {
    	if (this.categoryResult[i].categories.length>j && this.categoryResult[i].categories[j+1].startTime && j< this.categoryResult[i].categories.length-1) {
    		// code...
  			let cat=  this.categoryResult[i].categories[j+1].startTime
  			return cat.split('T')[1].substring(0, 5);
    	}else{
    	   return '--'	
    	}
  		}else{
      return '--'
    }
  	}else{
  		return '--'
  	}
  }

  getSartDateTimeList(i,j){
         if (i && j) {
      if (this.listingResult[i].categories.length>0) {
        let cat=  this.listingResult[i].categories[j].startTime
            return cat.split('T')[0]
      }
      else{

       return '--'
       }
      
    }else{
      return '--'
    }
  } 
  getStartTimeList(i,j){
     if (i && j) {
      if (this.listingResult[i].categories.length>0) {
      let cat=  this.listingResult[i].categories[j].startTime
      return cat.split('T')[1].substring(0, 5);
      }else{
      return '--'
      }
    }else{
      return '--'
    }
  } 
  geteEndDateTimeList(i,j){
     if (i && j) {
      if (j< this.listingResult[i].categories.length-1) {
       if (this.listingResult[i].categories.length>j && this.listingResult[i].categories[j+1].startTime && j< this.listingResult[i].categories.length-1) {
        // code...
        let cat=  this.listingResult[i].categories[j+1].startTime
        return cat.split('T')[0]
      }else{
         return '--'  
      }
      }else{
      return '--'
    }
      
    }else{
      return '--'
    }
  } 
  getEndTimeList(i,j){
        if (i && j) {
     if (j< this.listingResult[i].categories.length-1) {
      if (this.listingResult[i].categories.length>j && this.listingResult[i].categories[j+1].startTime && j< this.listingResult[i].categories.length-1) {
        // code...
        let cat=  this.listingResult[i].categories[j+1].startTime
        return cat.split('T')[1].substring(0, 5);
      }else{
         return '--'  
      }
      }else{
      return '--'
    }
    }else{
      return '--'
    }
  } 
cal(totalClick,totalViews){
  if (totalViews >0 && totalClick >0) {
    // code...
    let a=totalViews/totalClick;
    let b=a.toFixed(2)
    return b
  }else {
    0
  }

}
//   getStartDate(timeString){
//   if (timeString) {
//     return timeString.split('T')[0]
    
//   }else{
//     return '----'
//   }
// }
// getEndTime(timeString){
//   if (timeString) {

//   return timeString.split('T')[1].substring(0, 5);
//   }else{
//     return '----'
//   }
// }

}
