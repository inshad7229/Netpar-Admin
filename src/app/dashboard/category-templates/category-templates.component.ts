import { Component, OnInit } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import {TemplateService} from '../../providers/template.service'

@Component({
  selector: 'app-category-templates',
  templateUrl: './category-templates.component.html',
  styleUrls: ['./category-templates.component.scss'],
  providers:[TemplateService]
})
export class CategoryTemplatesComponent implements OnInit {
    waitLoader:boolean=false
    categortTemplateList
  	constructor(private templateService:TemplateService,public toastr: ToastsManager,) { }

  	ngOnInit() {
      this.waitLoader = true;
      this.templateService.onGetTemplate('4')
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
  if (templateName=="Category-view Template One") {
    return 'category-view1.png'
  }else if (templateName=="Category-view Template Two") {
    return 'category-view2.png'
  }else if (templateName=="Category-view Template Three") {
     return 'category-view3.png'
  }else if (templateName=="Category-view Template Four") {
     return 'category-view4.png'
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
