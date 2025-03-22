let num=+prompt("nhập số muốn kiểm tra");
let soDaoNguoc=0,r;
let soBanDau=num;
function check(num){
    if(isNaN(num)){
        document.writeln("số không hợp lệ");
        return 0;
    }
    while(num!=0){
        r=num%10;
        soDaoNguoc=soDaoNguoc*10+r;
        num=Math.floor(num / 10);
    }
    if(soDaoNguoc==soBanDau){
        document.writeln(`${soBanDau} là số đối xứng`);
    }else{
        document.writeln(`${soBanDau} Không phải số đối xứng`);
    }
}
check(num);