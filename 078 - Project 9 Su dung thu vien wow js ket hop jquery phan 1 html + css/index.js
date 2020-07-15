$(function () {
    $(window).scroll(function () { 
        var vitribody = $('html').scrollTop();
        var vitrigiaodien = $('.giaodien').offset().top;
        vitrigiaodien -= 650;

        if(vitribody >= vitrigiaodien){
            console.log('tada...');
            // doan nay add class vao 
            // $(".giaodien").addClass("animate__animated animate__fadeInRight");
            $(".giaodien .khoi:nth-child(1)").addClass("animate__animated animate__fadeInRight")
            $(".giaodien .khoi:nth-child(2)").addClass("animate__animated animate__rotateInDownLeft")
            $(".giaodien .khoi:nth-child(3)").addClass("animate__animated animate__rotateInDownRight")
            $(".giaodien .khoi:nth-child(4)").addClass(
              "animate__animated animate__fadeInLeft"
            );
            $(".giaodien .khoi:nth-child(5)").addClass(
              "animate__animated animate__bounceIn"
            );
            $(".giaodien .khoi:nth-child(6)").addClass("animate__animated animate__fadeInRight")
        }
    });
});

