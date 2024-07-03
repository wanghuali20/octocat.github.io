var friends = [{ name: "原野新之助", url: "./images/我的朋友/friends/小新.png" },
{ name: "小白", url: "./images/我的朋友/friends/小白.png" },
{ name: "小葵", url: "./images/我的朋友/friends/小葵.png" },
{ name: "风问彻", url: "./images/我的朋友/friends/风问彻.png" },
{ name: "原野美牙", url: "./images/我的朋友/friends/小新妈.png" },
{ name: "正男", url: "./images/我的朋友/friends//正男.png" },
{ name: "原野广志", url: "./images/我的朋友/friends/广志.png" },
{ name: "阿呆", url: "./images/我的朋友/friends/风问彻-恢复的.png" },
{ name: "女爱", url: "./images/我的朋友/friends/女爱.png" },
{ name: "石板绿", url: "./images/我的朋友/friends/石板绿.png" },
]
for (var i = 0; i < friends.length; i++) {
    console.log(i);
    var div = document.createElement("div");
    var p = document.createElement("p");
    var img = document.createElement("img");
    var attr = document.createAttribute("src");
    var text = document.createTextNode(friends[i].name);
    attr.value = friends[i].url;
    p.appendChild(text);
    img.setAttributeNode(attr);
    div.appendChild(p);
    div.appendChild(img);
    document.querySelector(".content").appendChild(div);
}