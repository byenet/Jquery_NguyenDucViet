$(function () {
    // tinh vi tri menu
    var vitrimenu = $('.menutren').offset().top;
    console.log(vitrimenu);

    $(window).scroll(function (event) { 
        var vitribody = $('html').scrollTop();
        console.log(vitribody);

        // code cho menu
        if (vitribody >= vitrimenu) {
            console.log(' bien hinh di');
            $('.menutren').addClass('mabubeo');
        } else{
            $(".menutren").removeClass("mabubeo");
        }
    });
});