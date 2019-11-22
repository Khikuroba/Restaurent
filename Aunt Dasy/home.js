var num = 180; //number of pixels before modifying styles
var num2 =500;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num && $(window).scrollTop() < num2) {
        $('.header-main').addClass('middle');
    } else if($(window).scrollTop() > num2 ){
        $('.header-main').removeClass('middle');
        $('.header-main').addClass('fixed');
    } else{
        $('.header-main').removeClass('fixed');
        $('.header-main').removeClass('middle');
    }
});
