import { Component, OnInit } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import {TemplateService} from '../../providers/template.service'
import { forkJoin } from "rxjs/observable/forkJoin";
import {SectionService} from '../../providers/section.service'

@Component({
  selector: 'app-category-templates',
  templateUrl: './category-templates.component.html',
  styleUrls: ['./category-templates.component.scss'],
  providers:[TemplateService,SectionService]
})
export class CategoryTemplatesComponent implements OnInit {
    waitLoader:boolean=false
    categortTemplateList
    categoryList
  	constructor(private templateService:TemplateService,
               public toastr: ToastsManager,
               private sectionService:SectionService,
               ) { }

  	ngOnInit() {
      this.waitLoader = true;
      //this.templateService.onGetTemplate('4')
      forkJoin([this.templateService.onGetTemplate('4'), this.sectionService.onGetAllCategory()])
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

getCategoryName(name){
   let demo=this.categoryList.filter(arg=>arg.listViewFormat==name)
  if (demo.length>0) {
     return demo
    // code...
  }else{
    let a=[{categoryName:'----'}]
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
