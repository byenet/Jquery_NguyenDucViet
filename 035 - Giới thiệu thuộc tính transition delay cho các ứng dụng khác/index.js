$(document).ready(function () {
    $('.noidungthem').slideDown(200);
        TweenMax.staggerFrom($(".noidungbandau .to, .loadthem"), 1  , { top: 150, opacity: 0 }, 0.1);

    $('.noidungthem').slideUp(0);

    $('.nutload').click(function (event) {
        $('.noidungthem').slideDown(200);
        TweenMax.staggerFrom($(".noidungthem .to"), 1  , { left: 150, opacity: 0 }, 0.1);
    })
});
