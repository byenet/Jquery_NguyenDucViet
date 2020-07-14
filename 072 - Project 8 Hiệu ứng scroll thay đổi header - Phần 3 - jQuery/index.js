$(function () {
    $(window).scroll(function () { 
        console.log('ban vua cuon chuot');
        console.log($('html').scrollTop());

        var vitri = $('html').scrollTop();

        if (vitri >= 400) {
            console.log('lon hon roi xu ly giao dien menu di!');
            $('.menutren').addClass('bienhinh');
        }else{
            $(".menutren").removeClass("bienhinh");
        }
    });
});