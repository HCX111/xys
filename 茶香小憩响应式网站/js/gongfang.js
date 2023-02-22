var mySwiper4 = new Swiper("#case4",{
    loop : true, 
    slidesPerView :2,  
    centeredSlides : true,    
    centeredSlidesBounds: true,  
    slidesOffsetBefore : 100, 
       autoplay: true,
       initialSlide :0,
       speed:2000,
        autoplay : {
           delay:1000,
           disableOnInteraction: false,
         },          
        pagination: {
             el: '.swiper-pagination',
             clickable :true,
           },
        navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
           },
   });