import { Component, OnInit,ViewContainerRef,ViewChild } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Router } from '@angular/router';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MdProgressBar} from '@angular/material';
import { NgxCroppieComponent } from 'ngx-croppie';
import { CroppieOptions } from 'croppie';
import { AddCategoryRequest} from '../../models/section.modal'
import {SectionService} from '../../providers/section.service'
import {StringResource} from '../../models/saredResources'
import {AppProvider} from '../../providers/app.provider'
import {Observable} from "rxjs";
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers:[FormControlDirective,SectionService]
})
export class AddCategoryComponent implements OnInit {
    @ViewChild('ngxCroppie') ngxCroppie: NgxCroppieComponent;
     addCategoryForm: FormGroup;
         widthPx = '300';
    heightPx = '300';
    imageUrl = '';
    currentImageHorigontal: string;
    croppieImageHorigontal: string;
    waitLoader:boolean;
    sections:any;
    addCategoryRequest:AddCategoryRequest=new AddCategoryRequest()
    stringResource:StringResource=new  StringResource()
    public get imageToDisplayHorigontal() {
        if (this.currentImageHorigontal) {
            return this.currentImageHorigontal;
        }
        if (this.imageUrl) {
            return this.imageUrl;
        }
        return `http://placehold.it/${this.widthPx}x${this.heightPx}`;
    }

    public get croppieOptionsHorigontal(): CroppieOptions {
        const opts: CroppieOptions = {};
        opts.viewport = {
            width: parseInt(this.widthPx, 10),
            height: parseInt(this.heightPx, 10)
        };
        opts.boundary = {
            width: parseInt(this.widthPx, 10),
            height: parseInt(this.heightPx, 10)
        };
        opts.enforceBoundary = true;
        return opts;
    }
    currentImageThumbnail: string;
    croppieImageThumbnail: string;

    public get imageToDisplayThumbnail() {
        if (this.currentImageThumbnail) {
            return this.currentImageThumbnail;
        }
        if (this.imageUrl) {
            return this.imageUrl;
        }
        return `http://placehold.it/${this.widthPx}x${this.heightPx}`;
    }

    public get croppieOptionsThumbnail(): CroppieOptions {
        const opts: CroppieOptions = {};
        opts.viewport = {
            width: parseInt(this.widthPx, 10),
            height: parseInt(this.heightPx, 10)
        };
        opts.boundary = {
            width: parseInt(this.widthPx, 10),
            height: parseInt(this.heightPx, 10)
        };
        opts.enforceBoundary = true;
        return opts;
    }
   constructor(
         private router: Router,
        private fb: FormBuilder,
        vcr: ViewContainerRef,
        public toastr: ToastsManager,
        private http: Http,
        private sectionService:SectionService,
        private appProvider: AppProvider
      ) {   

            this.addCategoryForm = fb.group({
                'sectionName': [null, Validators.compose([Validators.required])],
                'categoryName': [null, Validators.compose([Validators.required,Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])],
                'categoryView':[null,Validators.compose([Validators.required])],
                'categoryFormat':[null],
                'subCategoryView':[null,Validators.compose([Validators.required])],
                'listView':[null,Validators.compose([Validators.required])],
                'listViewFormat':[null],
                'contributionForm':[null,Validators.compose([Validators.required])],
                'titleForm':[null],
                'guildTextForForm':[null],
                'guildTextForMedia':[null],
                'userEngBtnLike':[null],
                'userEngBtnShare':[null],
                'userEngBtnComment':[null],
                'userEngBtnSave':[null],
                'userEngBtnDownload':[null],
                'callToActBtnApply':[null],
                'callToActBtnCallMe':[null],
                'callToActBtnInterested':[null],
                'callToActBtnCall':[null],
                'language':[null]
            
        })
        this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
	    $('.file-type').on('change',function(e){
		    // var tmppath = URL.createObjectURL(e.target.files[0]);
		    // console.log($(this));
		    // $(this).closest('.fileinput').find('img').attr('src',tmppath);
		    $(this).closest('.fileinput-noexists').hide();
		    $(this).closest('.fileinput-new').find('.fileinput-exists').show();
		});

		$('.file_remove').on('click',function(){
		    // var a = $(this).closest('.fileinput').find('img').attr('src','./assets/img/placeholder5.png');
		    // console.log(a);
		    $(this).closest('.fileinput-exists').hide();
		    $(this).closest('.fileinput').find('.fileinput-noexists').show();
		});

        if (this.appProvider.current.actionFlag=='editCategory') {
            this.getSectionList()
            this.getCategoryData()
        }else{
           this.getSectionList()     
        }
 
        
       
  	}
  	newImageResultFromCroppieHorigontal(img: string) {
        this.croppieImageHorigontal = img;
        console.log(this.croppieImageHorigontal)
    }

