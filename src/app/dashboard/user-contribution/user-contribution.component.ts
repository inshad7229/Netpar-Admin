import { Component, OnInit,ViewContainerRef,ViewChild,Inject } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import {UserService} from '../../providers/user.service';
import {SectionService} from '../../providers/section.service'
import {StringResource} from '../../models/saredResources'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { forkJoin } from "rxjs/observable/forkJoin";
import {MediaDialogComponent} from './media-dialog/media-dialog.component'
import 'rxjs/Rx'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-user-contribution',
  templateUrl: './user-contribution.component.html',
  styleUrls: ['./user-contribution.component.scss'],
  providers:[UserService,SectionService]
})
export class UserContributionComponent implements OnInit {
     waitLoader
     userData
     userDataBackup
     afterFilterUserContriData
     userContriData
     userContriDataBackup
     filterValue:any;
    sections=[]
    categories=[]
    subCategory=[]
    sectionsBack
    categoriesBack
    subCategoryBack
    sectionFlag;
    filterSection=[]
    filterCategory=[]
    filterSubcategory=[]
    filterLanguage=[];
    filterLanguageSingle;
    filterStatus=[]
    sortListToHomePage=[];
    sortListToCategoryPage=[];
    editContent=[];
    selectedId=[]
    dataAfterLanguage=[];
    dataAfterSection=[]
    dataAfterCategory=[]
    dataAfterSubCategory=[]
    dataAfterStatus=[]
    status=[
      {
        _id:"underReview",
        value:"Under Review",
        check:false

      },
      {
        _id:"Published",
        value:"Published",
        check:false

      },
      {
        _id:"Rejected",
        value:"Rejected",
        check:false

      }
    ]
    contentBackup:any;
    contentListBackup:any;
    contentAfterState:any;
    filterData:any;
    filterRequest:any;
    selectedSate:any;
    showFilterPan:boolean=false;
    filterLanguageFilterPan:any;
    filterSectionFilterPan:any;
    filterCategoryFilterPan:any;
    filterSubcategoryFilterPan:any;
    underReview
    Published
    Rejected
    limitedFilter
limit
filterApplyStatus:boolean=false
    stringResource:StringResource=new  StringResource()
  	constructor(private userProvider:UserService,private sectionService:SectionService,private dialog: MatDialog,
      vcr: ViewContainerRef,
                      public toastr: ToastsManager
                      ) {
                          this.toastr.setRootViewContainerRef(vcr);
  		        this.filterValue={}
              this.filterRequest={}
              this.limitedFilter={}
                         this.limitedFilter.perPage='25'
                         this.limit=25
            
  	 }

  	ngOnInit() {
		$('.filter-plugin > a').on('click',function(){
			$(this).closest('.filter-plugin').addClass('open');
			console.log($(this));
		});
		$('.close-filter').on('click',function(){
			$(this).closest('.filter-plugin').removeClass('open');
		});
		this.getList()
		//this.getSectionList()

    }

    getList(){
      this.waitLoader = true;
      forkJoin([this.userProvider.getAllContributions(), this.sectionService.onGetSection(),this.userProvider.onGetAllUser()])
      .subscribe(results => {
      // results[0] is our character
      // results[1] is our character ho
            
                    this.waitLoader = false;
                    if (results) {
                    	this.userContriData=results[0].response;
                      this.userContriDataBackup=results[0].response;
                      this.userData=results[2].response;
                      this.userDataBackup=results[2].response;
                      this.sectionsBack=results[1];
                      this.sections=this.sections.concat(this.sectionsBack)
                    }
                    
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                }) 
    }

