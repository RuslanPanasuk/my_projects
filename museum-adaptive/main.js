window.onload = function () {


  const slider = tns({
    container: '.welcome-slider-body',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: false,
    // navContainer: '.controls-dots',    
    autoplay: false,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: ".controls-arrows",  
    // responsive: {
    //   640: {
    //     edgePadding: 20,
    //     gutter: 20,
    //     items: 2
    //   },
    //   700: {
    //     gutter: 30
    //   },
    //   900: {
    //     items: 3
    //   }
    // }
  });

  const slider2 = tns({  
    "container": ".video-slider-body",
    "items": 3,
    "nav": false,
    "gutter": 42,
    "swipeAngle": false,
    "speed": 400,
    "controlsContainer": ".video-slider-controls",
  });


// ---------------


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

  // const buyNow = document.querySelector('.buy-now');
  // const ticketsOverlay = document.querySelector('.tickets-overlay');
  // const ticketsForm = document.querySelector('.tickets-form');
  // const closeForm = document.querySelector('.close-form');

  // buyNow.addEventListener('click', function () {
  //   ticketsOverlay.style.left = 0;
  // })


  // closeForm.addEventListener('click', function () {
  //   ticketsOverlay.style.left = '-300%';
  // })
  // window.addEventListener("click", (e) => {
  //   if (e.target == ticketsOverlay)
  //     ticketsOverlay.style.left = '-300%';
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

