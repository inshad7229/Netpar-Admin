import { Component, OnInit,ViewContainerRef,ViewChild, Input, Output, EventEmitter,HostListener,ElementRef ,Inject} from '@angular/core';import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import {AppProvider} from '../../../providers/app.provider'
import {TranslationService} from '../../../providers/translation.service'

var CKEDITOR
declare var google:any

@Component({
  selector: 'app-imageResizer',
  templateUrl: './imageResizer.component.html',
  styleUrls: ['./imageResizer.component.scss'],
  providers:[TranslationService]
})
export class ImageResizerComponent implements OnInit {
  date:any;
  showMessage:boolean=false;
  message:any;
  ckeditorContent
  currentString:any;
  sendString:any;
  item


    x: number;
    y: number;
    px: number;
    py: number;
    width: number;
    height: number;
    minArea: number;
    draggingCorner: boolean;
    draggingWindow: boolean;
    resizer: Function;
  constructor(private dialog: MatDialog, 
     private http: Http,
     private translationService:TranslationService,
    public dialogRef: MatDialogRef<ImageResizerComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, public appProvider: AppProvider) { 
      this.item=this.data.item
      this.x = this.item.x
      this.y = this.item.y
      this.px = this.item.px
      this.py = this.item.py
      this.width = this.item.widthImg;
      this.height = this.item.heightImg; 
      this.draggingCorner = this.item.draggingCorner;
      this.draggingWindow = this.item.draggingWindow;
      this.minArea = this.item.minArea
  	  this.date={}
  }
      area() {
      return this.width * this.height;
    }

    onWindowPress(event: MouseEvent) {

      this.draggingWindow = true;
      this.px = event.clientX;
      this.py = event.clientY;
     
   
    }

    onWindowDrag(event: MouseEvent) {
      
       if (!this.draggingWindow) {
          return;
      }
      let offsetX = event.clientX - this.px;
      let offsetY = event.clientY - this.py;

      this.x += offsetX;
      this.y += offsetY;
      this.px = event.clientX;
      this.py = event.clientY;
    
    }

    topLeftResize(offsetX: number, offsetY: number) {
      
      this.x += offsetX;
      this.y += offsetY;
      this.width -= offsetX;
      this.height -= offsetY;
    
    }

    topRightResize(offsetX: number, offsetY: number) {
    
      this.y += offsetY;
      this.width += offsetX;
      this.height -= offsetY;
     
    }

    bottomLeftResize(offsetX: number, offsetY: number) {
   
      this.x += offsetX;
      this.width -= offsetX;
      this.height += offsetY;
    
    }

    bottomRightResize(offsetX: number, offsetY: number) {
    
      this.width += offsetX;
      this.height += offsetY;
    
    }

    onCornerClick(event: MouseEvent, resizer?: Function) {

        console.log('onCornerClick');
        this.draggingCorner = true;
        this.px = event.clientX;
        this.py = event.clientY;
        this.resizer = resizer;
        event.preventDefault();
        event.stopPropagation();
      
     
    }

    @HostListener('document:mousemove', ['$event'])
    onCornerMove(event: MouseEvent) {
    
         console.log('onCornerMove');

      if (!this.draggingCorner) {
          return;
      }
      let offsetX = event.clientX - this.px;
      let offsetY = event.clientY - this.py;

      let lastX = this.x;
      let lastY = this.y;
      let pWidth = this.width;
      let pHeight = this.height;

      this.resizer(offsetX, offsetY);
      if (this.area() < this.minArea) {
          this.x = lastX;
          this.y = lastY;
          this.width = pWidth;
          this.height = pHeight;
      }
      this.px = event.clientX;
      this.py = event.clientY;
      
     
    }

    @HostListener('document:mouseup', ['$event'])
    onCornerRelease(event: MouseEvent) {

        console.log('onCornerRelease');
        this.draggingWindow = false;
        this.draggingCorner = false;
      
     
    }

    /*--end resize*/
  ngOnInit() {
    this.ckeditorContent=this.data.text
  }
  onClosed(){
  this.dialogRef.close()
}
 selectString(state){
   this.currentString=this.currentString.toString()
   let output=this.currentString.replace(this.sendString ,state)
   this.ckeditorContent=output+' '
   this.appProvider.current.suggestedString=[]
  console.log(output)
 }
 save(){
    let a={
        x:this.x,
        y:this.y,
        px:this.px,
        py:this.py,
        width:this.width,
        height:this.height,
        draggingCorner:this.draggingCorner,
        draggingWindow:this.draggingWindow,
        minArea:this.minArea
    }
    this.dialogRef.close(a)
 }
}
