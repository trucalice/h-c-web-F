let number = parseInt(prompt("Nhập một số bất kỳ"));
let isPrime = true; 

if (number < 2) {
    alert("Số " + number + " không phải là số nguyên tố");
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break; 
        }
    }  
    if (isPrime) {
        alert("Số " + number + " là số nguyên tố");
    } else {
        alert("Số " + number + " không phải là số nguyên tố");
    }
}
