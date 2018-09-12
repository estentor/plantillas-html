$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".logo").removeClass("logo-hidden");
    } else {
        $(".logo").addClass("logo-hidden");
    }
});