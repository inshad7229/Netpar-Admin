import { Component, OnInit,ViewContainerRef,ViewChild } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Router } from '@angular/router';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MdProgressBar} from '@angular/material';
import { NgxCroppieComponent } from 'ngx-croppie';
import { CroppieOptions } from 'croppie';

import {AddSectionRequest} from '../../models/section.modal'
import {SectionService} from '../../providers/section.service'
import {AppProvider} from '../../providers/app.provider'
import {StringResource} from '../../models/saredResources'
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss'],
  providers:[FormControlDirective,SectionService]
})
export class AddSectionComponent implements OnInit {
     @ViewChild('ngxCroppie') ngxCroppie: NgxCroppieComponent;
    addSectionForm: FormGroup;
    widthPx = '300';
    heightPx = '300';
    imageUrl = '';
    currentImageHorigontal: string;
    croppieImageHorigontal: string;
    addSectionModel:AddSectionRequest=new AddSectionRequest();
    stringResource:StringResource=new  StringResource()
    waitLoader: boolean;
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
      ) {   this.addSectionForm = fb.group({
            'sectionName': [null, Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])],
            'categoryView': [null, Validators.compose([Validators.required])],
            'orderNo':[null],
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

   if (this.appProvider.current.actionFlag=='editSection') {
       this.sectionService.onGetSingleSectionData(this.appProvider.current.currentId)
        .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success == false) {                        
                        this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data.success == true) {
                     this.addSectionModel=data.response[0];
                     this.croppieImageThumbnail =data.response[0].thumbnailImage;
                     this.currentImageThumbnail =data.response[0].thumbnailImage 
                     this.croppieImageHorigontal =data.response[0].horigontalImage;
                     this.currentImageHorigontal =data.response[0].horigontalImage;   
                    }                 
                },error=>{
                  
                })
       // code...
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
  onAddSection(){


   //   if(this.app)
   if (this.addSectionModel._id) {
            this.addSectionModel.thumbnailImage=this.currentImageThumbnail;
            this.addSectionModel.horigontalImage=this.currentImageHorigontal;
            this.sectionService.onEditSection(this.addSectionModel)
            .subscribe(data => {
                this.waitLoader = false;
                if (data.success == false) {

                    this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                    toastLife: 3000,
                    showCloseButton: true
                    });
                }
                else if (data.success == true) {
                    this.router.navigate(['/view-section'],{ skipLocationChange: true });
                //this.router.navigate(['/home'],{ skipLocationChange: true });
                }
                console.log(JSON.stringify(data))
            },error=>{
            alert(error)
            }) 
   }else{
          let date=new Date().toISOString()
      console.log(date.split('T')[0])
      console.log(date)
     this.addSectionModel.createdDate=date.split('T')[0];
     this.addSectionModel.thumbnailImage=this.currentImageThumbnail;
     this.addSectionModel.horigontalImage=this.currentImageHorigontal;
     this.addSectionModel.status=true;
     this.addSectionModel.publishStatus=false;
     this.addSectionModel.deleteStatus=false;
     this.addSectionModel.updatedDate='NA';
     this.addSectionModel.enableDisableDate='NA';
     this.addSectionModel.publishUnbuplishDate='NA'
      this.sectionService.onAddSection(this.addSectionModel)
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success == false) {

                        this.toastr.error('Add Section  failed Please try again', 'Error !!. ', {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data.success == true) {
                        this.router.navigate(['/view-section'],{ skipLocationChange: true });
                        //this.router.navigate(['/home'],{ skipLocationChange: true });
                    }
                    console.log(JSON.stringify(data))
                },error=>{
                    alert(error)
                })  
   }

        }
  
}
