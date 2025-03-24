let money_first = parseInt(prompt("Nhập số tiền ban đầu"));
let interest_rate = parseInt(prompt("Nhập số lãi suất"));
let month = parseInt(prompt("Số tháng gửi"));

let rate = interest_rate / 100;
let final_amount = money_first * Math.pow((1 + rate), month);
let interest_earned = final_amount - money_first;
document.writeln("Tiền ban đầu: " + money_first.toFixed(3) + "<br>");
document.writeln("Lãi suất: " + interest_rate + "%<br>");
document.writeln("Số tháng gửi: " + month + "<br>");
document.writeln("Tiền lãi: " + interest_earned.toFixed(3) + "<br>");
document.writeln("Tiền nhận được: " + final_amount.toFixed(3));