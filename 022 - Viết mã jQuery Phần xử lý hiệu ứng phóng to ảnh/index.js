$(document).ready(function () {
    // xu ly viec thay doi mau
    $('.tdkhoi').click(function () {
        $(this).toggleClass('xanh');
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
            width: 100,
            height: 100,
            },
        },
    });
});