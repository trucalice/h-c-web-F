
let a = prompt("Nhập số a");
let b = prompt("Nhập số b");
let c = prompt("Nhập số c");
let delta = Math.pow(b, 2) - 4*a*c;
if (a === 0){
    if (b === 0){
        if (c === 0){
            document.writeln("Phương trình có vô số nghiệm");}
        else {
                document.writeln("Phương trình vô nghiệm");
        }
    } else {
        let x = -c /b;
        document.writeln("Phương trình có một nghiệm: x =",x)
    }
} else {
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.writeln("Phương trình có hai nghiệm:", x1, x2);
    } else if (delta == 0) {
        let x = -b / (2 * a);
        document.writeln("Phương trình có nghiệm kép: x =", x);
    } else {
        document.writeln("Phương trình vô nghiệm.");
    } 
}

