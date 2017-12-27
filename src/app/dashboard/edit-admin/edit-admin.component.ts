import { Component, OnInit,ViewContainerRef,ViewChild,AfterViewInit } from '@angular/core';
import { ToastsManager , Toast} from 'ng2-toastr';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Router } from '@angular/router';
import { ReactiveFormsModule,FormControlDirective,FormControl ,NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { MatProgressBar} from '@angular/material';
import {Admin} from './edit.model.component'
import {StringResource} from '../../models/saredResources'
import {AdminService} from './edit.service';
import { NgxCroppieComponent } from 'ngx-croppie';
import { CroppieOptions } from 'croppie';
import {AppProvider} from '../../providers/app.provider';
import {SectionService} from '../../providers/section.service'
import {TranslationService} from '../../providers/translation.service'



declare var jquery:any;
declare var $ :any;
declare var imageData:any;
declare var google:any 
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



@Component({
    selector: 'app-edit-admin',
    templateUrl: './edit-admin.component.html',
    styleUrls: ['./edit-admin.component.scss'],
    providers: [FormControlDirective, AdminService,SectionService,TranslationService],


})
export class EditAdminComponent implements AfterViewInit {
    @ViewChild('ngxCroppie') ngxCroppie: NgxCroppieComponent;
    complexForm: FormGroup;
    register: Admin = new Admin();
    stringResource:StringResource=new  StringResource()
    imageData: any;
    newUploadFile: File = null;
    waitLoader: boolean;
    uploadFile
    newUploadFiles
    length
    tempCustomerBase64
    data: any;
    disable: boolean;
    emailConfirmationMsg: boolean;
    localImage: any
    options = [
    //{
    //         name: 'Jobs',
    //         value: 'Jobs',
    //         checked: false
    //     },
    //     {
    //         name: 'Loan',
    //         value: 'Loan',
    //         checked: false
    //     },
    //     {
    //         name: 'News',
    //         value: 'News',
    //         checked: false
    //     }
    ]
    widthPx = '300';
    heightPx = '300';
    imageUrl = '';
    currentImage: string;
    croppieImage: string;
    showsecondary:number=0;
    sections
    currentString:any;
    sendString:any;
    selectedValue:any;
    currentActiveIndex:number;
    outputStringArrayLength:number;
    caretPos
    elementRefrence:any;
    inputStringLength:number
    outputStringLength:number
    currentInputTag:any;
    //s//tringResource:StringResource

    public get imageToDisplay() {
        if (this.currentImage) {
            return this.currentImage;
        }
        if (this.imageUrl) {
            return this.imageUrl;
        }
        return `http://placehold.it/${this.widthPx}x${this.heightPx}`;
    }

    public get croppieOptions(): CroppieOptions {
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
        private adminService: AdminService,
        private http: Http,
        private appProvider: AppProvider,
        private sectionService:SectionService,
        private translationService:TranslationService,

    ) {
        this.complexForm = fb.group({
            'firstName': [null, Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])],
            'lastName': [null, Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])],
            'email': [null, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
            'alternativeEmail': [null, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
            'password': [null, Validators.compose([Validators.required])],
            'contactNo': [null, Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)])],
            'role': [null, Validators.compose([Validators.required])],
            'image': [null],
            "section": [null],
            'administratorManagement': [null],
            'viewEditAdministrator': [null],
            'addAdministrator': [null],
            'templateManagement': [null],
            'sectionTemplate': [null],
            'categoryTemplate': [null],
            'listingView': [null],
            'homepageTemplate': [null],
            'sectionManagement': [null],
            'addSection': [null],
            'addcategory': [null],
            'addSubcategory': [null],
            'viewEditSection': [null],
            'contentManagement': [null],
            'addContentManagement': [null],
            'manageContentItem': [null],
            'commentManagement': [null],
            'userContributionManagement': [null],
            'homepageManagement': [null],
            'userManagement': [null],
            'sectionAnalytics': [null],
            'articleAnalytics': [null],
            'elementAnalytics': [null],
            'templateAnalytics': [null],
            'googleAnalytics': [null],
            'flurryAnalytics': [null],
             'language1':[null],
              'firstName1':[null],
              'lastName1':[null],
              'language2':[null],
              'firstName2':[null],
              'lastName2':[null],
              'language3':[null],
              'firstName3':[null],
              'lastName3':[null],
              'language4':[null],
              'firstName4':[null],
              'lastName4':[null],
              'language5':[null],
              'firstName5':[null],
              'lastName5':[null],
              'language6':[null],
              'firstName6':[null],
              'lastName6':[null],
              'language7':[null],
              'firstName7':[null],
              'lastName7':[null],
              'language8':[null],
              'firstName8':[null],
              'lastName8':[null],
              'language9':[null],
              'firstName9':[null],
              'lastName9':[null],
              'language10':[null],
              'firstName10':[null],
              'lastName10':[null],
              'language11':[null],
              'firstName11':[null],
              'lastName11':[null]
        })
        this.toastr.setRootViewContainerRef(vcr);

        this.localImage = {}
        this.data = {};
    }

    ngAfterViewInit() {
        this.currentImage = this.imageUrl;
        this.croppieImage = this.imageUrl;
        var a;
        $('.file-type').on('change', function (e) {
            $(this).closest('.fileinput-noexists').hide();
            $(this).closest('.fileinput-new').find('.fileinput-exists').show();
        });

        $('.file_remove').on('click', function () {
            $(this).closest('.fileinput-exists').hide();
            $(this).closest('.fileinput').find('.fileinput-noexists').show();
        });
        this.getSectionList()
        if (this.appProvider.current.adminPageFlag == "allEdit") {
            this.register = this.appProvider.current.adminData;
            this.options = this.appProvider.current.adminData.sectionName;
            console.log(JSON.stringify('on get'))
            console.log(JSON.stringify(this.register))
            this.currentImage = this.appProvider.current.adminData.image
            this.register.password = window.atob(this.register.plain)
            let field1='register.language'
            let field2='register.firstName'
            let field3='register.lastName'
            if(this.register.langDetails)
                for (let i = 0; i <this.register.langDetails.length; i++) {
                    let obj=this.register.langDetails[i]
                  if (i==0) {
                    this.register.language1=obj.language
                    this.register.firstName1=obj.firstName
                    this.register.lastName1=obj.firstName
                  }else if (i==1) {
                    this.register.language2=obj.language
                    this.register.firstName2=obj.firstName
                    this.register.lastName2=obj.firstName
                  }else if (i==2) {
                    this.register.language3=obj.language
                    this.register.firstName3=obj.firstName
                    this.register.lastName3=obj.firstName
                  }else if (i==3) {
                    this.register.language4=obj.language
                    this.register.firstName4=obj.firstName
                    this.register.lastName4=obj.firstName
                  }else if (i==5) {
                    this.register.language5=obj.language
                    this.register.firstName5=obj.firstName
                    this.register.lastName5=obj.firstName
                  }else if (i==6) {
                    this.register.language6=obj.language
                    this.register.firstName6=obj.firstName
                    this.register.lastName6=obj.firstName
                  }else if (i==7) {
                    this.register.language8=obj.language
                    this.register.firstName8=obj.firstName
                    this.register.lastName8=obj.firstName
                  }else if (i==9) {
                    this.register.language10=obj.language
                    this.register.firstName10=obj.firstName
                    this.register.lastName10=obj.firstName
                  }else if (i==10) {
                    this.register.language11=obj.language
                    this.register.firstName11=obj.firstName
                    this.register.lastName11=obj.firstName
                  }
                  this.showsecondary=i+1
                }
        }

        // var options = {
        //   sourceLanguage:
        //       google.elements.transliteration.LanguageCode.ENGLISH,
        //   destinationLanguage:
        //       [google.elements.transliteration.LanguageCode.MARATHI],
        //   shortcutKey: 'ctrl+g',
        //   transliterationEnabled: true
        // };
        // var control = new google.elements.transliteration.TransliterationControl(options);
        // control.makeTransliteratable(['firstName','lastname']);
    }
    onRegister() {
        let languageArray=this.getLanguage()
        this.waitLoader = true;
       // console.log(JSON.stringify(this.options))
        this.register.sectionName = this.options
        let img= this.currentImage
        this.register.image = this.currentImage;
        this.register.langDetails=languageArray;
        if (this.appProvider.current.adminPageFlag == "allEdit") {
            this.register.plain = window.btoa(this.register.password);
            this.adminService.onEditAdminProfile(this.register)
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success == false) {

                        this.toastr.error('Admin Updation failed Please try again', 'Admin Updation Failed. ', {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data.success == true) {
                        this.appProvider.current.adminPageFlag = "null"
                        this.router.navigate(['/home'], {
                            skipLocationChange: true
                        });
                   
                    }
                   
                },errr=>{
                    this.waitLoader = false; 
                })
        }
        else {

            this.register.plain = window.btoa(this.register.password);
            this.register.status = true;
            this.register.delstatus = "false"
            this.adminService.onRegister(this.register)
                .subscribe(data => {
                    this.waitLoader = false;
                    if (data.success == false) {

                        this.toastr.error("Admin data can't added ", "Error", {
                            toastLife: 3000,
                            showCloseButton: true
                        });
                    }
                    else if (data.success == true) {
                        this.router.navigate(['/home'],{ skipLocationChange: true });
                    }
                },errr=>{
                    this.waitLoader = false; 
                })
        }
    }
    onPriviliegesChange(flag, status ? ) {

        if (flag == "administrator") {
            this.register.viewEditAdministrator = status;
            this.register.addAdministrator = status;
        }
        else if (flag == "administratorOption") {
            if (this.register.viewEditAdministrator == false && this.register.addAdministrator == false) {
                this.register.administratorManagement = false;
            }
            else {
                this.register.administratorManagement = true;
            }

        }
        else if (flag == "template") {
            this.register.sectionTemplate = status;
            this.register.categoryTemplate = status;
            this.register.listingView = status;
            this.register.homepageTemplate = status;
        }
        else if (flag == "templateOption") {
            if (this.register.sectionTemplate == false && this.register.categoryTemplate == false && this.register.listingView == false && this.register.homepageTemplate == false) {
                this.register.templateManagement = false;
            }
            else {
                this.register.templateManagement = true;
            }

        }
        else if (flag == "section") {
            this.register.addSection = status;
            this.register.addcategory = status;
            this.register.addSubcategory = status;
            this.register.viewEditSection = status;
        }
        else if (flag == "sectionOption") {
            if (this.register.addSection == false && this.register.addcategory == false && this.register.addSubcategory == false && this.register.viewEditSection == false) {
                this.register.sectionManagement = false;
            }
            else {
                this.register.sectionManagement = true;
            }

        }
        else if (flag == "content") {
            this.register.addContentManagement = status;
            this.register.manageContentItem = status;
            this.register.commentManagement = status;
        }
        else if (flag == "contentOption") {
            if (this.register.addContentManagement == false && this.register.manageContentItem == false && this.register.commentManagement == false) {
                this.register.contentManagement = false;
            }
            else {
                this.register.contentManagement = true;
            }

        }
    }


    get selectedOptions() { // right now: ['1','3']
        return this.options
            .filter(opt => opt.checked)
            .map(opt => opt.value)
    }

    ngOnChanges(changes: any) {
        if (this.croppieImage) {
            return;
        }
        if (!changes.imageUrl) {
            return;
        }
        if (!changes.imageUrl.previousValue && changes.imageUrl.currentValue) {
            this.croppieImage = changes.imageUrl.currentValue;
        }
    }

    newImageResultFromCroppie(img: string) {
        this.croppieImage = img;
        console.log(this.croppieImage)
    }

    saveImageFromCroppie() {
        this.currentImage = this.croppieImage;
    }

    cancelCroppieEdit() {
        this.croppieImage = '';
        this.currentImage = ''
    }

    imageUploadEvent(evt: any) {
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
            this.croppieImage = fr.result;
        };
        fr.readAsDataURL(file);
        let files = [].slice.call(evt.target.files);
        this.uploadFile = files;
        this.newUploadFiles = files;
       // input.value = files.map(f => f.name).join(',');
        this.length = files.length;

      //  this.convertToBase64();
    }


        onChange(event: any, input: any) {
        let files = [].slice.call(event.target.files);
        this.uploadFile = files;
        this.newUploadFiles = files;
        input.value = files.map(f => f.name).join(',');
        this.length = files.length;

       // this.convertToBase64();
    }


    convertToBase64() {

        this.tempCustomerBase64 = [];
        for (var i = 0; i < this.length; i++) {
            let formData: FormData = new FormData();
            this.uploadFile = this.newUploadFiles[i];
            formData.append('file', this.uploadFile);
            this.register.image = formData
            let headers = new Headers();

            let options = new RequestOptions({
                headers: headers
            });
            this.http.post('http://52.15.178.19:3002/api/test', this.register.image, options)
                .subscribe(
                    data => {


                        data = data.json().base64String;
                        this.tempCustomerBase64.push(data);
                        setTimeout(() => {

                            //this.patch_information = "Saved"

                        }, 10000);
                    },
                    error => console.log(error))


        }
    }
    addAppend(){
          this.showsecondary=this.showsecondary+1;
      }
      removeAppend(){
        //this.showsecondary=!this.showsecondary    
      }
     getResources1(){
       let b= this.stringResource.language.filter(f=>
              f.language !=this.register.language2
           && f.language !=this.register.language3
           && f.language !=this.register.language4
           && f.language !=this.register.language5
           && f.language !=this.register.language6
           && f.language !=this.register.language7
           && f.language !=this.register.language8
           && f.language !=this.register.language10
           && f.language !=this.register.language11
           )
       return b
    }
    getResources2(){
       let b= this.stringResource.language.filter(f=>
              f.language !=this.register.language1
           && f.language !=this.register.language3
           && f.language !=this.register.language4
           && f.language !=this.register.language5
           && f.language !=this.register.language6
           && f.language !=this.register.language7
           && f.language !=this.register.language8
           && f.language !=this.register.language10
           && f.language !=this.register.language11
           )
       return b
    }
     getResources3(){
       let b= this.stringResource.language.filter(f=>
             f.language !=this.register.language1
           && f.language !=this.register.language2
           && f.language !=this.register.language4
           && f.language !=this.register.language5
           && f.language !=this.register.language6
           && f.language !=this.register.language7
           && f.language !=this.register.language8
           && f.language !=this.register.language10
           && f.language !=this.register.language11
           )
       return b
    }
     getResources4(){
       let b= this.stringResource.language.filter(f=>
             f.language !=this.register.language1
           && f.language !=this.register.language2 
           && f.language !=this.register.language3
           && f.language !=this.register.language5
           && f.language !=this.register.language6
           && f.language !=this.register.language7
           && f.language !=this.register.language8
           && f.language !=this.register.language10
           && f.language !=this.register.language11
           )
       return b
    }
     getResources5(){
       let b= this.stringResource.language.filter(f=>
              f.language !=this.register.language1
           && f.language !=this.register.language2 
           && f.language !=this.register.language3
           && f.language !=this.register.language4
           && f.language !=this.register.language6
           && f.language !=this.register.language7
           && f.language !=this.register.language8
           && f.language !=this.register.language10
           && f.language !=this.register.language11
        )
       return b
    }
     getResources6(){
       let b= this.stringResource.language.filter(f=>
              f.language !=this.register.language1
           && f.language !=this.register.language2 
           && f.language !=this.register.language3
           && f.language !=this.register.language4
           && f.language !=this.register.language5
           && f.language !=this.register.language7
           && f.language !=this.register.language8
           && f.language !=this.register.language10
           && f.language !=this.register.language11

       )
       return b
    }
     getResources7(){
       let b= this.stringResource.language.filter(f=>
              f.language !=this.register.language1
           && f.language !=this.register.language2 
           && f.language !=this.register.language3
           && f.language !=this.register.language4
           && f.language !=this.register.language5
           && f.language !=this.register.language6
           && f.language !=this.register.language8
           && f.language !=this.register.language10
           && f.language !=this.register.language11
       )
       return b
    }
     getResources8(){
       let b= this.stringResource.language.filter(f=>
             f.language !=this.register.language1
           && f.language !=this.register.language2 
           && f.language !=this.register.language3
           && f.language !=this.register.language4
           && f.language !=this.register.language5
           && f.language !=this.register.language6
           && f.language !=this.register.language7
           && f.language !=this.register.language10
           && f.language !=this.register.language11
       )
       return b
    }
     getResources9(){
       let b= this.stringResource.language.filter(f=>
           f.language !=this.register.language1
           && f.language !=this.register.language2 
           && f.language !=this.register.language3
           && f.language !=this.register.language4
           && f.language !=this.register.language5
           && f.language !=this.register.language6
           && f.language !=this.register.language7
           && f.language !=this.register.language8
           && f.language !=this.register.language10
           && f.language !=this.register.language11
       )
       return b
    }
     getResources10(){
       let b= this.stringResource.language.filter(f=>
           f.language !=this.register.language1
           && f.language !=this.register.language2 
           && f.language !=this.register.language3
           && f.language !=this.register.language4
           && f.language !=this.register.language5
           && f.language !=this.register.language6
           && f.language !=this.register.language7
           && f.language !=this.register.language8
           && f.language !=this.register.language9
           && f.language !=this.register.language11

       )
       return b
    }
     getResources11(){
       let b= this.stringResource.language.filter(f=>
           f.language !=this.register.language1
           && f.language !=this.register.language2 
           && f.language !=this.register.language3
           && f.language !=this.register.language4
           && f.language !=this.register.language5
           && f.language !=this.register.language6
           && f.language !=this.register.language7
           && f.language !=this.register.language8
           && f.language !=this.register.language9
           && f.language !=this.register.language10

       )
       return b
    }
        getLanguage(){
            let d=[];
               if (this.register.language1 ||this.register.firstName1 || this.register.lastName1) {
                    d.push({language:this.register.language1,firstName:this.register.firstName1,lastName:this.register.lastName1})
                 }
                if (this.register.language2 ||this.register.firstName2 || this.register.lastName2) {
 
                    d.push({language:this.register.language2,firstName:this.register.firstName2,lastName:this.register.lastName2})
                }if (this.register.language3 ||this.register.firstName3 || this.register.lastName3) {
 
                      d.push({language:this.register.language3,firstName:this.register.firstName3,lastName:this.register.lastName3})
                }if (this.register.language4 ||this.register.firstName4 || this.register.lastName4) {
 
                       d.push({language:this.register.language4,firstName:this.register.firstName4,lastName:this.register.lastName4})
                }if (this.register.language5 ||this.register.firstName5 || this.register.lastName5) {
 
                        d.push({language:this.register.language5,firstName:this.register.firstName5,lastName:this.register.lastName5})
                }if (this.register.language6 ||this.register.firstName6 || this.register.lastName6) {
 
                         d.push({language:this.register.language6,firstName:this.register.firstName6,lastName:this.register.lastName6})
                }
                if (this.register.language7 ||this.register.firstName7 || this.register.lastName7) {
 
                          d.push({language:this.register.language7,firstName:this.register.firstName7,lastName:this.register.lastName7})
                }
                if (this.register.language8 ||this.register.firstName8 || this.register.lastName8) {
 
                           d.push({language:this.register.language8,firstName:this.register.firstName8,lastName:this.register.lastName8})
                }
                if (this.register.language9 ||this.register.firstName9 || this.register.lastName9) {
                            d.push({language:this.register.language9,firstName:this.register.firstName9,lastName:this.register.lastName9})
 
                }
                if (this.register.language10 ||this.register.firstName10 || this.register.lastName10) {
 
                             d.push({language:this.register.language10,firstName:this.register.firstName10,lastName:this.register.lastName10})
                }if (this.register.language11 ||this.register.firstName11 || this.register.lastName11) {
 
                           d.push({language:this.register.language11,firstName:this.register.firstName11,lastName:this.register.lastName11})
                }
        return d
        }
             getSectionList(){
         this.sectionService.onGetSection()
                .subscribe(data => {
                    console.log('in get section ')
                    console.log(JSON.stringify(this.options))
                    this.waitLoader = false;
                    this.sections=data.filter(arg=>arg.deleteStatus!=true);;
                    for (let  i =0 ; i<this.sections.length; i++) {
                       var obj=this.sections[i]
                       // var obj2=[]
                       //     obj2['_id']=obj._id;
                       //     obj2['name']=obj.sectionName;
                       //     obj2['value']=obj.sectionName;
                       //     obj2['checked']=false;
                        if (this.appProvider.current.adminPageFlag == "allEdit") {
                            console.log('in edit')
                            if (this.options.map(function (img) { return img._id; }).indexOf(obj._id)==-1) {
                                console.log('in efgdit')
                               this.options.push({_id:obj._id,name:obj.sectionName,value:obj.sectionName,checked:false})
                            }
                        }else{

                               this.options.push({_id:obj._id,name:obj.sectionName,value:obj.sectionName,checked:false})
                        }
                     console.log(JSON.stringify(this.options))
                    }
                },error=>{
                    alert(error)
                })
     }
    onselectLang(lang){
         this.appProvider.current.currentLanguage=lang;
    }
 //      onTransliteration(value,tag){
 //   this.currentInputTag=tag
 //   this.currentString=value
 //   let localValue=value.split(' ')
 //   let length=localValue.length
 //   let stringForSend=localValue[length-1]
 //   this.sendString=stringForSend.toString()
 //      console.log(stringForSend)
 //   // if(length>1) {
 //   //    localValue.pop()
 //   //  }
 //   console.log(localValue)
 //   // this.currentString=localValue
 //        this.translationService.onGetSuggetiion(stringForSend)
 //        .subscribe(data => {     
 //            this.appProvider.current.suggestedString=data                    
 //                },error=>{
                  
 //                })
 // }
 // selectString(state){
 //   this.currentString=this.currentString.toString()
 //   let output=this.currentString.replace(this.sendString ,state)
 //   if (this.currentInputTag=='firstName1') {
 //     this.register.firstName1=output
 //   }else if(this.currentInputTag=='lastName1'){
 //     this.register.lastName1=output
 //   }else if (this.currentInputTag=='firstName2') {
 //     this.register.firstName2=output
 //   }else if(this.currentInputTag=='lastName2'){
 //     this.register.lastName2=output
 //   }else if (this.currentInputTag=='firstName3') {
 //     this.register.firstName3=output
 //   }else if(this.currentInputTag=='lastName3'){
 //     this.register.lastName3=output
 //   }else if (this.currentInputTag=='firstName4') {
 //     this.register.firstName4=output
 //   }else if(this.currentInputTag=='lastName4'){
 //     this.register.lastName4=output
 //   }else if (this.currentInputTag=='firstName5') {
 //     this.register.firstName5=output
 //   }else if(this.currentInputTag=='lastName5'){
 //     this.register.lastName5=output
 //   }else if (this.currentInputTag=='firstName6') {
 //     this.register.firstName6=output
 //   }else if(this.currentInputTag=='lastName6'){
 //     this.register.lastName6=output
 //   }else if (this.currentInputTag=='firstName7') {
 //     this.register.firstName7=output
 //   }else if(this.currentInputTag=='lastName7'){
 //     this.register.lastName7=output
 //   }else if (this.currentInputTag=='firstName8') {
 //     this.register.firstName8=output
 //   }else if(this.currentInputTag=='lastName8'){
 //     this.register.lastName8=output
 //   }else if (this.currentInputTag=='firstName9') {
 //     this.register.firstName9=output
 //   }else if(this.currentInputTag=='lastName9'){
 //     this.register.lastName9=output
 //   }else if (this.currentInputTag=='firstName10') {
 //     this.register.firstName10=output
 //   }else if(this.currentInputTag=='lastName10'){
 //     this.register.lastName10=output
 //   }else if (this.currentInputTag=='firstName11') {
 //     this.register.firstName11=output
 //   }else if(this.currentInputTag=='lastName11'){
 //     this.register.lastName11=output
 //   }

 // //  this.addSubCategoryRequest.subCategoryName=output
 //   this.appProvider.current.suggestedString=[]
 //  console.log(output)
 // }

    onTransliteration(value,event,tag){
   var myEl=event.target
    this.currentInputTag=tag
   this.elementRefrence=event
   let post =this.getCaretPos(event)
   this.currentString=value
   let subValue=value.substring(0, post)
   let localValue=subValue.split(' ')
   let length=localValue.length
   let letstring=localValue[length-1]
   let replcedstring=letstring.match(/[a-zA-Z]+/g);
   let stringForSend
   if (replcedstring) {
     stringForSend=replcedstring[0]
   }
   if (!stringForSend) {
   return 
   }
   else if(stringForSend=='') {
       return 
     }
   else if (/^[a-zA-Z]+$/.test(stringForSend)) {
    this.sendString=stringForSend.toString()
    this.translationService.onGetSuggetiion(stringForSend)
        .subscribe(data => {     
            this.appProvider.current.suggestedString=data
            this.outputStringArrayLength=this.appProvider.current.suggestedString.length
            this.currentActiveIndex=-1;
            this.inputStringLength=this.sendString.length
           },error=>{
                  
     })
   }

 }

 selectString(state){
   this.currentString=this.currentString.toString()
   this.outputStringLength=state.length
   let replaceWith=state+' '
   let output=this.currentString.replace(this.sendString ,replaceWith)
   if (this.currentInputTag=='firstName1') {
     this.register.firstName1=output
   }else if(this.currentInputTag=='lastName1'){
     this.register.lastName1=output
   }else if (this.currentInputTag=='firstName2') {
     this.register.firstName2=output
   }else if(this.currentInputTag=='lastName2'){
     this.register.lastName2=output
   }else if (this.currentInputTag=='firstName3') {
     this.register.firstName3=output
   }else if(this.currentInputTag=='lastName3'){
     this.register.lastName3=output
   }else if (this.currentInputTag=='firstName4') {
     this.register.firstName4=output
   }else if(this.currentInputTag=='lastName4'){
     this.register.lastName4=output
   }else if (this.currentInputTag=='firstName5') {
     this.register.firstName5=output
   }else if(this.currentInputTag=='lastName5'){
     this.register.lastName5=output
   }else if (this.currentInputTag=='firstName6') {
     this.register.firstName6=output
   }else if(this.currentInputTag=='lastName6'){
     this.register.lastName6=output
   }else if (this.currentInputTag=='firstName7') {
     this.register.firstName7=output
   }else if(this.currentInputTag=='lastName7'){
     this.register.lastName7=output
   }else if (this.currentInputTag=='firstName8') {
     this.register.firstName8=output
   }else if(this.currentInputTag=='lastName8'){
     this.register.lastName8=output
   }else if (this.currentInputTag=='firstName9') {
     this.register.firstName9=output
   }else if(this.currentInputTag=='lastName9'){
     this.register.lastName9=output
   }else if (this.currentInputTag=='firstName10') {
     this.register.firstName10=output
   }else if(this.currentInputTag=='lastName10'){
     this.register.lastName10=output
   }else if (this.currentInputTag=='firstName11') {
     this.register.firstName11=output
   }else if(this.currentInputTag=='lastName11'){
     this.register.lastName11=output
   }
   //this.addCategoryRequest.categoryName=output
   let sumIndex=(this.caretPos+this.outputStringLength)-this.inputStringLength
   this.appProvider.current.suggestedString=[]
 }
