var center = document.querySelector('.center');
var lis = center.querySelectorAll('li');
var items = document.querySelectorAll('.item')
for (var i = 0; i < lis.length; i++){
    lis[i].setAttribute('index',i);
    lis[i].onclick = function(){
        for(var i = 0; i < lis.length; i++){
            lis[i].className = '';
    }
        this.className = 'current'
        // 下面显示内容
        var index = this.getAttribute('index');
        console.log(index);
        for(var i = 0; i < items.length; i++){
            items[i].style.display = 'none'
        }
        items[index].style.display='block';
    }
}

var mySwiper = new Swiper('#case8', {
    zomm :true,         
       loop : true,       
       effect : 'flip',  
       slidesPerView :2, 
       centeredSlides: true,
       autoplay: true,  
       initialSlide :0,
       speed:3000,
       autoplay : {
        delay:50000,
        disableOnInteraction: false,
      },              
       // <!-- 分页器 -->
        pagination: {
             el: '.swiper-pagination', 
             clickable :true,        /* 可点击切换 */
             dynamicBullets: false,   /* 动力球样式 */
           },
       // <!-- 导航按钮 上一页下一页 -->
        navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
           },
   });