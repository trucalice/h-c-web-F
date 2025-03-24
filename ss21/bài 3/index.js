let password = "1235@"; 
let save = prompt("Hãy nhập mật khẩu(1235@): ");
while (save !== password) {
    alert("Mật khẩu sai, vui lòng nhập lại!");
    save = prompt("Hãy nhập lại mật khẩu(1235@): ");
}
document.writeln("Bạn nhập đúng mật khẩu!");
