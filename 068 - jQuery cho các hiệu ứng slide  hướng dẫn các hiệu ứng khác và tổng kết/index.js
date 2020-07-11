$(document).ready(function () {
  thoigian = setInterval(function () {
    // sau 3000ms thi kich hoat nut next 1 lan
    // $('.next').trigger('click');
    // nhung o day khi an vao next ta da huy clearInterval nen khong dung cach nay dc ma phai copy
    // cua nut next
    var sau = $(".active").next();

    // xu ly cho phan nut
    var vitri = $(".xanh").index() + 1;
    console.log("vt: " + vitri);

    $(".nutslide ul li").removeClass("xanh");
    if (vitri === $(".nutslide ul li").length) {
      vitri = 0;
    }

    $(".nutslide ul li:nth-child(" + (vitri + 1) + ")").addClass("xanh");

    // xu ly cho phan slide

    // check khi den slide cuoi (sau khong con do dai nua (length cua sau la 0))
    console.log(sau.length);
    if (sau.length === 0) {
      $(".active")
        .addClass("bien-mat-o-ben-trai")
        .one("webkitAnimationEnd", function (event) {
          $(".bien-mat-o-ben-trai").removeClass("bien-mat-o-ben-trai");
        });

      $(".anhslide ._1slide:nth-child(1)")
        .addClass("di-vao-tu-ben-phai")
        .one("webkitAnimationEnd", function (event) {
          // bo active class
          $(".active").removeClass("active");

          // cho slide sau addClass active
          $(".di-vao-tu-ben-phai")
            .addClass("active")
            .removeClass("di-vao-tu-ben-phai");
        });
    } else {
      // code cho phan addClass ban dau
      $(".active")
        .addClass("bien-mat-o-ben-trai")
        .one("webkitAnimationEnd", function (event) {
          $(".bien-mat-o-ben-trai").removeClass("bien-mat-o-ben-trai");
        });

      sau
        .addClass("di-vao-tu-ben-phai")
        .one("webkitAnimationEnd", function (event) {
          // bo active class
          $(".active").removeClass("active");

          // cho slide sau addClass active
          $(".di-vao-tu-ben-phai")
            .addClass("active")
            .removeClass("di-vao-tu-ben-phai");
        });
    }
  }, 3000);

  // viet code cho nut next
  $(".next").click(function (event) {
    clearInterval(thoigian);

    var sau = $(".active").next();

    // xu ly cho phan nut
    var vitri = $(".xanh").index() + 1;
    console.log("vt: " + vitri);

    $(".nutslide ul li").removeClass("xanh");
    if (vitri === $(".nutslide ul li").length) {
      vitri = 0;
    }

    $(".nutslide ul li:nth-child(" + (vitri + 1) + ")").addClass("xanh");

    // xu ly cho phan slide

    // check khi den slide cuoi (sau khong con do dai nua (length cua sau la 0))
    console.log(sau.length);
    if (sau.length === 0) {
      $(".active")
        .addClass("bien-mat-o-ben-trai")
        .one("webkitAnimationEnd", function (event) {
          $(".bien-mat-o-ben-trai").removeClass("bien-mat-o-ben-trai");
        });

      $(".anhslide ._1slide:nth-child(1)")
        .addClass("di-vao-tu-ben-phai")
        .one("webkitAnimationEnd", function (event) {
          // bo active class
          $(".active").removeClass("active");

          // cho slide sau addClass active
          $(".di-vao-tu-ben-phai")
            .addClass("active")
            .removeClass("di-vao-tu-ben-phai");
        });
    } else {
      // code cho phan addClass ban dau
      $(".active")
        .addClass("bien-mat-o-ben-trai")
        .one("webkitAnimationEnd", function (event) {
          $(".bien-mat-o-ben-trai").removeClass("bien-mat-o-ben-trai");
        });

      sau
        .addClass("di-vao-tu-ben-phai")
        .one("webkitAnimationEnd", function (event) {
          // bo active class
          $(".active").removeClass("active");

          // cho slide sau addClass active
          $(".di-vao-tu-ben-phai")
            .addClass("active")
            .removeClass("di-vao-tu-ben-phai");
        });
    }
  });
  // end nut next

  // viet code co nut prev
  $(".prev").click(function (event) {
    clearInterval(thoigian);

    var truoc = $(".active").prev();
    console.log(truoc.length);

    // xu ly cho phan nut
    var vitri = $(".xanh").index() + 1;
    console.log("vt: " + vitri);

    $(".nutslide ul li").removeClass("xanh");
    if (vitri === 1) {
      vitri = $(".nutslide ul li").length + 1;
    }

    $(".nutslide ul li:nth-child(" + (vitri - 1) + ")").addClass("xanh");

    if (truoc.length === 1) {
      $(".active")
        .addClass("bien-mat-o-ben-phai")
        .one("webkitAnimationEnd", function (event) {
          $(".bien-mat-o-ben-phai").removeClass("bien-mat-o-ben-phai");
        });

      truoc
        .addClass("di-vao-tu-ben-trai")
        .one("webkitAnimationEnd", function (event) {
          // bo active class
          $(".active").removeClass("active");

          // cho slide sau addClass active
          $(".di-vao-tu-ben-trai")
            .addClass("active")
            .removeClass("di-vao-tu-ben-trai");
        });
    } else {
      $(".active")
        .addClass("bien-mat-o-ben-phai")
        .one("webkitAnimationEnd", function (event) {
          $(".bien-mat-o-ben-phai").removeClass("bien-mat-o-ben-phai");
        });

      $(".anhslide ._1slide:last-child")
        .addClass("di-vao-tu-ben-trai")
        .one("webkitAnimationEnd", function (event) {
          // bo active class
          $(".active").removeClass("active");

          // cho slide sau addClass active
          $(".di-vao-tu-ben-trai")
            .addClass("active")
            .removeClass("di-vao-tu-ben-trai");
        });
    }
  });
  // end nut prev

  // code cho nut chuyen slide ben duoi
  $(".nutslide ul li").click(function (event) {
    // bo het class xanh cua toan bo ui li
    $(".nutslide ul li").removeClass("xanh");

    // this = nut duoc click them class xanh
    $(this).addClass("xanh");

    // code xu ly cho slide

    // cho slide hien tai bien mat
    $(".active")
      .addClass("bien-mat-o-ben-phai")
      .one("webkitAnimationEnd", function (event) {
        $(".bien-mat-o-ben-phai").removeClass("bien-mat-o-ben-phai");
      });

    //  tinh vi tri slide hien tai + 1 (de dung cho nth nen phai bat dau tu 1 chu khong phai tu 0)
    console.log($(this).index() + 1);

    console.log(".anhslide ._1slide:nth-child(" + ($(this).index() + 1) + ")");

    $(".anhslide ._1slide:nth-child(" + ($(this).index() + 1) + ")")
      .addClass("di-vao-tu-ben-trai")
      .one("webkitAnimationEnd", function (event) {
        // bo active class
        $(".active").removeClass("active");

        // cho slide sau addClass active
        $(".di-vao-tu-ben-trai")
          .addClass("active")
          .removeClass("di-vao-tu-ben-trai");
      });
  });
});
