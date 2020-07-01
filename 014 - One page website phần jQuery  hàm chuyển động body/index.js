$(function () {
    console.log('ready');
    

    $('.menutren ul li a').on('click', function (event) {
      // ngan chan chuyen qua web khac neu click vao the a
        event.preventDefault();
        console.log("da click");
        
        $("html, body").animate(
          {
            scrollTop: 900, // 900px
          }, 
          1000 // toc do 1s
        );

    });
});

