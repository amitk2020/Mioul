$(document).ready(function(){

    $('.menu').click('on', mennSliderVisible);
    var menuSlider = $('.slide-menu-container');
    function mennSliderVisible(){
        menuSlider.addClass('visible');
        // $("body").addClass('overlay');
    }
  
});