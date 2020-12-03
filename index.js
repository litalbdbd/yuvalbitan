$("#about").click(function() {
    $('html,body').animate({
            scrollTop: $(".about-me").offset().top
        },
        'slow');
});

$("#work").click(function() {
    $('html,body').animate({
            scrollTop: $(".works").offset().top
        },
        'slow');
});

$("#contact,#second-contact").click(function() {
    $('html,body').animate({
            scrollTop: $(".contact-me").offset().top
        },
        'slow');
});






$(".blue").on("click", function() {
    $('.picture').css('background-image', 'url(img/jcole/j.cole-blue.png');
});

$(".red").on("click", function() {
    $('.picture').css('background-image', 'url(img/jcole/j.cole-red.png');
});

$(".green").on("click", function() {
    $('.picture').css('background-image', 'url(img/jcole/j.cole-green.png');
});

$(".brown").on("click", function() {
    $('.picture').css('background-image', 'url(img/jcole/j.cole-brown.png');
});


// $(".up").on("click", function() {
//     $(document).ready(function() {
//         $(window).scrollTop(0);
//     });
// });

$(".up").click(function() {
    $('html,body').animate({
            scrollTop: $(".container").offset().top
        },
        'slow');
});