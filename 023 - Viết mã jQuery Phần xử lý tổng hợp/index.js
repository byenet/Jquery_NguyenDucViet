$(document).ready(function () {
    // xu ly viec thay doi mau
    $('.tdkhoi').click(function () {
        $(this).toggleClass('xanh');

        // khi click vao, cho noi dung hien thi ra 
        $(this).next().slideToggle(800);

        //  su dung ham animate de chuyen noidung len
        $('html, body').animate({scrollTop: $(this).offset().top})
    });

    // code cho phan phong to anh
    $(".vaicaianh a").fancybox({
        prevEffect: "none",
        nextEffect: "none",
        helpers: {
            title: {
            type: "outside",
            },
            thumbs: {
            width: 50,
            height: 50,
            },
        },
    });

    // xu ly co gian noi dung (thu het noi dung len)
    $('.ndkhoi').slideUp();
});