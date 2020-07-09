$(document).ready(function () {
    // viet code cho nut next
    $('.next').click(function(event) {
        var sau = $('.active').next();

        $('.active').addClass('bien-mat-o-ben-trai');

        sau.addClass('di-vao-tu-ben-phai');
    })
});