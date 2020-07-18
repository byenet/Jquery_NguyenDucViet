$(function () {
    $("body").scrollspy({ target: "#navbar-example2" });

    new WOW().init();

    $("#navbar-example2 ul li a").click(function(event){
        event.preventDefault();
        console.log('da click');
        var vitri = $(this).attr("href");
        console.log(vitri);
        var toado = $(vitri).offset().top; 
        $("html, body").animate({ scrollTop: toado });
        console.log(toado);

    });
});
