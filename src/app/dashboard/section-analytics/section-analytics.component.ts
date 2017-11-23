import { Component, OnInit } from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import {SectionService} from '../../providers/section.service'
import {ContentService} from '../../providers/content.service'
import {AppProvider} from '../../providers/app.provider'
import { forkJoin } from "rxjs/observable/forkJoin";
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-section-analytics',
  templateUrl: './section-analytics.component.html',
  styleUrls: ['./section-analytics.component.scss'],
  providers:[SectionService,ContentService]
})
export class SectionAnalyticsComponent implements OnInit {
waitLoader
sectiondata
forFilterData=[]
contentData
  constructor(private sectionService: SectionService, private contentService:ContentService) { }

  ngOnInit() {
  		$('.filter-plugin > a').on('click',function(){
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click',function(){
            $(this).closest('.filter-plugin').removeClass('open');
        });
        this.getSectionViewData()
  }

  getSectionViewData() {
        this.waitLoader = true;
        this.sectiondata = []
        forkJoin([this.sectionService.onGetSectionData(),this.contentService.ongetContentList(),this.sectionService.onGetSection()])
            .subscribe(data => {
                this.waitLoader = false;
                if (!data) {
                    // this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                    //     toastLife: 3000,
                    //     showCloseButton: true
                    // });
                } else if (data) {
                    let local = data[0].FinalArray;
                    this.contentData=data[1].response
                    for (let i = 0; i < local.length; i++) {
                        var obj = local[i];
                        console.log(JSON.stringify(obj))
                        if (obj.section_categories.length > 0) {
                             this.sectiondata.push(obj)
                             this.forFilterData.push(obj)
                            for (let j = 0; j < obj.section_categories.length; j++) {
                                var obj2 = obj.section_categories[j]
                                // if (obj2.section_subcategories.length > 0) {
                                //     for (let k = 0; k < obj2.section_subcategories.length; k++) {
                                //         var obj3 = obj2.section_subcategories[k]
                                //         obj3.contributionForm=obj2.contributionForm;
                                //         this.sectiondata.push(obj3)
                                //         this.forFilterData.push(obj3)
                                //     }
                                // } else {

                                    this.sectiondata.push(obj2)
                                    this.forFilterData.push(obj2)
                               /// }

                            }
                        } else {
                            this.sectiondata.push(obj)
                            this.forFilterData.push(obj)

                        }
                    }
                    console.log(JSON.stringify(this.sectiondata))
                }
            }, error => {
               this.waitLoader = false;
            })
    }

}
