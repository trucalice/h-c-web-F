let number = parseInt(prompt("Nhập số lượng nguyên tố: "));

if (isNaN(number)) {
    document.writelng("Vui lòng nhập một số nguyên hợp lệ!");
} else {
    let count = 0;
    let num = 2;
    while (count < number) {  
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            document.writeln(num);
            count++;
        }
        num++;
    }
}
