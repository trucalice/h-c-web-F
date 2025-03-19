const number = parseInt(prompt("Nhập một số nguyên:"), 10);

if (!isNaN(number)) {
    if (number % 2 === 0) {
        console.log(`${number} là số chẵn.`);
    } else {
        console.log(`${number} là số lẻ.`);
    }
} else {
    console.log("Vui lòng nhập một số nguyên hợp lệ.");
}
