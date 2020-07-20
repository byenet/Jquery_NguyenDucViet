$(document).ready(function () {
    // gsap.to(tenCuaPhanTu, thoiGian, {tenThuocTinh:giaTri, tenTT:gt})
    gsap.to($('.nut2'), 1, {y:200, opacity:0, scale:2});
    gsap.from($('.nut1'), 1, {x:-200, opacity:0, scale:2});
    

    $('.nut1').click(function(event) {
        gsap.fromTo($(".nut3"), 1, { x: -400 }, { x: 400 });
        gsap.to($(this),1,{y:"+=100"});
        gsap.from($(".nut2"), 1, { y: 0, opacity: 1, scale: "+=2" });
    })  
});