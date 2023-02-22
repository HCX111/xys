var mySwiper = new Swiper('#case5', {
    loop : true,        
    parallax : true,   
    effect : 'fade', 
    autoplay: true, 
    initialSlide :1,
    speed:3000,
     autoplay : {
        delay:1000,
        disableOnInteraction: false,
      },                

     pagination: {
          el: '.swiper-pagination', 
          clickable :true,       
          dynamicBullets: true,   
        },
});