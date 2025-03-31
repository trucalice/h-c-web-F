function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let length = Number(prompt("Nhập số lượng phần tử (10 - 20):"));
if (isNaN(length) || length < 10 || length > 20) {
    console.log("Dữ liệu không hợp lệ");
} else {
    let numbers = [];
    for (let i = 0; i < length; i++) {
        let num = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
        numbers.push(num);
    }
    let oddPrimes = numbers.filter(function(num) {
        return isPrime(num) && num % 2 !== 0;
    });
    if (oddPrimes.length === 0) {
        console.log("Mảng không có dữ liệu");
    } else {
        console.log("Các số nguyên tố lẻ:", oddPrimes);
    }
}