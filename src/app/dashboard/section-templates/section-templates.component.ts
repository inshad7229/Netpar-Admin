import { Component, OnInit } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import {TemplateService} from '../../providers/template.service'

@Component({
  selector: 'app-section-templates',
  templateUrl: './section-templates.component.html',
  styleUrls: ['./section-templates.component.scss'],
  providers:[TemplateService]
})
export class SectionTemplatesComponent implements OnInit {

  	waitLoader:boolean=false
    categortTemplateList
    constructor(private templateService:TemplateService,public toastr: ToastsManager,) { }

  	ngOnInit() { this.waitLoader = true;
      this.templateService.onGetTemplate('3')
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

  if (templateName=="Section Template One") {
    return 'section-view1.png'
  }else if (templateName=="Section Template Two") {
    return 'section-view2.png'
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
	
	
}
