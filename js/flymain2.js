$(function () {
    $('.nav-li-inner,.header-logo, .GoTop, .donateNow').click(function () {
        var target = $(this.hash);
        $('html,body').animate({
            scrollTop: target.offset().top - 80
        }, 1000);
        return false;
    });

});

