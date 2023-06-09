$(function(){

  //메뉴바
  var burger = $('.bar');
  burger.each(function(index){
    var $this = $(this);
  
    $this.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');
    })
  });
  
//아코디언메뉴
$(".bar").on('click', function () {
  $('.sidemenu').toggleClass('on');
});

  var mainSlide = new Swiper("main .slide", {
    spaceBetween: 0,
    loop: true,
    loopAdditionalSlides: 1,
    speed : 5000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
  });


  var newSlide = new Swiper(".new .newslide", {breakpoints: {
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
    speed : 3000,
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });


    var bestSlide = new Swiper(".best .bestslide", {    
      spaceBetween: 0,
      loop: true,
      speed : 1500,
      loopAdditionalSlides: 1,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      });

      var mdSlide = new Swiper(".md .pick", {
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
        },
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        speed :4000,
        autoplay: {
          delay:3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
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
          speed :5000,
          autoplay: {
            delay:3000,
            disableOnInteraction: false,
          },
          loopAdditionalSlides: 1,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          slidesPerGroup: 1,
          });


})