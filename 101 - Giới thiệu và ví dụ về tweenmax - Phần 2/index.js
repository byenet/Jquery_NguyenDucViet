$(document).ready(function () {
    TweenMax.fromTo($('.btn-primary'),1,{y:200, opacity:0},{y:0, opacity:1});

    vdstaggerto();

    function vdstaggerto() {
            gsap.to($(".btn-primary"), 2, {
              y: 300,
              opacity: 0,
              ease: "bounce.inOut",
              stagger: 0.5,
            });
    }

    // vdstaggerfrom();

    // function vdstaggerfrom() {
    //     gsap.from($(".btn-primary"), 2, { y: 300, opacity: 0, stagger:0.5 });
    // }

    
});