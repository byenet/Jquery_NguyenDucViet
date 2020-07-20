$(document).ready(function () {
  gsap.from($('img.logo'),1,{opacity:0, scale:3});
  gsap.from($('.tieude'),1,{opacity:0, y:300, delay:0.5});
  gsap.from($(".gioithieu"), 1, { opacity: 0, x: 800, delay: 1 });
  gsap.from($(".keduoi"), 2, { opacity: 0, x: -3000, delay: 1.4 });
  gsap.from($(".motkhoi"), 1, { opacity: 0, y: 100, delay: 2, stagger: 0.3 });
    
});