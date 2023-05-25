$(function(){

  //메뉴바
  var burger = $('.bar');
  burger.each(function(index){
    var $this = $(this);
  
    $this.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active-1');
    })
  });
  
//아코디언메뉴
$(".bar").on('click', function () {
  $('.sidemenu').toggleClass('on');
});

const slide = new Swiper("main .slide", {
  loop: true,
  speed : 3000,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});


  var mainSlide = new Swiper("main .slide", {
    spaceBetween: 0,
    loop: true,
    speed : 3000,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });


  var newSlide = new Swiper(".new .newslide", {
    breakpoints:{
      1024: {
        slidesPerView: '5',
        spaceBetween: '20'
      },
      768: {
        slidesPerView: '4',
        spaceBetween: '10'
      },
      640: {
        slidesPerView: '3',
        spaceBetween: '10'
      },
      320: {
        slidesPerView: '1',
        spaceBetween: '10'
      },
    },
    loop: true,
    speed : 1000,
    // slidesPerGroup: 1,
    // loopAdditionalSlides: 1,
    // loopFillGroupWithBlank: true, 
    autoplay: {
      delay: 300,
      disableOnInteraction: false,
    },

    });


    var bestSlide = new Swiper(".best .bestslide", {
    
      spaceBetween: 0,
      loop: true,
      speed : 100,
      loopAdditionalSlides: 1,
      slidesPerGroup: 1,
      // loopFillGroupWithBlank: true, 
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      });

      var mdSlide = new Swiper(".md .pick", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        speed : 2000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loopAdditionalSlides: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerGroup: 1,
        // centeredSlides: true,
        // loopFillGroupWithBlank: true, 
        });


        var review = new Swiper(".review .reviewarp", {
          breakpoints: {
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            },
          },
          loop: true,
          speed : 100,
          loopAdditionalSlides: 1,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          slidesPerGroup: 1,
          // centeredSlides: true,
          // loopFillGroupWithBlank: true, 
          });


})