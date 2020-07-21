$(document).ready(function () {
  // dinh nghia 1 dong thoi gian
  var cd1 = gsap.timeline();

  // lam duoc chuyen dong noi tiep

  // cd1.to(".nut1", 1, { x: -300 });
  // cd1.to(".nut1", 1, { y: 300 });

    

      // code cho cac nut
      $(".nutplay").click(function (e) {
        cd1
          .to(".nut1", 1, { x: -300 })
          .to(".nut1", 1, { y: 300 }, "+=1") // +=1 la se delay 1s so voi cai truoc
          .to(".nut1", 1, { x: 0 }, "+=1") // no se tre 1s so voi cai truoc nghia la tre 2s so voi cai dau tien
          .to(".nut1", 1, { rotationX: 360 })
          .to(".nut1", 1, { rotationX: 0, y: 0 });
      }); 

      $('.nutstop').click(function(e){
        cd1.pause();
      }) 

      $(".nutresume").click(function (e) {
        cd1.resume();
      }); 

      $(".nutdaonguoc").click(function (e) {
        cd1.reverse();
      }); 
      
      
});