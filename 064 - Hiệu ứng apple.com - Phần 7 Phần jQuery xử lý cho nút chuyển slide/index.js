$(document).ready(function () {

    // viet code cho nut next
    $('.next').click(function(event) {
        var sau = $('.active').next();

        // check khi den slide cuoi (sau khong con do dai nua (length cua sau la 0))
        console.log(sau.length)
        if(sau.length === 0){
            $('.active').addClass('bien-mat-o-ben-trai').one('webkitAnimationEnd', function (event) {
                $(".bien-mat-o-ben-trai").removeClass('bien-mat-o-ben-trai');
            });

            $('.anhslide ._1slide:nth-child(1)').addClass('di-vao-tu-ben-phai').one('webkitAnimationEnd', function (event) {

                // bo active class
                $('.active').removeClass('active');

                // cho slide sau addClass active
                $('.di-vao-tu-ben-phai').addClass('active').removeClass('di-vao-tu-ben-phai')
            });
        }
        else{
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
        }
    })
    // end nut next 

    // viet code co nut prev
    $('.prev').click(function(event){
        var truoc = $('.active').prev();
        console.log(truoc.length);
        
        if(truoc.length === 1){
            $('.active').addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd', function (event) {
                    $(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai');
                });

            truoc.addClass('di-vao-tu-ben-trai').one('webkitAnimationEnd', function (event) {

                    // bo active class
                    $('.active').removeClass('active');

                    // cho slide sau addClass active
                    $('.di-vao-tu-ben-trai').addClass('active').removeClass('di-vao-tu-ben-trai')
                });
        }
        else{
            $('.active').addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd', function (event) {
                    $(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai');
                });

            $('.anhslide ._1slide:last-child').addClass('di-vao-tu-ben-trai').one('webkitAnimationEnd', function (event) {

                    // bo active class
                    $('.active').removeClass('active');

                    // cho slide sau addClass active
                    $('.di-vao-tu-ben-trai').addClass('active').removeClass('di-vao-tu-ben-trai')
                });
        }
    })
    // end nut prev




});