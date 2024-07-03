alert("欢迎登录");
function validateForm() {
    var user = document.querySelector("#user").value;
    var psd = document.querySelector("#psd").value;
    var regUser = /^[a-z0-9]{8,12}$/;
    var regPsd = /^[a-z0-9]{6,10}$/;
    if (!regUser.test(user)) {
        alert("账号只能8到12位");
        return false;
    }
    if (!regPsd.test(psd)) {
        alert("密码只能6到10位");
        return false;
    }
    return true;
}
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(111);
    if (validateForm()) {
        alert("恭喜您登陆成功");
        //ben
        localStorage.setItem("user", user);
        localStorage.setItem("psd", psd);
        location.href = "./index.html"
    };
})