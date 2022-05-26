$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header,.menu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});
