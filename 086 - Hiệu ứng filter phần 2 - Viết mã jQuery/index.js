$(function () {
    $('nav ul li a').click(function (e) { 
      e.preventDefault();
      // console.log('hello');

      // phat hien data class cua nut duoc click
      var danhmuc = $(this).data('class');
      console.log(danhmuc);

      // lay nguyen content cua the a
      console.log($(this).text());
      var ten = $(this).text();
      $('section h1').text(ten);

      // xet moi phan tu
      $('.content ul li').each(function(index, element) {
        // neu co class trung voi ten danh muc thi hien thi
        if($(this).hasClass(danhmuc)){
          $(this).show(300);
        }else{
          $(this).hide(300);
        }
      })
    });
});