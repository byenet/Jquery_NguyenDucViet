$(function () {
    $(window).scroll(function () { 
        var vitribody = $('html').scrollTop();
        var vitrigiaodien = $('.giaodien').offset().top;
        vitrigiaodien -= 650;

        if(vitribody >= vitrigiaodien){
            console.log('tada...');
            // doan nay add class vao 
            $('.giaodien').addClass('hienra');
        }
    });
});