    onCheckBox(_id){
       if (this.selectedId.indexOf(_id)==-1) {
           this.selectedId.push(_id)
       }else{
         let index=this.selectedId.indexOf(_id)
         console.log(index)
         let a=this.selectedId.splice(index,1)
       }
    }
    getTime(lastlogin){
     if (lastlogin) {
       if (lastlogin=='1970-01-01T00:00:00.000Z') {
           return '-'
        }else{

          return lastlogin.split('T')[1].substring(0, 5);
        }
     }else{
        return '-'
     }
    
    }
    getDate(lastlogin){
     if (lastlogin) {
       if (lastlogin=='1970-01-01T00:00:00.000Z') {
             return '-'
          }else{

            return lastlogin.split('T')[0]
          }
        }
      else{
        return '-'
      }
    }
    onUnderReview(status){
    	this.waitLoader = true;
         this.userProvider.onEditContentMultipal(status,this.selectedId)
               .subscribe(data => {
                    this.waitLoader = false;
                     if (data.success==true) {
                       this.selectedId=[]
                    	this.getList()
                    }
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                }) 
    }
     onPublished(status){
     	this.waitLoader = true;
         this.userProvider.onEditContentMultipal(status,this.selectedId)
               .subscribe(data => {
                    this.waitLoader = false;
                     if (data.success==true) {
                       this.selectedId=[]
                    	this.getList()
                    }
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                }) 

     }
    
    onRejected(status){
    	this.waitLoader = true;
         this.userProvider.onEditContentMultipal(status,this.selectedId)
               .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success==true) {
                      this.selectedId=[]
                    	this.getList()
                    }
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                }) 

    }
   
onDownload(){
      //this.waitLoader = true;
       //  this.userProvider.download()
               // .subscribe(data => {
               //     console.log(data)
               //     this.downloadFile(data)
               //      this.waitLoader = false;
                    
                    
               //  },error=>{
                     
               //     /// alert(error)
               //      this.waitLoader = false;
               //  }) 

    }
