import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-templates',
  templateUrl: './category-templates.component.html',
  styleUrls: ['./category-templates.component.scss']
})
export class CategoryTemplatesComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
  	}

	config: SwiperOptions = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    };
}
