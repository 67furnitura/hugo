(function ($) { "use strict";

    $(window).on("load",function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });

    $('.homepage-carousel').owlCarousel({
        items: 1,
        center: true,
        dots: true,
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoHeight:true
    });

    $('.partner-carousel').owlCarousel({
        items: 3,
        center: true,
        dots: true,
        loop:true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        autoHeight:true
    });

    $('#contact-submit').click(function (e) {
        e.preventDefault();
        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        if (name.length == 0) {
            var error = true;
            $('#name').css("border-color", "#D8000C");
        } else {
            $('#name').css("border-color", "#666");
        }
        if (email.length == 0 || email.indexOf('@') == '-1') {
            var error = true;
            $('#email').css("border-color", "#D8000C");
        } else {
            $('#email').css("border-color", "#666");
        }
        if (subject.length == 0) {
            var error = true;
            $('#subject').css("border-color", "#D8000C");
        } else {
            $('#subject').css("border-color", "#666");
        }
        if (message.length == 0) {
            var error = true;
            $('#message').css("border-color", "#D8000C");
        } else {
            $('#message').css("border-color", "#666");
        }

        if (error == false) {
            $('#contact-submit').attr({
                'disabled': 'false',
                'value': 'Отправляем...'
            });
        }

    });

})(jQuery);