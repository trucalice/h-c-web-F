let n = +prompt("nhập vào số tự nhiên n");

function check(n){
    if(n<=1){
        document.writeln(`${n} không phải là số nguyên tố`);
        return 0;
    }
    for(let i=2; i<n;i++){
        if(n%i==0){
            document.writeln(`${n} không phải là số nguyên tố`);
            return 0;
        }
    }
    document.writeln(`${n} là số nguyên tố`);
}

check(n);