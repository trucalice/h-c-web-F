let number = parseInt(prompt("Hãy nhập 1 số nguyên bất kì"));
let count = "";

if(number >= 0 ){
    for (let i = 0 ; i <=  number ; i++){
    if (number % i === 0){
        count = count + i + " ";
    }
   }
   document.writeln(count);
} else {
    for (let i = -Math.abs(number); i <= Math.abs(number); i++) {
        if (i !== 0 && number % i === 0) {
            count = count + i + " ";
        }
    }
    document.writeln(count);
}