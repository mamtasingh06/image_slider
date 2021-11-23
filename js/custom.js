$(document).ready(function(){
    x=0;
    //Next slide
    $('.btn-next').click(function(){
        x =(x<=300)?(x+100):0;
        $('figure').css('left', -x+"%");

    });
    //Previous slide
    $('.btn-prev').click(function(){
        x =(x>=100)?(x-100):400;
        $('figure').css('left', -x+"%");

    });
});