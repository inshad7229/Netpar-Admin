import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-user-contribution',
  templateUrl: './user-contribution.component.html',
  styleUrls: ['./user-contribution.component.scss']
})
export class UserContributionComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
		$('.filter-plugin > a').on('click',function(){
			$(this).closest('.filter-plugin').addClass('open');
			console.log($(this));
		});
		$('.close-filter').on('click',function(){
			$(this).closest('.filter-plugin').removeClass('open');
		});
    }
   
}
