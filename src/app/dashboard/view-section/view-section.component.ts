
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatListModule} from '@angular/material';
import { Component, OnInit,ViewContainerRef,ViewChild } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Router } from '@angular/router';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MatProgressBar} from '@angular/material';
import { DialogComponent} from './dialog/dialog.component';
// import {DataTableModule} from "angular2-datatable";


import {AddSectionRequest} from '../../models/section.modal'
import {SectionService} from '../../providers/section.service'
import {AppProvider} from '../../providers/app.provider'
declare var jquery:any;
declare var $ :any;


@Component({
    selector: 'app-view-section',
    templateUrl: './view-section.component.html',
    styleUrls: ['./view-section.component.scss'],
    providers:[SectionService]
})



export class ViewSectionComponent implements OnInit {
    waitLoader: boolean;
    sectiondata = [];
    flag;
    statusData: any;
    sections;
    forFilterData=[]
    filterModel=[];
    filterData:any;
    sectionDatabackup:any
    filterSectionList=[];
    filterCategory=[];
    filterSubCategory=[];
    language=[];
    status=[]
    finalFilterSectionList:any;
    constructor(private dialog: MatDialog,
        private router: Router,
        private fb: FormBuilder,
        vcr: ViewContainerRef,
        public toastr: ToastsManager,
        private http: Http,
        private sectionService: SectionService,
        private appProvider: AppProvider) {}

