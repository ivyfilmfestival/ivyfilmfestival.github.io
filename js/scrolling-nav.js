//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

$(function() {
    $('#submit-button').hover(function(){
        $(this).css("color","#42744D");
        $(this).css("border-color","#42744D");
    },function(){
        $(this).css("color","#EC5536");
        $(this).css("border-color","#EC5536");
    });
});

/* */

var $logo1 = $('.navbar');
var $home = $('.navbar-home');
var $logo2 = $('.navbar-home img');
$(document).scroll(function() {
    if(window.location.href.endsWith('/') || window.location.href.endsWith('index.html')){
        $home.css({background: $(this).scrollTop() > 150? "#transparent":"#ffffffA6"});
        $logo2.css(scale: 0.8);
    } else{
        $logo1.css({background: $(this).scrollTop() > 150? "#0e3737":"#0e3737"});
    }
    $logo1.css({"-webkit-box-shadow": $(this).scrollTop() > 150? "0px 2px 3px 0px rgba(0,0,0,0.25)":"none"});
    $home.css({"-webkit-box-shadow": $(this).scrollTop() > 150? "0px 2px 3px 0px rgba(0,0,0,0.25)":"none"});
});

var $logo = $('#navbar-index');
$(document).scroll(function() {
    $logo.css({background: $(this).scrollTop() > ($( window ).height() - 80)? "white":"transparent"});
    $logo.css({"-webkit-box-shadow": $(this).scrollTop() > ($( window ).height() - 80)? "0px 2px 3px 0px rgba(0,0,0,0.25)":"none"});
});

// video resizing
$(function() {
    var $hero = $(".intro-section");
    var $video = $(".bg-video");
    var videoRatio = 16/9;
    function resizeBGVideo() {
        var width = $hero.width();
        var height = $hero.height();

        var containerRatio = width/height;

        if (containerRatio < videoRatio) {
            // too narrow
            $video.css("height", height);
            $video.css("top", 0);

            var newWidth = height * videoRatio;
            var wDiff = (newWidth - width) / 2;

            $video.css("width", newWidth);
            $video.css("left", -wDiff);
        } else {
            // too wide
            $video.css("width", width);
            $video.css("left", 0);

            var newHeight = width / videoRatio;
            var hDiff = (newHeight - height) / 2;

            $video.css("height", newHeight);
            $video.css("top", -hDiff);
        }
    }

    resizeBGVideo();
    $(window).resize(resizeBGVideo);
});