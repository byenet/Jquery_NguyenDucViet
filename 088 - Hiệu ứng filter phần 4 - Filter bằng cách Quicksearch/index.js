$(function () {
    $('.content ul').isotope({
      itemSelector: 'li'
    })

    // code cho phan .tukhoa
    $('.tukhoa').keypress(function(event) {
      if(event.keyCode === 13) {
        var tu1 = $('.tukhoa').val().toLowerCase();
        console.log(tu1);
        tu1 = "." + tu1;
        $(".content ul").isotope({ filter: tu1 });
      }
    })

    var thoigian = setInterval(function () {
      var tu1 = $(".tukhoa").val().toLowerCase();
      tu1 = "." + tu1;
      $(".content ul").isotope({ filter: tu1 });
    },200)

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