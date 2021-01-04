$(window).scroll(function () {
    if ($(document).scrollTop() > 96) {
        $('.header').addClass('change1');
        $('.main-drop').addClass('change2');

    } else {
        $('.header').removeClass('change1');
        $('.main-drop').removeClass('change2');

    }
});



