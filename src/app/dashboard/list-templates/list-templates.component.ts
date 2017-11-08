import { Component, OnInit } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import {TemplateService} from '../../providers/template.service'

@Component({
  selector: 'app-list-templates',
  templateUrl: './list-templates.component.html',
  styleUrls: ['./list-templates.component.scss'],
  providers:[TemplateService]
})
export class ListTemplatesComponent implements OnInit {

  	waitLoader:boolean=false
    categortTemplateList
    constructor(private templateService:TemplateService,public toastr: ToastsManager,) { }

  	ngOnInit() {
      this.waitLoader = true;
      this.templateService.onGetTemplate('1')
        .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success == false) {                        
                        this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data.success == true) {
                     this.categortTemplateList=data.response;
                  
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
  return timeString.split('T')[1].substring(0, 5);
}
getStartDate(timeString){
    return timeString.split('T')[0]
}
getEndTime(timeString){
  return timeString.split('T')[1].substring(0, 5);
}
getEndDate(timeString){
   return timeString.split('T')[0]
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
