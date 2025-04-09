$(document).ready(function() {
    resizeHeroSection();
});

$(window).resize(function(){
    resizeHeroSection();
});


function resizeHeroSection() {
    const headerHeight = $("header").outerHeight();
    $("section#home-hero").css("min-height", $(window).height() - headerHeight);
}