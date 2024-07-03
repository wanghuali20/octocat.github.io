// 轮播图
$().ready(function () {
    var offset = 0;
    function nextSwiper() {
        offset += 1000;
        if (offset == 3000)
            offset = 0
        $(".banner .images").animate({
            left: -offset + "px"
        }, "slow")
    }
    setInterval(nextSwiper, 3000);

});