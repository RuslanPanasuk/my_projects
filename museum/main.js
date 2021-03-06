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
  controlsContainer: ".welcome-slider-controls",  
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
  "gutter": 42,
  "swipeAngle": false,
  "speed": 400,
  "controlsContainer": ".video-slider-controls",
});
