let a,b,c;
for (let i = 100 ; i < 999 ; i ++){
    a = Math.floor(i / 100);
    b = Math.floor((i % 100) / 10);
    c = i % 10;

    let sum = a ** 3 + b ** 3 + c ** 3;

    if(sum === i){
        document.writeln(i + "<br>");
    }
}
