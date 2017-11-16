import { Component, OnInit } from '@angular/core';
import {UserService} from '../../providers/user.service';
import {SectionService} from '../../providers/section.service'
import {StringResource} from '../../models/saredResources'
import { forkJoin } from "rxjs/observable/forkJoin";
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
    stringResource:StringResource=new  StringResource()
  	constructor(private userProvider:UserService,private sectionService:SectionService,) {
  		        this.filterValue={}
              this.filterRequest={}
            
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
    if (lastlogin=='1970-01-01T00:00:00.000Z') {
       return '-'
    }else{

      return lastlogin.split('T')[1].substring(0, 5);
    }
    }
    getDate(lastlogin){
     if (lastlogin=='1970-01-01T00:00:00.000Z') {
           return '-'
        }else{

          return lastlogin.split('T')[0]
        }
    }
    onUnderReview(status){
    	this.waitLoader = true;
         this.userProvider.onEditContentMultipal(status,this.selectedId)
               .subscribe(data => {
                    this.waitLoader = false;
                     if (data.success==true) {
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
                    	this.getList()
                    }
                    
                },error=>{
                     
                    alert(error)
                    this.waitLoader = false;
                }) 

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
    }else{
      this.categories=this.categories.filter(arg=>arg.sectionId != sec._id)
      this.subCategory=this.subCategory.filter(arg=>arg.sectionId != sec._id)
      this.filterSection=this.filterSection.filter(arg=>arg != sec._id)
      this.filterCategory.filter(arg=>arg.sectionId != sec._id)
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg.sectionId != sec._id)
    }
  }
  forCategory(cat){
    console.log(JSON.stringify(cat))
    if (cat.check==true) {
      this.filterCategory.push({_id:cat._id,sectionId:cat.sectionId})
      this.getsubCategory(cat.sectionId,cat._id)
    }else{
      this.filterCategory.filter(arg=>arg._id!=cat._id)
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg.categoryId!=cat._id)
      this.subCategory=this.subCategory.filter(arg=>arg.categoryId!=cat._id)

    }
  }
  forSubCategory(subCat){
    if (subCat.check==true) {
      this.filterSubcategory.push({_id:subCat._id,sectionId:subCat.sectionId,categoryId:subCat.categoryId})
     //this.getCategory(subCat._id)
    }else{
      this.filterSubcategory=this.filterSubcategory.filter(arg=>arg._id!=subCat._id)
    }
  }
  onSelectLang(lang){
    console.log('ang'+JSON.stringify(this.filterLanguageFilterPan))
     // console.log(''+JSON.stringify(this.filterSectionFilterPan))
     //  console.log(''+JSON.stringify(this.filterCategoryFilterPan))
     //   console.log(''+JSON.stringify(this.filterSubcategoryFilterPan))
   if (lang.check==true) {
      this.filterLanguage.push(lang.language)
     //this.getCategory(subCat._id)
    }else{
      this.filterLanguage=this.filterLanguage.filter(arg=>arg!=lang.language)
    }
  }
  forStatus(stat){
     
    if (stat.check==true) {
      // this.filterStatus.push(stat._id)
      if (stat._id=='underReview') {
        this.filterRequest.underReview=true;
      }
      if (stat._id=='Published') {
        this.filterRequest.Published=true;
      }
      if (stat._id=='Rejected') {
        this.filterRequest.Rejected=true;
      }
     //this.getCategory(subCat._id)
    }else{
      if (stat._id=='underReview') {
        delete(this.filterRequest.underReview);
      }
      if (stat._id=='Published') {
        delete(this.filterRequest.Published);
      }
      if (stat._id=='Rejected') {
        delete(this.filterRequest.Rejected);
      }
    }
  }

  


onApplyFilter(){
       this.filterLanguageFilterPan=this.filterLanguage.slice(0);
       this.filterSectionFilterPan=this.filterSection.slice(0);
       this.filterCategoryFilterPan=this.filterCategory.slice(0);
       this.filterSubcategoryFilterPan=this.filterSubcategory.slice(0);
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
          //this.contentList=this.contentList.filter(arg=>arg.language!=lang)
          this.filterLanguageFilterPan=this.filterLanguageFilterPan.filter(arg=>arg!=lang)
        }
        onClearSectionFilter(secId,name){
            alert(name)
            //this.contentList=this.contentList.filter(arg=>arg.sectionId!=secId) 
            this.filterSectionFilterPan=this.filterSectionFilterPan.filter(arg=>arg!=secId)         
        }
        onClearCategoryFilter(catId){
          console.log(JSON.stringify(this.filterCategoryFilterPan))
           //this.contentList=this.contentList.filter(arg=>arg.categoryId!=catId)
            this.filterCategoryFilterPan=this.filterCategoryFilterPan.filter(arg=>arg._id!=catId)
        }
        onClearSubCategoryFilter(subCatId){
            //this.contentList=this.contentList.filter(arg=>arg.subCategorId!=subCatId)
            this.filterSubcategoryFilterPan=this.filterSubcategoryFilterPan.filter(arg=>arg._id!=subCatId)
        }

        onClearunderReviewFilter(underReview){
           this.underReview=false
        }
        onClearPublishedFilter(Published){
           this.Published=false
        }
        onClearRejectedFilter(Rejected){
           this.Rejected=false
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
}
