let FizzBuzz = "", Fizz = "", Buzz = "";
for (let i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        FizzBuzz = FizzBuzz + i + " ";
    } else if (i % 3 === 0){
        Fizz = Fizz + i + " ";
    } else if (i % 5 === 0){
       Buzz =Buzz + i + " ";
    }
}
document.writeln(FizzBuzz + "<br>");
document.writeln(Fizz + "<br>");
document.writeln(Buzz + "<br>");