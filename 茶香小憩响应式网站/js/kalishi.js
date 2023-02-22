var mySwiper = new Swiper('#case5', {
    loop : true,        //允许从第一张到最后一张，或者从最后一张到第一张  循环属性
    parallax : true,   //视差位移动画
    effect : 'fade',  //轮播效果，fade渐变
    autoplay: true,  //可选选项，自动滑动
    initialSlide :1,//默认显示第二张图片索引从0开始
    speed:3000,//设置过度时间
    /* grabCursor: true,//鼠标样式根据浏览器不同而定 */
     autoplay : {
        delay:1000,
        disableOnInteraction: false,
      },                 /*  设置每隔3000毫秒切换 */
    // <!-- 分页器 -->
     pagination: {
          el: '.swiper-pagination', 
          clickable :true,        /* 可点击切换 */
          dynamicBullets: true,   /* 动力球样式 */
        },
    // <!-- 导航按钮 上一页下一页 -->
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    // <!-- 滚动条 -->
     scrollbar: {
          el: '.swiper-scrollbar',
          hide:true,
        },
      
});