downloadFile(data: Response){
  var blob = new Blob([data], { type: 'image/gif' });
  var url= window.URL.createObjectURL(blob);
  window.open(url);
}
  //  getSectionList(){
  //               this.waitLoader = true;
  //               this.sectionService.onGetSection()
  //             .subscribe(data => {
  //                 this.waitLoader = false;
  //                 this.sectionsBack=data;
  //                 this.sections=this.sections.concat(this.sectionsBack)
  //             },error=>{
  //                 this.waitLoader =false;
  //                 alert(error)
  //             })
  // }
  getCategory(secId){
         this.waitLoader = true;
         this.sectionService.onGetCategory(secId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.categoriesBack=data.response;
                    if (data.response.length==0) {
                      this.toastr.info('This section do not have any category')
                      // code...
                    }
                    this.categories=this.categories.concat(this.categoriesBack)
                   // console.log(JSON.stringify(data))
                },error=>{
                    this.waitLoader =false;
                    alert(error)
                }) 
    }
   getsubCategory(secId,catId){
     this.waitLoader = true;
     this.sectionService.onGetSubCategory(secId,catId)
                .subscribe(data => {
                    this.waitLoader = false;
                    this.subCategoryBack=data.response;
                    if (data.response.length==0) {
                      this.toastr.info('This category do not have any subcategory')
                      // code...
                    }
                    this.subCategory=this.subCategory.concat(this.subCategoryBack)
                   // console.log(JSON.stringify(data))
                },error=>{
                     this.waitLoader =false;
                    alert(error)
                }) 
   }

    getUserState(userId){
      let sec =this.userData.filter(arg=>arg._id==userId)
        if (sec.length>0) {
            return sec[0].state;
        }
           //this.userData
    }
    getUserDistrict(userId){
      let sec =this.userData.filter(arg=>arg._id==userId)
        if (sec.length>0) {
            return sec[0].district;
        }

    }
    getUserBlock(userId){
      let sec =this.userData.filter(arg=>arg._id==userId)
        if (sec.length>0) {
            return sec[0].block;
        }

    }
    getUserImage(userId){
      let sec =this.userData.filter(arg=>arg._id==userId)
        if (sec.length>0) {
            return sec[0].userImage;
        }

    }

    getSize(size){
      if (size) {
        let a=size.split(' ')
        let b=parseFloat(a[0])
        console.log(b)
        let c=b.toFixed(2)
        console.log(c)
        return c+' '+a[1]
        // code...
      }

    }
   // openFilter(){
   //   if (this.filterValue.language) {
   //      for (let i=0;i<this.stringResource.language.length;i++) {
   //             if (this.stringResource.language[i].language==this.filterValue.language) {
   //               // code...
   //                 this.stringResource.language[i].check=true
   //             }else{
   //                 this.stringResource.language[i].check=false
   //             }
   //          }
   //   }
   // }
   findSec(id){
     let sec =this.sections.filter(arg=>arg._id==id)
    if (sec.length>0) {
        return sec[0].sectionName;
    }
   }
  findCat(id){
    let cat =this.categories.filter(arg=>arg._id==id)
    if (cat.length>0) {
      return cat[0].categoryName;
    }
  }
  findSubCat(id){
    let sub =this.subCategory.filter(arg=>arg._id==id)
    if (sub.length>0) {
      return sub[0].subCategoryName;
    }
  }
  forSection(sec){

    if (sec.check==true) {
      this.filterSection.push(sec._id)
      this.getCategory(sec._id)
      let data=this.userContriDataBackup.filter(arg=>arg.categoryId==sec._id)
      for(let i=0;i<data.length;i++){
        this.dataAfterSection.push(data[i])
      }
    }else{
      this.categories=this.categories.filter(arg=>arg.sectionId != sec._id)
      this.subCategory=this.subCategory.filter(arg=>arg.sectionId != sec._id)
      this.filterSection=this.filterSection.filter(arg=>arg != sec._id)
      this.filterCategory.filter(arg=>arg.sectionId != sec._id)
      this.dataAfterSection=this.dataAfterSection.filter(arg=>arg.sectionId!=sec._id)
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg.sectionId != sec._id)
    }
  }
  forCategory(cat){
    console.log(JSON.stringify(cat))
    if (cat.check==true) {
      this.filterCategory.push({_id:cat._id,sectionId:cat.sectionId})
      let data=this.userContriDataBackup.filter(arg=>arg.categoryId==cat._id)
      for(let i=0;i<data.length;i++){
        this.dataAfterCategory.push(data[i])
      }
      this.getsubCategory(cat.sectionId,cat._id)
    }else{
      this.filterCategory.filter(arg=>arg._id!=cat._id)
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg.categoryId!=cat._id)
      this.dataAfterCategory=this.dataAfterCategory.filter(arg=>arg.categoryId!=cat._id)
      this.subCategory=this.subCategory.filter(arg=>arg.categoryId!=cat._id)

    }
  }
  forSubCategory(subCat){
    if (subCat.check==true) {
      this.filterSubcategory.push({_id:subCat._id,sectionId:subCat.sectionId,categoryId:subCat.categoryId})
      let data=this.userContriDataBackup.filter(arg=>arg.subCategoryId==subCat._id)
      for(let i=0;i<data.length;i++){
        this.dataAfterSubCategory.push(data[i])
      }
    }else{
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg._id!=subCat._id)
      this.dataAfterSubCategory=this.dataAfterSubCategory.filter(arg=>arg.subCategoryId!=this.findSubCat(subCat._id))
    }
  }
  onSelectLang(lang){
    console.log('ang'+JSON.stringify(this.filterLanguageFilterPan))
     // console.log(''+JSON.stringify(this.filterSectionFilterPan))
     //  console.log(''+JSON.stringify(this.filterCategoryFilterPan))
     //   console.log(''+JSON.stringify(this.filterSubcategoryFilterPan))
   if (lang.check==true) {
      this.filterLanguage.push(lang.language)
      let data=this.userContriDataBackup.filter(arg=>arg.language==lang.language)
      for(let i=0;i<data.length;i++){
        this.dataAfterLanguage.push(data[i])
      }
     //this.getCategory(subCat._id)
    }else{
      this.dataAfterLanguage= this.dataAfterLanguage.filter(arg=>arg.language!=lang.language)
      this.filterLanguage=this.filterLanguage.filter(arg=>arg!=lang.language)
    }
  }
  forStatus(stat){
     
    if (stat.check==true) {
      // this.filterStatus.push(stat._id)
      if (stat._id=='underReview') {

        this.filterRequest.underReview=true;
         let data=this.userContriDataBackup.filter(arg=>arg.status=='Under Review')
        for(let i=0;i<data.length;i++){
          this.dataAfterStatus.push(data[i])
        }
      }
      if (stat._id=='Published') {
        this.filterRequest.Published=true;
        let data=this.userContriDataBackup.filter(arg=>arg.status=='Published')
        for(let i=0;i<data.length;i++){
          this.dataAfterStatus.push(data[i])
        }
      }
      if (stat._id=='Rejected') {
        this.filterRequest.Rejected=true;
        let data=this.userContriDataBackup.filter(arg=>arg.status=='Rejected')
        for(let i=0;i<data.length;i++){
          this.dataAfterStatus.push(data[i])
        }
      }
     //this.getCategory(subCat._id)
    }else{
      if (stat._id=='underReview') {
        delete(this.filterRequest.underReview);
         this.dataAfterStatus=this.dataAfterStatus.filter(arg=>arg.status!='Under Review')
      }
      if (stat._id=='Published') {
        delete(this.filterRequest.Published);
        this.dataAfterStatus=this.dataAfterStatus.filter(arg=>arg.status!='Published')
      }
      if (stat._id=='Rejected') {
        delete(this.filterRequest.Rejected);
        this.dataAfterStatus=this.dataAfterStatus.filter(arg=>arg.status!='Rejected')
      }
    }
  }

  


