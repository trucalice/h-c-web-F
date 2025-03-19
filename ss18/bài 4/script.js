const number = prompt("Nhập một số từ 0 đến 9:");

const numberWords = ["Số Không", "Số Một", "Số Hai", "Số Ba", "Số Bốn", "Số Năm", "Số Sáu", "Số Bảy", "Số Tám", "Số Chín"];

if (number !== null && !isNaN(number) && number >= 0 && number <= 9) {
    console.log(numberWords[Number(number)]);
} else {
    console.log("Vui lòng nhập một số hợp lệ từ 0 đến 9.");
}