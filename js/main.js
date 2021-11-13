$(document).ready(function(){
    var menuCancel = $('.slide-menu-header');
    $('.menu').click('on', mennSliderVisible);
    var menuSlider = $('.slide-menu-container');
    function mennSliderVisible(){
        menuSlider.addClass('visible');
        // $("body").addClass('overlay');
    }
    menuCancel.on('click',function(){
        menuSlider.removeClass('visible');
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView:1,
        spaceBetween: 20,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          },

      });
});