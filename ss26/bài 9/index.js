let length = Number(prompt("Nhập số lượng phần tử (10 - 20):"));
if (isNaN(length) || length < 10 || length > 20) {
    console.log("Dữ liệu không hợp lệ");
} else {
    let numbers = [];
    
    for (let i = 0; i < length; i++) {
        let num = Number(prompt("Nhập phần tử thứ " + (i + 1) + ":"));
        numbers.push(num);
    }

    if (numbers.length === 0) {
        console.log("Mảng không có dữ liệu");
    } else {
        let totalEven = numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
        let totalOdd = numbers.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);

        console.log("totalEven =", totalEven);
        console.log("totalOdd =", totalOdd);
    }
}