onApplyFilter(){
       let finalData= this.dataAfterLanguage.concat(this.dataAfterSection,this.dataAfterCategory,this.dataAfterSubCategory,this.dataAfterStatus);
       this.userContriData=this.unique(finalData)
       this.afterFilterUserContriData=this.unique(finalData)
       this.filterLanguageFilterPan=this.filterLanguage.slice(0);
       this.filterSectionFilterPan=this.filterSection.slice(0);
       this.filterCategoryFilterPan=this.filterCategory.slice(0);
       this.filterSubcategoryFilterPan=this.filterSubcategory.slice(0);
       this.filterApplyStatus=true
       if (this.filterRequest.underReview) {
         this.underReview=true;
       }
       if (this.filterRequest.Published) {
         this.Published=true;
       }
       if(this.filterRequest.Rejected) {
         this.Rejected=true;
       }
}
unique(array){
         return array.filter(function(el, index, arr) {
                  return index == arr.indexOf(el);     
              }); 
}
  // onApplyFilter(){
  //       if (this.filterLanguage.length>0 ) {
  //          this.sendData.languages=this.filterRequest.language
  //       }else{
  //          delete(this.sendData.languages)
  //       }

  //       if (this.filterSection.length>0) {
  //         this.sendData.sectionsids=this.filterSection
  //       }else{
  //         delete(this.sendData.sectionsids)
  //       }
  //       if (this.filterCategory.length>0) {
  //       // code...
  //         let category=[]
  //         for(let i=0;i<this.filterCategory.length;i++){
  //         category.push(this.filterCategory[i]._id)
  //         }
  //         this.sendData.categories=category
  //       }else{
  //         delete(this.sendData.categories)
  //       }
  //       if (this.filterSubcategory.length>0 ) {
  //         let subCategory=[]
  //         for(let i=0;i<this.filterSubcategory.length;i++){
  //         subCategory.push(this.filterSubcategory[i]._id)
  //         }
  //         this.sendData.subcategories=subCategory

  //       }else{
  //         delete(this.sendData.subcategories)
  //       }

  //       if(this.filterRequest.underReview){
  //         this.sendData.drafted=true
  //       }else{
  //         delete(this.sendData.drafted)
  //       }
  //       if(this.filterRequest.rejectStatus){
  //         this.sendData.rejected=true

  //       }else{
  //         delete(this.sendData.rejected)
  //       }


  //       if(this.filterRequest.sendForRevisionStatus){
  //         this.sendData.revisioned=true

  //       }else{
  //         delete(this.sendData.revisioned)
  //       }


        
  //       if(this.filterRequest.publishLaterStatus){
  //         this.sendData.scheduled=true

  //       }else{
  //         delete(this.sendData.scheduled)
  //       }
  //       if(this.filterRequest.publishStatus){
  //         this.sendData.published=true
  //       }else{
  //         delete(this.sendData.published)
  //       }
       
  //       if (this.filterRequest.activePriority) {
  //         this.sendData.activePriority=true;
  //       }else{
  //         delete(this.sendData.activePriority)
  //       }
  //       if (this.filterRequest.completed) {
  //         this.sendData.completed=true;
  //       }else{
  //         delete(this.sendData.completed)
  //       }
  //       if (this.filterRequest.future) {
  //         this.sendData.future=true;
  //       }else{
  //         delete(this.sendData.future)
  //       }
  //       this.sendData.sortlistForHomepage=true

        
  //        this.waitLoader =true;
  //             this.contentService.onApplyFilterHome(this.sendData)
  //             .subscribe(data => {
  //                    if (data.success == false) {
  //                          this.waitLoader =false;
  //                           this.toastr.error(data.msg, 'Data Filter Failed. ', {
  //                               toastLife: 3000,
  //                               showCloseButton: true
  //                           });
  //                       }
  //                       else if (data.success == true) {
  //                         this.waitLoader =false;
  //                          this.contentList=data.response;
  //                          this.contentListBackup=data.response.slice(0);
  //                          this.filterLanguageFilterPan=this.filterLanguage.slice(0);
  //                          this.filterSectionFilterPan=this.filterSection.slice(0);
  //                          this.filterCategoryFilterPan=this.filterCategory.slice(0);
  //                          this.filterSubcategoryFilterPan=this.filterSubcategory.slice(0);
  //                           if(this.filterRequest.underReview){
  //                                this.underReview=true; 
  //                           }
  //                           if(this.filterRequest.rejectStatus){
  //                              this.rejectStatus=true;
                              
  //                           }
  //                           if(this.filterRequest.sendForRevisionStatus){
  //                                  this.sendForRevisionStatus=true;
                              
  //                           }
  //                           if(this.filterRequest.publishLaterStatus){
  //                                this.publishLaterStatus=true;
                              
  //                           }
  //                           if(this.filterRequest.publishStatus){
  //                                this.publishStatus=true;
  //                           }


  //                          if (this.filterRequest.activePriority) {
  //                             this.activePriority=true;
  //                           }
  //                           if (this.filterRequest.completed) {
  //                             this.completed=true;
  //                           }
  //                           if (this.filterRequest.future) {
  //                             this.future=true;
  //                           }


  //                       }
  //               },error=>{
  //                   this.waitLoader =false;
  //                   alert(error)
  //             })
  //       }

        onClearLangFilter(lang){
          this.userContriData= this.userContriData.filter(arg=>arg.language!=lang)
          this.filterLanguageFilterPan=this.filterLanguageFilterPan.filter(arg=>arg!=lang)
        }
        onClearSectionFilter(secId,name){
            //alert(name)
            this.userContriData= this.userContriData.filter(arg=>arg.sectionId!=secId) 
            this.filterSectionFilterPan=this.filterSectionFilterPan.filter(arg=>arg!=secId)         
        }
        onClearCategoryFilter(catId){
          console.log(JSON.stringify(this.filterCategoryFilterPan))
           this.userContriData= this.userContriData.filter(arg=>arg.categoryId!=catId)
            this.filterCategoryFilterPan=this.filterCategoryFilterPan.filter(arg=>arg._id!=catId)
        }
        onClearSubCategoryFilter(subCatId){
            this.userContriData= this.userContriData.filter(arg=>arg.subCategorId!=subCatId)
            this.filterSubcategoryFilterPan=this.filterSubcategoryFilterPan.filter(arg=>arg._id!=subCatId)
        }

        onClearunderReviewFilter(underReview){
           this.underReview=false
            this.userContriData=this.userContriData.filter(arg=>arg.status!='Under Review')
        }
        onClearPublishedFilter(Published){
           this.Published=false
            this.userContriData=this.userContriData.filter(arg=>arg.status!='Published')
        }
        onClearRejectedFilter(Rejected){
           this.Rejected=false
            this.userContriData=this.userContriData.filter(arg=>arg.status!='Rejected')
        }
        
  //       onClearDraftFilter(status){
  //           this.contentList=this.contentList.filter(arg=>arg.underReview!=status)
  //           this.underReview=false;
  //    }

        clearAll(){
            this.filterLanguageFilterPan=[]
            this.filterSectionFilterPan=[]
            this.filterCategoryFilterPan=[]
            this.filterSubcategoryFilterPan=[]
            this.filterLanguageSingle=null
            this.selectedSate=null
            this.filterValue.state=null
            this.filterValue.language=null
            this.underReview=false
            this.Published=false
            this.Rejected=false
            this.filterApplyStatus=false
            this.userContriData=this.userContriDataBackup
            for (let i=0;i<this.stringResource.language.length;i++) {
               this.stringResource.language[i].check=false
            }
            for (let i=0;i<this.sections.length;i++) {
               this.sections[i].check=false
            }
            for (let i=0;i<this.categories.length;i++) {
               this.categories[i].check=false
            }
            for (let i=0;i<this.subCategory.length;i++) {
               this.subCategory[i].check=false
            }
             for (let i=0;i<this.status.length;i++) {
               this.status[i].check=false
            }
           
        }
        openMedia(url,type){
          if (type=='image' || type=='audio' || type=='video') {
            
                let dialogRef = this.dialog.open(MediaDialogComponent, {
                  width: '800px',
                  data:{url:url,type:type}
              });
              dialogRef.afterClosed().subscribe(result => {
            
              });
          }else{

             this.userProvider.download(url,type)
          }
          //window.open(url)
        }
            onPerPage(perPage){
      if (perPage=='25') {
           this.limit=25
        // code...
      }else if (perPage=='50') {
        this.limit=50
        // code...
      }else if (perPage=='100') {
        this.limit=100
        // code...
      }else if (perPage=='200') {
        this.limit=100
        // code...
      }else if (perPage=='All') {
        this.limit=this.userContriData.length
        // code...
      }
    }
onRange(range){
  //alert(range)
  if (this.filterApplyStatus) {
     this.userContriData=this.afterFilterUserContriData.filter(arg=>this.getStatus(arg.dateOfCreation,range)==true)
  }else{
    this.userContriData=this.userContriDataBackup.filter(arg=>this.getStatus(arg.dateOfCreation,range)==true) 
  }
}
getStatus(time,range):boolean {
  let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  let firstDate = new Date();
  let secondDate = new Date(time);
  let diffDays = Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay));
  console.log(diffDays)
  switch (range) {
        case '7d':
         console.log('7d')
          if (diffDays<8) {
             return true;
           }else{
             return false;
           } 
        case '15d': 
        if (diffDays<16) {
             return true;
           }else{
             return false;
           } 
        case '1m': 
        if (diffDays<31) {
             return true;
           }else{
             return false;
           }
        case '3m':
        if (diffDays<91) {
             return true;
           }else{
             return false;
           } 
        case '6m': 
        if (diffDays<181) {
             return true;
           }else{
             return false;
           }
        case '1y': 
        if (diffDays<365) {
             return true;
           }else{
             return false;
           }
        case 'all':return true
        default: return false;
      }
 }
}
