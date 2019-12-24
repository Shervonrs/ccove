import '../sass/styles.scss';
import fullpage from 'fullpage.js';
import { Map } from './maps';
import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm.js';
import 'swiper/css/swiper.min.css';


document.addEventListener("DOMContentLoaded", function() {
  let mapElement = document.getElementById('map');
  Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });
});

// var fullPageInstance = new fullpage('#fullpage', {
//     autoScrolling:true,
//     scrollHorizontally: true
// });

// new fullpage('#fullpage', {
// 	//options here
// 	autoScrolling:true,
// 	scrollHorizontally: true
// });

//methods
// fullpage_api.setAllowScrolling(true);

Swiper.use([Navigation, Pagination, Scrollbar]);

var swiper = new Swiper('.architecture-section .swiper-section .swiper-container', {
  navigation: {
    nextEl: '.swiper-section .swiper-caption .swiper-nav .swiper-button-next',
    prevEl: '.swiper-section .swiper-caption .swiper-nav .swiper-button-prev',
  },
});

window.addEventListener('load', function() {
  const caption = document.querySelector('.swiper-caption.one .swiper-caption-wrapper .swiper-caption-container');
  caption.classList.add('active');

});

document.addEventListener('click', (e) => {
  let arrowDirection = e.target;
  let arrowParentNode = arrowDirection.parentNode.parentElement.parentElement;
  if((arrowDirection.classList.contains('swiper-button-next') || arrowDirection.classList.contains('swiper-button-prev')) && (arrowParentNode.classList.contains('one'))){
    const swiperSlide = document.querySelectorAll('.swiper-wrapper.one .swiper-slide');
    const caption = document.querySelectorAll('.swiper-caption.one .swiper-caption-wrapper .swiper-caption-container');
    for (let i = 0; i < swiperSlide.length; i++) {
      const activeSlide = swiperSlide[i].classList.contains("swiper-slide-active");
      if(activeSlide) {
        // add active class
        caption[i].classList.add('active');
      }
      else{
        // remove active class
        caption[i].classList.remove('active');
      }
    };
  }
})
