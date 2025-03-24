let number;
let count = 0;
let save= "";

for (let index = 0; index < 5; index++) {
    number = parseInt(prompt(`Hãy nhập số nguyên thứ ${index + 1}:`));
    save += number + " "; 
        if (number % 2 !== 0 ) {
        count = count + number; 
    }
}
document.writeln("Các số đã nhập: " + save + "<br>");
document.writeln("Tổng các số lẻ là: " + count);
