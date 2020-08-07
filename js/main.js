$(document).ready(function () {

    if ($(window).width() > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        })

        $('header .textos').animate({
            opacity: 1,
            marginTop: -52
        }, 2000)
    }



    $('#btn-index').click(function(){
        
    })
    $('#btn-valores').click(function(){
        $('html, body').animate({
            scrollTop: 750
        }, 1000);
    })
    $('#btn-servicios').click(function(){
        $('html, body').animate({
            scrollTop: 1600
        }, 1000);
    })
    $('#btn-contactanos').click(function(){
        $('html, body').animate({
            scrollTop: 2750
        }, 1000);
    })
    $('#btn-preguntas').click(function(){
        $('html, body').animate({
            scrollTop: 3650
        }, 1500);
    })
});