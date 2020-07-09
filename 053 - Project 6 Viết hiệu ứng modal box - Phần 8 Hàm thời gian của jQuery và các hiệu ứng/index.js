$(document).ready(function () {

    //  Xu ly class cho noi dung
    $('.noidung').addClass('noidunghienra');

    //  xu ly class cho .momo
    $(".momo").addClass("momodira");

    var thongbao = setInterval(function() {
         //  Xu ly class cho noi dung
        $('.noidung').removeClass('noidunghienra');

        //  xu ly class cho .momo
        $(".momo").removeClass("momodira");

        clearInterval(thongbao);
    },3000)

    // Xu ly cho nut click vao
    $('.nut').click(function(event) {
         //  Xu ly class cho noi dung
        $('.noidung').addClass('noidunghienra');

        //  xu ly class cho .momo
        $(".momo").addClass("momodira");

    })

    // jquery cho nut close, va .momo de khi click vao no se close modal
    $('.nutdong, .momo').click(function(event){
        //  Xu ly class cho noi dung
        $('.noidung').removeClass('noidunghienra');

        //  xu ly class cho .momo
        $(".momo").removeClass("momodira");
    })


});
