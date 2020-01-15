import '../sass/styles.scss';
import { Map } from './maps';
import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper/js/swiper.esm.js';
import 'swiper/css/swiper.min.css';
const headerBg = document.getElementsByClassName('header-background')[0];
const header = document.getElementsByClassName('header')[0];
const archiSection = document.getElementsByClassName('architecture-section')[0];
const navcontainer = document.getElementsByClassName('nav-container')[0];
const sectionFade = document.querySelectorAll('.section-fade');
const activeHeader =headerBg.offsetHeight;
let triggeredMenu = [];
const closeBtn = document.querySelectorAll('.menu-close-btn');
const select = document.querySelector('.floorplan-type .floorOptions');
const activities = document.querySelector('.nav-list-smScreen');
const activity = document.querySelector('.nav-select .select-wrapper .nav-list .nav-items');
const mapImg = document.querySelector('#map');

document.addEventListener("DOMContentLoaded", function() {
  let mapElement = document.getElementById('map');
  Map.loadGoogleMapsApi().then(function(googleMaps) {
    Map.createMap(googleMaps, mapElement);
  });
});


// Triggers Nav-bar back ground once window Y coordinate exceeds the height of header
function activateHeader() {
  // if(screen.width )
  if(window.pageYOffset >= (activeHeader-150)) {
    // console.log(activeHeader, archiSection.offsetTop);
    header.firstElementChild.classList.add('activate');
  }
  else {
    header.firstElementChild.classList.remove('activate');
  }
};

// Once window crosses elements with class 'sectionFade', fade is activated
function createObserver(){
  for(let i = 0; i < sectionFade.length; i++) {
    let target = sectionFade[i];
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    }
    let observer = new IntersectionObserver(handleIntersect, options)
    observer.observe(target)
  }
}

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('activate')
    }
  })
}

// When scroll is triggered functions are activated
window.addEventListener("scroll", (e) => {
  activateHeader();
  createObserver();
});


// Swiper is initalized
Swiper.use([Navigation, Pagination, Scrollbar]);

var swipers = new Swiper('.swiper-section.one .swiper-container', {
  navigation: {
    nextEl: '.swiper-section.one .swiper-caption .swiper-nav .swiper-button-next',
    prevEl: '.swiper-section.one .swiper-caption .swiper-nav .swiper-button-prev',
  },
});

var swipers = new Swiper('.swiper-section.two .swiper-container', {
  navigation: {
    nextEl: '.swiper-section.two .swiper-caption.two .swiper-nav-2 .swiper-button-next',
    prevEl: '.swiper-section.two .swiper-caption.two .swiper-nav-2 .swiper-button-prev',
  },
});

window.addEventListener('load', function() {
  const caption = document.querySelector('.swiper-caption.one .swiper-caption-wrapper .swiper-caption-container');
  const caption2 = document.querySelector('.swiper-caption.two .swiper-caption-wrapper .swiper-caption-container-2');
  const floorplone = document.querySelector('.floorplanWrapper .floorplanContent');
  const floorplanImg = document.querySelector('.fl-image-wrapper .floorplan-img-container');
  const tabPane = document.querySelector('.location-content .tab-content .tab-pane');
  const active = document.querySelector('.nav-items .activity');
  const paneActive = document.querySelector('.location-content .tab-content .tab-pane.active .swiper-container .swiper-wrapper');


  caption.classList.add('active');
  caption2.classList.add('active');
  active.classList.add('active');
  floorplone.classList.add('active');
  floorplanImg.classList.add('active');
  tabPane.classList.add('active');
  var swiper = new Swiper('.location-section .location-content .tab-content .tab-pane.active .swiper-container', {
    slidesPerView: 1.27,
    spaceBetween: 50,
    centeredSlides: true,
    slideToClickedSlide: true,
    spaceBetween: 30
  });
});

// Upon click, function checks to see if click contains first swiper section,
// Then iterates over elements containing caption using the index of active slide
// Once both index of caption and slide match, the class 'active' is added to caption.
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

// Upon click, function checks to see if click contains second swiper section,
// Then iterates over elements containing caption using the index of active slide
// Once both index of caption and slide match, the class 'active' is added to caption.
document.addEventListener('click', (e) => {
  let arrowDirection = e.target;
  let arrowParentNode = arrowDirection.parentNode.parentElement.parentElement;
  if((arrowDirection.classList.contains('swiper-button-next') || arrowDirection.classList.contains('swiper-button-prev')) && (arrowParentNode.classList.contains('two'))){
    const swiperSlide = document.querySelectorAll('.swiper-wrapper.two .swiper-slide.two');
    const caption = document.querySelectorAll('.swiper-caption.two .swiper-caption-wrapper .swiper-caption-container-2');
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
  const navLayer = document.querySelectorAll('.nav-layer');
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
        navLayer[i].classList.add('active');
        trigger(i, submenu);
      }
    } // Triggers Menu Option
    else if ((i === 2) && (mouseclick === menuSpan1  || mouseclick === menuSpan2 || mouseclick === menuSpan3)) {
      submenu[i].classList.add('active');
      navLayer[i].classList.add('active');
      activemenu = document.querySelector('.nav-submenu-wrap.active');
      trigger(i,submenu);
    }
  };
});

