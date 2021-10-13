window.onload = function () {

  if(document.querySelector('.welcome-slider')){
    new Swiper('.welcome-slider',{
      observer: true,
      observeParents: true,
      slidesPerView: '1',
      spaceBetween: 24,
      watchOverflow: true,
      speed: 800,
      loop: true,
      // watchOverflow: true,
      // loopAdditionalSlides: 5,
      // preloadImages: false,
      // parallax: true,
      //Dotts
      pagination: {
        el: '.controls-dots',
        clickable: true,
        bulletClass: 'controls-dots-item',
        bulletElement: 'div',
        bulletActiveClass: 'controls-dots-active',
      },
      //Arrows
      navigation: {
        nextEl: '.controls-next-btn',
        prevEl: '.controls-prev-btn',
      }
      });
  }

  if(document.querySelector('.video-slider')){
    new Swiper('.video-slider',{
      observer: true,
      observeParents: true,
      slidesPerView: '3',
      spaceBetween: 20,
      watchOverflow: true,
      speed: 800,
      loop: true,
      // watchOverflow: true,
      // loopAdditionalSlides: 5,
      // preloadImages: false,
      // parallax: true,
      //Dotts
      pagination: {
        el: '.video-controls-dots',
        clickable: true,
        // bulletClass: 'controls-dots-item',
        // bulletElement: 'div',
        // bulletActiveClass: 'controls-dots-active',
      },
      //Arrows
      navigation: {
        nextEl: '.video-controls-next',
        prevEl: '.video-controls-prev',
      }
      });
  }  

  // const slider2 = tns({  
  //   "container": ".video-slider-body",
  //   "items": 2,
  //   "nav": false,
  //   "gutter": 20,
  //   "swipeAngle": false,
  //   "speed": 400,
  //   "controlsContainer": ".video-slider-controls",
  //   "responsive": {
  //     "768": {
  //       "items": 2,
  //       "gutter": 20,  
  //     },
  //     "1024": {
  //       "items": 3,
  //       "gutter": 42,  
  //     },     
  //   },
  // });

  // const progress_video = document.querySelector('.progress-video');

  // progress_video.addEventListener('input', function () {
  //   const value = this.value;
  //   this.style.background = `linear-gradient(to right, #710707; 0%, #710707; ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
  // })

  // const progress_volume = document.querySelector('.progress-volume');

  // progress_volume.addEventListener('input', function () {
  //   const value = this.value;
  //   this.style.background = `linear-gradient(to right, #710707; 0%, #710707; ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
  // })

  const buyNow = document.querySelector('.tickets-btn');
  const ticketsOverlay = document.querySelector('.shadowed');
  const ticketsForm = document.querySelector('.booking-tickets');
  const closeForm = document.querySelector('.booking-tickets__btn-close');

  buyNow.addEventListener('click', function () {
    ticketsOverlay.style.display = 'block';
    ticketsForm.style.display = 'flex';
  })


  closeForm.addEventListener('click', function () {
    ticketsOverlay.style.display = 'none';
    ticketsForm.style.display = 'none';
  })
  
  // window.addEventListener("click", (e) => {
  //   if (e.target == ticketsOverlay)
  //     ticketsOverlay.style.display = 'none';
  //     ticketsForm.style.display = 'none';
  // });


  const burger = document.querySelector('.humburger-icon');
  const menu = document.querySelector('.side-menu');
  const navClose = document.querySelector('.icon-close');
  const welcomeCard = document.querySelector('.welcome-card');
  const navigator = document.querySelector('.menu-nav');

  burger.addEventListener('click', function () {
    openBurgerMenu();
  })
  navClose.addEventListener('click', function () {
    closeBurgerMenu();
  })
  navigator.addEventListener('click', (e) => {
    if (e.target.localName == 'a' || (e.target.className == 'icon-close')) closeBurgerMenu();
    console.log(e.target);
  })

  function closeBurgerMenu() {
    burger.style.display = 'flex';
    menu.style.display = 'none';
    navClose.style.display = 'none';
    welcomeCard.style.display = 'block';
  }

  function openBurgerMenu() {
    burger.style.display = 'none';
    menu.style.display = 'block';
    navClose.style.display = 'block';
    welcomeCard.style.display = 'none';
  }

}

