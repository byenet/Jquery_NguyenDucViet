$(document).ready(function () {

  var hieuungnoidung = gsap.timeline({paused: true});

  hieuungnoidung
    .from(".logo", 0.7, { scale: 3, opacity: 0, ease: Elastic.easeOut })
    .from(
      ".tieude",
      0.7,
      { scale: 2, opacity: 0, ease: Elastic.easeOut },
      "+=0.4"
    )
    .from(
      ".gioithieu",
      0.7,
      { y: 200, opacity: 0, ease: Elastic.easeOut },
      "+=0.2"
    )
    .from(".keduoi", 0.7, { x: -2200, opacity: 0, ease: Power4.easeOut }, "+=0.7")
    .from(
      ".motkhoi",
      0.8,
      { scale: 2, opacity: 0, ease: Elastic.easeOut, stagger: 0.5 },
    );

    $('.kichhoat').click(function(){
      hieuungnoidung.play();
    })
});