import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
declare var tinymce: any;

@Component({
  selector: 'simple-tiny',
  template: `<textarea id="{{elementId}}"></textarea>`
})
export class SimpleTinyComponent implements AfterViewInit {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;
  

  myCustomOnChangeHandler(inst) {
    alert("Some one modified something");
  }
  ngAfterViewInit() {
    tinymce.init({
      selector: '#'+this.elementId,
      inline: true,
      toolbar: "undo redo | bold italic fontsizeselect | alignleft aligncenter alignright alignjustify | link",
      fontsize_formats: '8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 24pt 36pt',
      skin_url: 'assets/skins/lightgray',
      //inline: true,
      /*onchange_callback : "myCustomOnChangeHandler",*/
      /*setup: function (ed) {
          ed.on("change", function () {
              this.myCustomOnChangeHandler(ed);
          })
      }*/
      setup: editor => {
        this.editor = editor;
        editor.on('change', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
          console.log(content)
        });
         editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
          console.log(content)
        });
         editor.on('blur', () => {
           console.log('onBlur')
          const content = 'onBlur';
          this.onEditorKeyup.emit(content);
          console.log(content)
        });
      },
    });
  }

  // ngOnDestroy() {
  //   tinymce.remove(this.editor);
  // }

  keyupHandlerFunction(){

  }
  	
}
