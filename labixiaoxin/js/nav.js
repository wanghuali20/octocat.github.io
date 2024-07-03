$(".menu2").mouseenter(() => {
    $(".menu2 ul").slideDown("1000");
})
$(".menu2").mouseleave(() => {
    console.log(234);
    $(".menu2>ul").slideUp("1000");
})