import '../sass/styles.scss';
import fullpage from 'fullpage.js';
import { Map } from './maps';
import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm.js';
import 'swiper/css/swiper.min.css';
const header = document.getElementsByClassName('header')[0];
const activeHeader =header.offsetHeight;
let triggeredMenu = [];
const closeBtn = document.querySelectorAll('.menu-close-btn');

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

// Triggers Nav-bar background once window Y coordinate exceeds the height of header
function activateHeader() {
  if(window.pageYOffset > activeHeader) {
    header.firstElementChild.classList.add('active');
  }
  else {
    header.firstElementChild.classList.remove('active');
  }
};

window.addEventListener("scroll", () => {
  activateHeader();
});

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
});

// Activates or deactivates navigation items
document.addEventListener('click', (e) => {
  let mouseclick = e.target;
  const navItem = document.querySelectorAll('.nav-item');
  const submenu = document.querySelectorAll('.nav-submenu-wrap');
  const menuSpan1 = document.querySelector('.navigation-item .nav-item .menu-wrap .menuIcon.one');
  const menuSpan2 = document.querySelector('.navigation-item .nav-item .menu-wrap .menuIcon.two');
  const menuSpan3 = document.querySelector('.navigation-item .nav-item .menu-wrap .menuIcon.three');
  let activemenu;
  for(let i = 0; i < navItem.length; i++) {
    if(mouseclick === navItem[i]) {
      // Adds active class to all nav-submenu elements, clears act array
      submenu[i].classList.add('active');
      triggeredMenu = [];
      if((i === 0 || i === 4) && ( triggeredMenu.length === 0)){
        activemenu = document.querySelector('.nav-submenu-wrap.active');
        trigger(i, submenu);
      }
    } // Triggers Menu Option
    else if ((i === 2) && (mouseclick === menuSpan1  || mouseclick === menuSpan2 || mouseclick === menuSpan3)) {
      submenu[i].classList.add('active');
      activemenu = document.querySelector('.nav-submenu-wrap.active');
      trigger(i,submenu);
    }
  };
});

// Iterates over closeBtn and removes active class from dropdown
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', (e) => {
    let menuActive = document.querySelector('.nav-submenu-wrap.active');
    menuActive.classList.remove('active');
  })
};

// pushes nav-items into triggers array;
function trigger (i , submenu) {
  let activeMenu= submenu[i];
  triggeredMenu.push(activeMenu);
}
