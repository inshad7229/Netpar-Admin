import { Component, OnInit } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import {TemplateService} from '../../providers/template.service'
import { forkJoin } from "rxjs/observable/forkJoin";
import {SectionService} from '../../providers/section.service'

@Component({
  selector: 'app-section-templates',
  templateUrl: './section-templates.component.html',
  styleUrls: ['./section-templates.component.scss'],
  providers:[TemplateService,SectionService]
})
export class SectionTemplatesComponent implements OnInit {

  	waitLoader:boolean=false
    categortTemplateList
    categoryList
    constructor(private templateService:TemplateService,public toastr: ToastsManager,private sectionService:SectionService) { }

  	ngOnInit() { this.waitLoader = true;
     //this.templateService.onGetTemplate('3')
        forkJoin([this.templateService.onGetTemplate('3'), this.sectionService.onGetSection()])
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
                     this.categoryList=data[1]
                  
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
    // code...
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
  let demo=this.categoryList.filter(arg=>arg.sectionViewFormat==name)
  if (demo.length>0) {
     return demo
    // code...
  }else{
    let a=[{sectionName:'----'}]
    return a
  }
}
	
}
