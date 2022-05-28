$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header,.menu,.logo').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});
