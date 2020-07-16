$(function () {
    $('.content ul').isotope({
      itemSelector: 'li'
    })

    // code cho phan nut
    $('nav ul li a').click(function (e) { 
      e.preventDefault();
      var danhmuc = $(this).data('danhmucanh');
      var ten = $(this).text();
      
      if(danhmuc === 'all'){
        $("section h1").text("Tất cả ảnh");
        $(".content ul").isotope({ filter: '*' });
      } else{
        danhmuc = "." + danhmuc;
        $("section h1").text(ten);
        $(".content ul").isotope({ filter: danhmuc });
      }
      
    });
});