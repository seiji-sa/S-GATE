$("#h-menu").on("click", function(){
    $('.navigation').slideToggle(0)
    $('.h-menu').toggleClass('h-menu--open')
});

$('#slide-item').on("click", function(){
    $('.slide-list').slideToggle();
    if($(this).hasClass('close')){
        $(this).removeClass('close');
    }else{
        $(this).addClass('close');
    }
});

$(window).on('load', function(){
    $('.lode-fade').each(function(){
        var element = $(this);
        var fadeInElements = element.find('.fadeIn');

        fadeInElements.each(function (i, e) {
            setTimeout(() => {
                $(e).delay(i * 300).addClass('active');
            }, 500 * i);
        });
    });
});


$(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 2;
    if(bgPosition){
        $('#contact').css('background-position', 'top bottom -'+ bgPosition + 'px');
    }
});


$(function(){
    $(window).on('scroll', function(){
        $('.js-fade').each(function(){
            var pos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > pos - windowHeight + 100){
                $(this).addClass('scroll');
                $('.fadeIn').each(function (i, e) {
                    setTimeout(() => {
                        $(e).delay(i * 300).addClass('active');
                    }, 500 * i);
                });
            }
        });
    });
});
