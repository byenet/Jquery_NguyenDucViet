$(document).ready(function () {

    var hieuungload = gsap.timeline({ onComplete: noidungvaodi });

    hieuungload
      .from(".loading", 0.7, { opacity: 0 })
      .from(".khoiload", 1, { scale: 2, opacity: 0 })

      //lap lai
      .to(".khoiload", 1, { scale: 0.3, ease: Power4.easeOut })
      .to(".khoiload", 1, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) })
      .to(".khoiload", 1, { scale: 0.3, ease: Power4.easeOut })
      .to(".khoiload", 1, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) })
      .to(".khoiload", 1, { scale: 0.3, ease: Power4.easeOut })
      .to(".khoiload", 1, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) })

      //ket thuc
      .to(".khoiload", 1, { scale: 7, opacity: 0, ease: Power4.easeOut })
      .to(".loading", 1, { x: -2200, ease: Power1.easeOut });
  
  var hieuungnoidung = gsap.timeline({paused: true});

  hieuungnoidung
    .from(".logo", 0.7, { scale: 3, opacity: 0, ease: Elastic.easeOut })
    .from(
      ".tieude",
      0.7,
      { scale: 2, opacity: 0, ease: Elastic.easeOut },
      "+=0.1"
    )
    .from(
      ".gioithieu",
      0.7,
      { y: 200, opacity: 0, ease: Elastic.easeOut },
      "+=0.1"
    )
    .from(".keduoi", 0.7, { x: -2200, opacity: 0, ease: Power4.easeOut }, "+=0.1")
    .from(
      ".motkhoi",
      0.8,
      { scale: 2, opacity: 0, ease: Elastic.easeOut, stagger: 0.2 },
    );


    // $('.kichhoat').click(function(){
    //   hieuungnoidung.play();
    // })

    function noidungvaodi(){
      hieuungnoidung.play();
    }
});