    saveImageFromCroppieHorigontal() {
        this.currentImageHorigontal = this.croppieImageHorigontal;
    }

    cancelCroppieEditHorigontal() {
        this.croppieImageHorigontal = '';
        this.currentImageHorigontal = ''
    }

    imageUploadEventHorigontal(evt: any) {
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        const file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        const fr = new FileReader();
        fr.onloadend = (loadEvent) => {
            this.croppieImageHorigontal = fr.result;
        };
        fr.readAsDataURL(file);
    }
    newImageResultFromCroppieThumbnail(img: string) {
        this.croppieImageThumbnail = img;
        console.log(this.croppieImageThumbnail)
    }

    saveImageFromCroppieThumbnail() {
        this.currentImageThumbnail = this.croppieImageThumbnail;
    }

    cancelCroppieEditThumbnail() {
        this.croppieImageThumbnail = '';
        this.currentImageThumbnail = ''
    }

    imageUploadEventThumbnail(evt: any) {
        if (!evt.target) {
            return;
        }
        if (!evt.target.files) {
            return;
        }
        if (evt.target.files.length !== 1) {
            return;
        }
        const file = evt.target.files[0];
        if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') {
            return;
        }
        const fr = new FileReader();
        fr.onloadend = (loadEvent) => {
            this.croppieImageThumbnail = fr.result;
        };
        fr.readAsDataURL(file);
    }
     onAddCategory(){
      if (this.addCategoryRequest._id) {
                 let localsection=this.sections.filter(arg=>arg._id==this.addCategoryRequest.sectionId)
                 this.addCategoryRequest.sectionName=localsection[0].sectionName;
                 this.addCategoryRequest.thumbnailImage=this.currentImageThumbnail;
                 this.addCategoryRequest.horigontalImage=this.currentImageHorigontal;
                 this.sectionService.onEditCategory(this.addCategoryRequest)
                        .subscribe(data => {
                            this.waitLoader = false;
                            if (data.success == false) {

                                this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                                    toastLife: 3000,
                                    showCloseButton: true
                                });
                            }
                            else if (data.success == true) {
                              
                                 this.router.navigate(['/view-section'],{ skipLocationChange: true });
                            }
                            console.log(JSON.stringify(data))
                        },error=>{
                            alert(error)
                        }) 
   }else{
         let date=new Date().toISOString()
         console.log(date.split('T')[0])
         let localsection=this.sections.filter(arg=>arg._id==this.addCategoryRequest.sectionId)
         this.addCategoryRequest.sectionName=localsection[0].sectionName;
         this.addCategoryRequest.thumbnailImage=this.currentImageThumbnail;
         this.addCategoryRequest.horigontalImage=this.currentImageHorigontal;
         this.sectionService.onAddCategory(this.addCategoryRequest)
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success == false) {

                        this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data.success == true) {
                      
                        this.router.navigate(['/view-section'],{ skipLocationChange: true });
                    }
                    console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
                })
     }
         
        }
  getSectionList(){
         this.sectionService.onGetSection()
                .subscribe(data => {
                    this.waitLoader = false;
                    this.sections=data;
                },error=>{
                    alert(error)
                })
  }
  getCategoryData(){
            this.sectionService.onGetSingleSCategoryData(this.appProvider.current.currentId)
            .subscribe(data =>{
                        this.waitLoader = false;
                        this.addCategoryRequest=data.response[0]
                    console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
                }) 
  }
}
