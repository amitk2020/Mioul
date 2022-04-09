$(document).ready(function () {

  // Website menu functionality  
  var menuCancel = $('.slide-menu-header');
  $('.menu').click('on', mennSliderVisible);
  var menuSlider = $('.slide-menu-container');
  function mennSliderVisible() {
    menuSlider.addClass('visible');
    // $("body").addClass('overlay');
  }
  menuCancel.on('click', function () {
    menuSlider.removeClass('visible');
  });
  // Website menu functionality  

  // Slider for services on homepage
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
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
  // Slider for services on homepage

  // Filter on portfolios for homepage
  // Show all
  $('.filter-all').on('click', function () {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.all').removeClass('hide');
  });

  // Show branding
  $('.filter-branding').on('click', function () {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.branding').removeClass('hide');
    $('.design, .development').addClass('hide');
  });

  // Show design
  $('.filter-design').on('click', function () {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.design').removeClass('hide');
    $('.branding, .development').addClass('hide');
  });

  // Show portrait
  $('.filter-development').on('click', function () {
    var $this = $(this);
    $('.filter').removeClass('active');
    $this.addClass('active');
    $('.development').removeClass('hide');
    $('.branding, .design').addClass('hide');
  });


  // Filter on portfolios for homepage

});