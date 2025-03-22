let n = +prompt("nhập vào số tự nhiên n");
let a=0,b=1,tmp;
for(let i=0;i<n;i++){
    document.writeln(a);
    tmp=a+b;
    a=b;
    b=tmp;
}