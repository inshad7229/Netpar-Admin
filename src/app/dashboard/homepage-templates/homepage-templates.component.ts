import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-templates',
  templateUrl: './homepage-templates.component.html',
  styleUrls: ['./homepage-templates.component.scss']
})
export class HomepageTemplatesComponent implements OnInit {

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
