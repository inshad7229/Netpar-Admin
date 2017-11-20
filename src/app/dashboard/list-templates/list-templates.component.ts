import { Component, OnInit } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import {TemplateService} from '../../providers/template.service'
import { forkJoin } from "rxjs/observable/forkJoin";
import {SectionService} from '../../providers/section.service'

@Component({
  selector: 'app-list-templates',
  templateUrl: './list-templates.component.html',
  styleUrls: ['./list-templates.component.scss'],
  providers:[TemplateService,SectionService]
})
export class ListTemplatesComponent implements OnInit {

  	waitLoader:boolean=false
    categortTemplateList
    categoryList
    constructor(private templateService:TemplateService,public toastr: ToastsManager,private sectionService:SectionService) { }

  	ngOnInit() {
      this.waitLoader = true;
      //this.templateService.onGetTemplate('1')
      forkJoin([this.templateService.onGetTemplate('1'), this.sectionService.onGetAllCategory()])
        .subscribe(data => {
                    this.waitLoader = false;
                    if (data[0].success == false || data[1].success == false) {                        
                        this.toastr.error('failed Please try again', 'Error !!. ', {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data[0].success == true || data[1].success == true) {
                     this.categortTemplateList=data[0].response;
                     this.categoryList=data[1].response
                  
                    }                 
                },error=>{
                  this.waitLoader = false;
                })
  	}
getImagePath(templateName){

  if (templateName=="Listing-view Template One") {
    return 'listing-view1.png'
  }else if (templateName=="Listing-view Template Two") {
    return 'listing-view2.png'
  }else if (templateName=="Listing-view Template Three") {
     return 'listing-view3.png'
  }else if (templateName=="Listing-view Template Four") {
     return 'listing-view5.png'
  }else if (templateName=="Listing-view Template Five") {
     return 'listing-view6.png'
  }else if (templateName=="Listing-view Template Six") {
     return 'listing-view7.png'
  }else if (templateName=="Listing-view Template Seven") {
     return 'listing-view8.png'
  }
}
getStartTime(timeString){
  if (timeString) {
     return timeString.split('T')[1].substring(0, 5);
    // code...
  }else{
    return '----'
  }
}
getStartDate(timeString){
  if (timeString) {
    return timeString.split('T')[0]
    
  }else{
    return '----'
  }
}
getEndTime(timeString){
  if (timeString) {

  return timeString.split('T')[1].substring(0, 5);
  }else{
    return '----'
  }
}
getEndDate(timeString){
 if (timeString) {
   return timeString.split('T')[0]
   
 }else{
    return '----'
  }
}

getCategoryName(name){
  let demo=this.categoryList.filter(arg=>arg.listViewFormat==name)
  if (demo.length>0) {
     return demo
    // code...
  }else{
    let a=[{categoryName:'----',sectionName:'----'}]
    return a
  }
}
	config: SwiperOptions = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    };
}
