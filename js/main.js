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

  
});