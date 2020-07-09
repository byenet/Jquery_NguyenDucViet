$(document).ready(function () {
    // viet code cho nut next
    $('.next').click(function(event) {
        var sau = $('.active').next();

        // code cho phan addClass ban dau
        $('.active').addClass('bien-mat-o-ben-trai').one('webkitAnimationEnd', function (event) {
            $(".bien-mat-o-ben-trai").removeClass('bien-mat-o-ben-trai');
        });

        sau.addClass('di-vao-tu-ben-phai').one('webkitAnimationEnd', function (event) {

            // bo active class
            $('.active').removeClass('active');

            // cho slide sau addClass active
            $('.di-vao-tu-ben-phai').addClass('active').removeClass('di-vao-tu-ben-phai')
        });
    })
});