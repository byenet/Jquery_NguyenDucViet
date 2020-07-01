$(function () {
    console.log('ready');
    console.log('tinh thu vi tri bang ham .offset().top');
    console.log($('.chapter1').offset().top);
     
    $('.menutren ul li:nth-child(1) a').on('click', function (event) {
      // ngan chan chuyen qua web khac neu click vao the a
        event.preventDefault();
        console.log("da click");
        
        $("html, body").animate(
          {
            scrollTop: $(".chapter1").offset().top,
          },
          1000,
          "easeOutElastic"
        );
    });

    $(".menutren ul li:nth-child(2) a").on("click", function (event) {
      // ngan chan chuyen qua web khac neu click vao the a
      event.preventDefault();
      console.log("da click");

      $("html, body").animate(
        {
          scrollTop: $(".chapter2").offset().top,
        },
        1000,
        "easeOutCubic"
      );
    });

    $(".menutren ul li:nth-child(3) a").on("click", function (event) {
      // ngan chan chuyen qua web khac neu click vao the a
      event.preventDefault();
      console.log("da click");

      $("html, body").animate(
        {
          scrollTop: $(".chapter3").offset().top,
        },
        1000,
        'easeOutBounce'
      );
    });

    $(".menutren ul li:nth-child(4) a").on("click", function (event) {
      // ngan chan chuyen qua web khac neu click vao the a
      event.preventDefault();
      console.log("da click");

      $("html, body").animate(
        {
          scrollTop: $(".chapter4").offset().top,
        },
        1000,
        'easeOutQuint'
      );
    });

    $(".nutlentren").on("click", function (event) {
      // ngan chan chuyen qua web khac neu click vao the a
      event.preventDefault();
      console.log("da click");

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500 // toc do 1s
      );
    });
});

