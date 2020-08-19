
var btn = $('.btn11');

        btn.on('click', function() {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
        });

$(document).ready(function() {
    $('.box').on('click', function() {
        $(this).toggleClass('active');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.btn11').toggleClass('not-active');
        $('.top-nav').toggleClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop:0
        }, 2000);
    });
});





  

// Load more content with jQuery   

$(function () {
    $(".amenities-card").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("amenities-card:hidden").slice(0, 2).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});
 