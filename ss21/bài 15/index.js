let amount = parseInt(prompt("Nhập số tiền cần rút (phải chia hết cho 1.000): "));
if (isNaN(amount)) {
    alert("Vui lòng nhập một số hợp lệ.");
} else if (amount % 1000 !== 0) {
    alert("Số tiền phải chia hết cho 1.000.");
} else {
    let denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
    let result = `Số tiền cần rút: ${amount.toLocaleString()} VND\nPhân bổ tờ tiền:\n`;
    
    for (let note of denominations) {
        let count = Math.floor(amount / note);
        if (count > 0) {
            result += `${note.toLocaleString()} VND - ${count} tờ\n`;
            amount -= count * note;
        }
    }
    alert(result);
}
