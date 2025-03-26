let number = prompt("Nhập vào một dãy số:");

if (!/^\d+$/.test(number)) {
    document.writeln("Dãy số không hợp lệ");
} else {
    let digits = number.split("");
    let maxDigit = digits[0];
    for (let i = 1; i < digits.length; i++) {
        if (digits[i] > maxDigit) {
            maxDigit = digits[i];
        }
    }
    document.writeln(maxDigit + " là số lớn nhất trong dãy số");
}
