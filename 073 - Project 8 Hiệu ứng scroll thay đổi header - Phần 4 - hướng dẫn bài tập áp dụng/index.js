$(function () {
    $(window).scroll(function () { 
        console.log('ban vua cuon chuot');
        console.log($('html').scrollTop());

        var vitri = $('html').scrollTop();

        if ((vitri >= 400) && (vitri <= 1600)) {
            console.log('lon hon roi xu ly giao dien menu di!');
            $('.menutren').addClass('bienhinh');
        }else{
            $(".menutren").removeClass("bienhinh");
        } 
        
        if(vitri > 1600){
            $(".menutren").addClass("xayzacap1");
        }else{
            $('.menutren').removeClass("xayzacap1");
        }
    });
});