    ngOnInit() {
        $('.filter-plugin > a').on('click', function () {
            $(this).closest('.filter-plugin').addClass('open');
            console.log($(this));
        });
        $('.close-filter').on('click', function () {
            $(this).closest('.filter-plugin').removeClass('open');
        });
        $('.cusdropdown-toggle').on('click', function () {
           
            $(this).closest('.dropdown').toggleClass('open');
        })
        $(window).on('click', function (e) {
            e.stopPropagation();
            var $trigger = $(".cusdropdown-toggle").closest('.dropdown');
            console.log($trigger);
            if ($trigger !== e.target && !$trigger.has(e.target).length) {
                $('.cusdropdown-toggle').closest('.dropdown').removeClass('open');
            }
        });
        this.getSectionViewData()
        this.getSectionList()
    }
    getSectionViewData() {
        this.waitLoader = true;
        this.sectiondata = []
        this.sectionService.onGetSectionData()
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {
                    this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                } else if (data.success == true) {
                    let local = data.FinalArray;
                    for (let i = 0; i < local.length; i++) {
                        var obj = local[i];
                        console.log(JSON.stringify(obj))
                        if (obj.section_categories.length > 0) {
                            for (let j = 0; j < obj.section_categories.length; j++) {
                                var obj2 = obj.section_categories[j]
                                if (obj2.section_subcategories.length > 0) {
                                    for (let k = 0; k < obj2.section_subcategories.length; k++) {
                                        var obj3 = obj2.section_subcategories[k]
                                        obj3.contributionForm=obj2.contributionForm;
                                        this.sectiondata.push(obj3)
                                        this.forFilterData.push(obj3)
                                    }
                                } else {

                                    this.sectiondata.push(obj2)
                                    this.forFilterData.push(obj2)
                                }

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
    openDiv(e, flag, data) {
        $('.dropdown').removeClass('open');
        this.flag = flag;
        if (this.flag == 'section') {
            let id
            if (data.sectionId) {
                id = data.sectionId
            } else {
                id = data._id
            }
            this.getSectionData(id, e)
        } else if (this.flag == 'category') {
            let id
            if (data.categoryId) {
                id = data.categoryId
            } else {
                id = data._id
            }
            this.getCategoryData(id, e)
        } else if (this.flag == 'subCategory') {
            let id = data._id
            this.getSubCategoryData(id, e)

        }
    }
    openDialog(data): void {
      this.appProvider.current.currentSectionName=data.sectionName;
        let dialogRef = this.dialog.open(DialogComponent, {
            width: '400px',
        });

        dialogRef.afterClosed().subscribe(result => {

        });
    }
    showSectionName(name, index) {
        if (index > 0) {
            if (this.sectiondata[index - 1].sectionName == name) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }

    }
    showCategoryName(name, index) {
        if (index > 0) {
            if (this.sectiondata[index - 1].categoryName == name) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
    showSubcategoryName(name, index) {
        if (index > 0) {
            if (this.sectiondata[index - 1].subCategoryName == name) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
    editSection(data) {
        this.appProvider.current.actionFlag = "editSection"
        if (data.sectionId) {
            this.appProvider.current.currentId = data.sectionId
        } else {
            this.appProvider.current.currentId = data._id
        }
        console.log('section' + JSON.stringify(data))
        this.router.navigate(['/add-section'], {
            skipLocationChange: true
        });
    }
    deleteSection(data) {
        this.waitLoader = true;
        let date=new Date().toISOString();
         data.deleteStatus=true;
        this.sectionService.onDeleteSection(data)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {

                    this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                } else if (data.success == true) {
     
                    $('.dropdown').removeClass('open');
                    this.getSectionViewData()
                    //this.router.navigate(['/view-section'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data))
            }, error => {
                this.waitLoader = false;
                alert(error)
            })
    }
    enableDisableSection(data) {
        this.waitLoader = true;
         let date=new Date().toISOString();
         data.enableDisableDate=date;
        this.sectionService.onEnableDisableSection(data)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {

                    this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                } else if (data.success == true) {
             
                    $('.dropdown').removeClass('open');
                    this.getSectionViewData()
                    //this.router.navigate(['/view-section'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data))
            }, error => {
                this.waitLoader = false;
                alert(error)
            })
    }
    publishUnpublishSection(data) {
        this.waitLoader =true;
        let date=new Date().toISOString();
         data.publishUnbuplishDate=date;
        this.sectionService.onPublishUnpublishSection(data)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {

                    this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                } else if (data.success == true) {
                
                    $('.dropdown').removeClass('open');
                    this.getSectionViewData()
                    //this.router.navigate(['/view-section'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data))
            }, error => {
                this.waitLoader = false;
                alert(error)
            })
    }
    editCategory(data) {
        this.appProvider.current.actionFlag = "editCategory"
        if (data.categoryId) {
            this.appProvider.current.currentId = data.categoryId
        } else {
            this.appProvider.current.currentId = data._id
        }
        console.log('Category' + JSON.stringify(data))
        this.router.navigate(['/add-category'], {
            skipLocationChange: true
        });
    }
    deleteCategory(data) {
        this.waitLoader = true;
         let date=new Date().toISOString();
         data.deleteStatus=true;
        this.sectionService.onDeleteCategory(data)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {

                    this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                } else if (data.success == true) {
           
                    $('.dropdown').removeClass('open');
                    this.getSectionViewData()
                    //this.router.navigate(['/view-section'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data))
            }, error => {
                this.waitLoader = false;
                alert(error)
            })
    }
    enableDisableCategory(data) {
        this.waitLoader = true;
        let date=new Date().toISOString();
         data.enableDisableDate=date;
        this.sectionService.onEnableDisableCategory(data)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {

                    this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                } else if (data.success == true) {
           
                    $('.dropdown').removeClass('open');
                    this.getSectionViewData()
                    //this.router.navigate(['/view-section'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data))
            }, error => {
                this.waitLoader = false;
                alert(error)
            })

    }
    publishUnpublishCategory(data) {
        this.waitLoader = true;
         let date=new Date().toISOString();
         data.publishUnbuplishDate=date;
        this.sectionService.onPublishUnpublishCategory(data)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {

                    this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                } else if (data.success == true) {
   
                    $('.dropdown').removeClass('open');
                    this.getSectionViewData()
                    //this.router.navigate(['/view-section'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data))
            }, error => {
                this.waitLoader = false;
                alert(error)
            })
    }
    editSubCategory(data) {
        this.appProvider.current.actionFlag = "editSubCategory"
        this.appProvider.current.currentId = data._id;
        console.log('SubCategory' + JSON.stringify(data))
        this.router.navigate(['/add-subcategory'], {
            skipLocationChange: true
        });
    }
    deleteSubCategory(data) {
        this.waitLoader = true;
        let date=new Date().toISOString();
         data.deleteStatus=true;
        this.sectionService.onDeleteSubCategory(data)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {

                    this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                } else if (data.success == true) {
                   
                    $('.dropdown').removeClass('open');
                    this.getSectionViewData()
                    //this.router.navigate(['/view-section'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data))
            }, error => {
                this.waitLoader = false;
                alert(error)
            })
    }
    enableDisableSubCategory(data) {
        this.waitLoader = true;
        let date=new Date().toISOString();
         data.enableDisableDate=date;
        this.sectionService.onEnableDisableSubCategory(data)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {

                    this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                } else if (data.success == true) {
              
                    $('.dropdown').removeClass('open');
                    this.getSectionViewData()
                    //this.router.navigate(['/view-section'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data))
            }, error => {
                this.waitLoader = false;
                alert(error)
            })
    }
    publishUnpublishSubCategory(data) {
        this.waitLoader = true;
         let date=new Date().toISOString();
         data.publishUnbuplishDate=date;
        this.sectionService.onPublishUnpublishSubCategory(data)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {

                    this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                } else if (data.success == true) {
              
                    $('.dropdown').removeClass('open');
                    this.getSectionViewData()
                    //this.router.navigate(['/view-section'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data))
            }, error => {
                this.waitLoader = false;
                alert(error)
            })
    }
    getSectionData(id, e) {
        this.waitLoader = true;
        this.sectionService.onGetSingleSectionData(id)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {
                    this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                        toastLife: 3000,
                        showCloseButton: true
                    });
                } else if (data.success == true) {
                    this.statusData = data.response[0];
                    $(e).closest('.dropdown').toggleClass('open');

                }
            }, error => {
                this.waitLoader = false;

            })
    }

    getCategoryData(id, e) {
        this.waitLoader = true;
        this.sectionService.onGetSingleSCategoryData(id)
            .subscribe(data => {
                this.waitLoader = false;
                this.statusData = data.response[0]
                $(e).closest('.dropdown').toggleClass('open');
                console.log(JSON.stringify(data))
            }, error => {
                this.waitLoader = false;
                alert(error)
            })
    }
    getSubCategoryData(id, e) {
        this.waitLoader = true;
        this.sectionService.onGetSingleSubCategoryData(id)
            .subscribe(data => {
                this.waitLoader = false;
                this.statusData = data.response[0]
                $(e).closest('.dropdown').toggleClass('open');
                console.log(JSON.stringify(data))
            }, error => {
                this.waitLoader = false;
                alert(error)
            })

    }
     getSectionList(){
         this.waitLoader = true;
         this.sectionService.onGetSection()
                .subscribe(data => {
                    this.waitLoader = false;
                    this.sections=data.filter(arg=>arg.deleteStatus!=true);
                    this.sectionDatabackup=data.filter(arg=>arg.deleteStatus!=true);
                },error=>{
                    this.waitLoader = false;
                    alert(error)
                })
     }
     applyFilter(data){
      console.log(JSON.stringify(this.filterModel))
      if (this.filterModel.length>0) {
        this.sectiondata=this.filterModel
         this.finalFilterSectionList=this.filterSectionList
      }else{
         this.sectiondata=this.forFilterData;
         this.finalFilterSectionList=[]; 
      }

     }
     onChangefilter(sec){
         if (sec) {
             console.log(JSON.stringify(sec))
            if (sec.check==true) {
              this.filterData=this.forFilterData.filter(f=>f.sectionName==sec.sectionName)

              if (this.filterData.length>0) {
                  for (var i = 0;i<this.filterData.length; i++) {
                        this.filterModel.push(this.filterData[i])

                     }
                  this.filterSectionList.push(sec)
              }
            }
            else {
              console.log('elsef')
             this.filterModel= this.filterModel.filter(f=>f.sectionName!=sec.sectionName)
             this.filterSectionList=this.filterSectionList.filter(f=>f.sectionName!=sec.sectionName)  
            console.log(JSON.stringify(this.filterSectionList))   
            }
         }
     }
     clearAll(){
         this.sectiondata=this.forFilterData
          this.finalFilterSectionList=[];
          this.filterSectionList=[];
          this.filterData=[]
          this.filterModel=[]
         // this.sections=this.sectionDatabackup 
         for (let i = 0; i<this.sections.length; i++) {
              this.sections[i].check=false;
         }
     }
     clearOneFilter(sec){
         if (sec) {
              for (let i = 0; i<this.sections.length; i++) {
                if (this.sections[i].sectionName==sec.sectionName) {
                    this.sections[i].check=false;
                  }
           } 
           this.finalFilterSectionList= this.finalFilterSectionList.filter(f=>f.sectionName!=sec.sectionName)
           this.filterSectionList= this.filterSectionList.filter(f=>f.sectionName!=sec.sectionName)
           console.log('hy'+JSON.stringify(this.finalFilterSectionList))
           if (this.finalFilterSectionList.length>0) {
                this.sectiondata=this.sectiondata.filter(f=>f.sectionName!=sec.sectionName)
                this.filterModel=this.filterModel.filter(f=>f.sectionName!=sec.sectionName)
            }else{
              this.sectiondata=this.forFilterData;
              this.filterSectionList=[]
              this.filterModel=[] 
               this.finalFilterSectionList=[]; 
            }
          
         }
        // for (let i = 0; i<=this.sections.length; i++) {
              
        //     if (this.sections[i].sectionName==sec.sectionName) {
        //         this.sections[i].check=false;
        //       }
        //  }
        
     }
}

