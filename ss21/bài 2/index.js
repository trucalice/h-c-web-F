let number;
let count_le = 0;
let count_chan = 0;
let save= "";

for (let index = 0; index < 5; index++) {
    number = parseInt(prompt(`Hãy nhập số nguyên thứ ${index + 1}:`));
    save += number + " "; 
        if (number % 2 !== 0 ) {
        count_le ++;
    } else {
        count_chan ++;
    }
}
document.writeln("Các số đã nhập: " + save + "<br>");
document.writeln("Các số chẵn là: " + count_chan);
document.writeln("Các số lẻ là: " + count_le);
