let a = +prompt("nhập vào 1 số nguyên a");
let b = +prompt("nhập vào 1 số nguyên b");
let result=1;
function check(a,result){
    if(isNaN(a)||isNaN(b)){
        document.writeln("Không hợp lệ");
        return 0;
    }
    
    for(let i=0; i<b;i++){
        result*=a;
    }
    document.writeln(result);
}
check(a,result);