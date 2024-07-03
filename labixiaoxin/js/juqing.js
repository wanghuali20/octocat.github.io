
var btn = document.querySelector(".judge");
var fenshu = [9, 10, 10, 4, 1, 1, 1, 1]
btn.addEventListener("click", function () {
    var judge = prompt("请输入评价内容");
    var num;
    do { num = parseInt(prompt("请给蜡笔小新打分，只能是大于等于0小于等于10分")); }
    while (num < 0 || num > 10);
    if (judge == null || num == null)
        return
    var div = document.createElement("div");
    var attr = document.createAttribute("class");
    var text = document.createTextNode(judge);
    var btn = document.createElement("button");
    btntext = document.createTextNode("删除");
    var btnattr = document.createAttribute("class");
    btnattr.value = "delete";
    btn.setAttributeNode(btnattr);
    btn.appendChild(btntext);
    attr.value = "talk-item";
    div.setAttributeNode(attr);
    div.appendChild(text);
    div.appendChild(btn);
    document.querySelector(".talk").appendChild(div);
    fenshu.push(num);
    var sum = 0;
    for (var i in fenshu) {
        sum += Number(fenshu[i]);
    };
    var avgNum = sum / (fenshu.length);
    avgNum = avgNum.toFixed(2);
    $(".avg").text("平均分：" + avgNum + "分");
    $(".delete").click(function () {
        console.log("123");
        $(this).parent().remove();
    })
});