onKeyUp(event){
  console.log(event.keyCode )
  if(event.keyCode==32){
    this.currentString=this.currentString.toString()
    if (this.appProvider.current.suggestedString.length>0) {
        if (this.currentActiveIndex==-1 || this.currentActiveIndex==0) {
         let replaceWith=this.appProvider.current.suggestedString[0]
         let output=this.currentString.replace(this.sendString ,replaceWith)
              if (this.currentInputTag=='firstName1') {
                 this.register.firstName1=output
               }else if(this.currentInputTag=='lastName1'){
                 this.register.lastName1=output
               }else if (this.currentInputTag=='firstName2') {
                 this.register.firstName2=output
               }else if(this.currentInputTag=='lastName2'){
                 this.register.lastName2=output
               }else if (this.currentInputTag=='firstName3') {
                 this.register.firstName3=output
               }else if(this.currentInputTag=='lastName3'){
                 this.register.lastName3=output
               }else if (this.currentInputTag=='firstName4') {
                 this.register.firstName4=output
               }else if(this.currentInputTag=='lastName4'){
                 this.register.lastName4=output
               }else if (this.currentInputTag=='firstName5') {
                 this.register.firstName5=output
               }else if(this.currentInputTag=='lastName5'){
                 this.register.lastName5=output
               }else if (this.currentInputTag=='firstName6') {
                 this.register.firstName6=output
               }else if(this.currentInputTag=='lastName6'){
                 this.register.lastName6=output
               }else if (this.currentInputTag=='firstName7') {
                 this.register.firstName7=output
               }else if(this.currentInputTag=='lastName7'){
                 this.register.lastName7=output
               }else if (this.currentInputTag=='firstName8') {
                 this.register.firstName8=output
               }else if(this.currentInputTag=='lastName8'){
                 this.register.lastName8=output
               }else if (this.currentInputTag=='firstName9') {
                 this.register.firstName9=output
               }else if(this.currentInputTag=='lastName9'){
                 this.register.lastName9=output
               }else if (this.currentInputTag=='firstName10') {
                 this.register.firstName10=output
               }else if(this.currentInputTag=='lastName10'){
                 this.register.lastName10=output
               }else if (this.currentInputTag=='firstName11') {
                 this.register.firstName11=output
               }else if(this.currentInputTag=='lastName11'){
                 this.register.lastName11=output
               }
        //this.addCategoryRequest.categoryName=output
        this.appProvider.current.suggestedString=[]
        }else{
         let replaceWith=this.appProvider.current.suggestedString[this.currentActiveIndex]
         let output=this.currentString.replace(this.sendString ,replaceWith)
          if (this.currentInputTag=='firstName1') {
             this.register.firstName1=output
           }else if(this.currentInputTag=='lastName1'){
             this.register.lastName1=output
           }else if (this.currentInputTag=='firstName2') {
             this.register.firstName2=output
           }else if(this.currentInputTag=='lastName2'){
             this.register.lastName2=output
           }else if (this.currentInputTag=='firstName3') {
             this.register.firstName3=output
           }else if(this.currentInputTag=='lastName3'){
             this.register.lastName3=output
           }else if (this.currentInputTag=='firstName4') {
             this.register.firstName4=output
           }else if(this.currentInputTag=='lastName4'){
             this.register.lastName4=output
           }else if (this.currentInputTag=='firstName5') {
             this.register.firstName5=output
           }else if(this.currentInputTag=='lastName5'){
             this.register.lastName5=output
           }else if (this.currentInputTag=='firstName6') {
             this.register.firstName6=output
           }else if(this.currentInputTag=='lastName6'){
             this.register.lastName6=output
           }else if (this.currentInputTag=='firstName7') {
             this.register.firstName7=output
           }else if(this.currentInputTag=='lastName7'){
             this.register.lastName7=output
           }else if (this.currentInputTag=='firstName8') {
             this.register.firstName8=output
           }else if(this.currentInputTag=='lastName8'){
             this.register.lastName8=output
           }else if (this.currentInputTag=='firstName9') {
             this.register.firstName9=output
           }else if(this.currentInputTag=='lastName9'){
             this.register.lastName9=output
           }else if (this.currentInputTag=='firstName10') {
             this.register.firstName10=output
           }else if(this.currentInputTag=='lastName10'){
             this.register.lastName10=output
           }else if (this.currentInputTag=='firstName11') {
             this.register.firstName11=output
           }else if(this.currentInputTag=='lastName11'){
             this.register.lastName11=output
           }
        //this.addCategoryRequest.categoryName=output
         this.appProvider.current.suggestedString=[]
        }
    }

  }else if (this.selectedValue && event.keyCode==13) {
   this.currentString=this.currentString.toString()
   if (this.outputStringArrayLength>0) {
        let replaceWith=this.selectedValue+' '
        let output=this.currentString.replace(this.sendString ,replaceWith)
        if (this.currentInputTag=='firstName1') {
         this.register.firstName1=output
       }else if(this.currentInputTag=='lastName1'){
         this.register.lastName1=output
       }else if (this.currentInputTag=='firstName2') {
         this.register.firstName2=output
       }else if(this.currentInputTag=='lastName2'){
         this.register.lastName2=output
       }else if (this.currentInputTag=='firstName3') {
         this.register.firstName3=output
       }else if(this.currentInputTag=='lastName3'){
         this.register.lastName3=output
       }else if (this.currentInputTag=='firstName4') {
         this.register.firstName4=output
       }else if(this.currentInputTag=='lastName4'){
         this.register.lastName4=output
       }else if (this.currentInputTag=='firstName5') {
         this.register.firstName5=output
       }else if(this.currentInputTag=='lastName5'){
         this.register.lastName5=output
       }else if (this.currentInputTag=='firstName6') {
         this.register.firstName6=output
       }else if(this.currentInputTag=='lastName6'){
         this.register.lastName6=output
       }else if (this.currentInputTag=='firstName7') {
         this.register.firstName7=output
       }else if(this.currentInputTag=='lastName7'){
         this.register.lastName7=output
       }else if (this.currentInputTag=='firstName8') {
         this.register.firstName8=output
       }else if(this.currentInputTag=='lastName8'){
         this.register.lastName8=output
       }else if (this.currentInputTag=='firstName9') {
         this.register.firstName9=output
       }else if(this.currentInputTag=='lastName9'){
         this.register.lastName9=output
       }else if (this.currentInputTag=='firstName10') {
         this.register.firstName10=output
       }else if(this.currentInputTag=='lastName10'){
         this.register.lastName10=output
       }else if (this.currentInputTag=='firstName11') {
         this.register.firstName11=output
       }else if(this.currentInputTag=='lastName11'){
         this.register.lastName11=output
       }
        //this.addCategoryRequest.categoryName=output
        this.appProvider.current.suggestedString=[]
    }
  }else if (event.keyCode==38) {
     if (this.currentActiveIndex==-1 || this.currentActiveIndex==0) {
       this.currentActiveIndex=this.outputStringArrayLength-1
     }else{
       this.currentActiveIndex=this.currentActiveIndex-1
     }
  }else if (event.keyCode==40) {
     if (this.currentActiveIndex==this.currentActiveIndex-1) {
       this.currentActiveIndex=0
     }else{
       this.currentActiveIndex=this.currentActiveIndex+1
     }
  }

}
onSuugestionkeyup(state){
  this.selectedValue=state
}
getCaretPos(oField) {
    if (oField.selectionStart || oField.selectionStart == '0') {
       this.caretPos = oField.selectionStart;
       return this.caretPos
    }
  }
clearSuggstion(){
  this.appProvider.current.suggestedString=[]
}

setSelectionRangeCustome(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(selectionStart, selectionEnd);
    } else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
  }
  email(){
      if (this.register.alternativeEmail) {
          if (this.register.alternativeEmail==this.register.email) {
          this.emailConfirmationMsg=true
          }else{
             this.emailConfirmationMsg=false
          }
          // code...
      }else{
          this.emailConfirmationMsg=false
      }


  }
confirmEmail(){
    if (this.register.email) {
       // alert('hy')
          if (this.register.alternativeEmail==this.register.email) {
              this.emailConfirmationMsg=true
          }else{
             this.emailConfirmationMsg=false
          }
          // code...
      }else{
          this.emailConfirmationMsg=false
      }
}

}

