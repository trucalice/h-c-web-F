let number = prompt("Nhập vào một dãy số:");

for (let i = 0; i < number.length; i++) {
    if (isNaN(number[i])) {
        document.writeln("Dãy không hợp lệ");
        break;
    }
}

let string = number.split("").reverse().join("");
document.writeln("Dãy số sau khi đảo ngược là: " + string);


