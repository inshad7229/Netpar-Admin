import { Component, OnInit } from '@angular/core';
import { config, defaultI18n, defaultOptions } from "./formbuilder/config";
import { FormBuilderCreateor } from "./formbuilder/form-builder";
import I18N from "./formbuilder/mi18n";

declare var jQuery:any;
declare var $ :any;
function initJq() {
  	(function ($) {
    	(<any>$.fn).formBuilder = function (options) {
      		if (!options) {
        		options = {};
      		}
			let elems = this;
			let {i18n, ...opts} = $.extend({}, defaultOptions, options, true);
			(<any>config).opts = opts;
			let i18nOpts = $.extend({}, defaultI18n, i18n, true);
			let instance = {
        		actions: {
					getData: null,
					setData: null,
					save: null,
					showData: null,
					setLang: null,
					addField: null,
					removeField: null,
					clearFields: null
        		},
        		get formData() {
          			return instance.actions.getData('json');
        		},
        		promise: new Promise(function (resolve, reject) {
          			new I18N().init(i18nOpts).then(() => {
            			elems.each(i => {
	              			let formBuilder = new FormBuilderCreateor().getFormBuilder(opts, elems[i]);
	              			$(elems[i]).data('formBuilder', formBuilder);
	              			instance.actions = formBuilder.actions;
            			});
            			delete instance.promise;
            			resolve(instance);
          			}).catch(console.error);
        		})
    		};
      		return instance;
    	};
  	})(jQuery);
}

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})

export class AddContentComponent implements OnInit {
  	demo:any
  	formBuilder: any;
  	constructor() { }

  	ngOnInit() {

		initJq();
		this.formBuilder = (<any>jQuery('.build-wrap')).formBuilder();
		console.log(this.formBuilder);
		$('.selectize').selectize({
		    plugins: ['remove_button'],
		    persist: false,
		    createOnBlur: true,
		    create: true
		});
	}
	imagChange(){
	    $('.file-type').on('change',function(e){
		    var tmppath = URL.createObjectURL(e.target.files[0]);
		    console.log($(this));
		    $(this).closest('.fileinput').find('img').attr('src',tmppath);
		    $(this).closest('.fileinput-noexists').hide();
	    	$(this).closest('.fileinput-new').find('.fileinput-exists').show();
		});
 	}
}
