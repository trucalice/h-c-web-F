let n= parseInt(prompt("Hãy đoán 1 số bất kì(2,5,7,4,1,8,6)"));
let numbers = [2,5,7,4,1,8,6];
let check = false;
for (let i = 0; i < numbers.length; i++) {
    if (n === numbers[i]) {
        check = true;
        break;
    }
}
if (check) {
    alert("Bingo");
} else {
    alert("Chúc bạn may mắn lần sau !");3
}

