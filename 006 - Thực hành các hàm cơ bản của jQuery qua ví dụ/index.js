$(document).ready(function () {
    console.log("ready!");

    // $('.dangnhap').animate({ opacity: 0, marginLeft: -100})
    $('.dangky').animate({opacity:0, marginLeft: -100})

    $('.nutso2').click(function(event){
        $('.dangnhap').animate({opacity:0, marginLeft: -100});

        // dang ky di vao 
        $('.dangky').animate({opacity:1, marginLeft:0});
    })

    $('.nutso1').click(function(event){
        $('.dangky').animate({opacity:0, marginLeft:-100});

        $('.dangnhap').animate({opacity:1, marginLeft:0});
    })

});

// cach viet tat cua ready
// $(function () {
//   console.log("ready!");
// });


//  cach viet bang js

// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelector('.dangnhap').addEventListener(function(){
//         // ...
//     })
//     console.log('content loaded');
//     document.querySelector('')
// })