// Iterates over closeBtn and removes active class from dropdown
// Removes dark background layer from window
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', (e) => {
    const navLayer = document.querySelectorAll('.nav-layer');
    let menuActive = document.querySelector('.nav-submenu-wrap.active');
    menuActive.classList.remove('active');
    if( i === 0 || i === 1 || i === 2) {
      navLayer[i].classList.remove('active');
      navLayer[2].classList.remove('active');
      navLayer[4].classList.remove('active');
    }
  })
  
};

// pushes nav-items into triggers array;
function trigger (i , submenu) {
  let activeMenu= submenu[i];
  triggeredMenu.push(activeMenu);
}

// toggles floorplan based on request
select.addEventListener('change', (e) => {
    const floorplanContent = document.querySelectorAll('.floorplanContent');
    const floorplanImg =  document.querySelectorAll('.floorplan-img-container');
    const value = e.target.value;
    for(let j = 0; j < floorplanImg.length; j++) {
      if(value ==='Floor1' || value === 'Floor2') {
        floorplanContent[j].classList.remove('active');
        floorplanImg[j].classList.remove('active');
      }
    }
    for(let i = 0; i < floorplanContent.length; i++) {
      if( value ==='Floor1' && i === 0) {
        floorplanContent[i].classList.add('active');
        floorplanImg[i].classList.add('active');
      }
      else if(value ==='Floor2' && i === 1) {
          floorplanContent[i].classList.add('active');
          floorplanImg[i].classList.add('active');
        }
    }
  });

  activities.addEventListener('change', (e) => {
    const tabPane = document.querySelectorAll('.location-content .tab-content .tab-pane');
    const value = e.target.value
    const options = e.target.options;
    for(let i = 0; i < options.length; i++) {
      if(options[i].textContent === value) {
        tabPane[i].classList.add('active');
        var swiper = new Swiper('.location-section .location-content .tab-content .tab-pane.active .swiper-container', {
          slidesPerView: 1.27,
          spaceBetween: 50,
          centeredSlides: true,
          slideToClickedSlide: true,
          spaceBetween: 30
        });
      }
      else {
        tabPane[i].classList.remove('active');
      }
    }
  })

// Location Toggle
  for (let i = 0; i < activity.children.length; i++) {
    const tabPane = document.querySelectorAll('.location-content .tab-content .tab-pane');
    const entertainment = document.querySelectorAll('.nav-select .select-wrapper .nav-list .nav-items .activity')
    const active = tabPane[i].classList.contains('active');

    activity.children[i].addEventListener('click', (e) => {
      let activityText= activity.children[i].textContent;
      let mouseText = e.target.textContent;
      erase();
      if(activityText == mouseText){
        activity.children[i].classList.add('active');
        tabPane[i].classList.add('active');
        var swiper = new Swiper('.location-section .location-content .tab-content .tab-pane.active .swiper-container', {
          slidesPerView: 1.27,
          spaceBetween: 50,
          centeredSlides: true,
          slideToClickedSlide: true,
          spaceBetween: 30
        });
        Map.changeMap(mouseText);
      }
    })
  }

  function erase () {
    for (let i = 0; i < activity.children.length; i++) {
      const tabPane = document.querySelectorAll('.location-content .tab-content .tab-pane');
      const active = document.querySelectorAll('.nav-items .activity');
      tabPane[i].classList.remove('active');
      active[i].classList.remove('active');
    }
  }

  mapImg.addEventListener('click', (e) => {
    const mouse = e.target.parentElement.title;
    const paneActive = document.querySelector('.location-content .tab-content .tab-pane.active .swiper-container .swiper-wrapper');
    const activeChild = paneActive.children;
    const imgActive = document.querySelectorAll('#map img');
    for (let i = 0; i < imgActive.length; i++) {
      const parentTitle = imgActive[i].parentElement.title;
      if(mouse === parentTitle) {
        for(let j = 0; j < activeChild.length; j++) {
          if(mouse === activeChild[j].id) {
            var swiper = new Swiper('.tab-pane.active .swiper-container', {
              slidesPerView: 1.27,
              spaceBetween: 50,
              centeredSlides: true,
              slideToClickedSlide: true,
              spaceBetween: 30
            });
            swiper.slideTo([j])
          }
        }
      }
    }
  })
