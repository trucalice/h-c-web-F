function sum(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "Dữ liệu không hợp lệ"
    }
    return result=a+b;
}

console.log(sum(2,6));
console.log(sum(3,'text'));
console.log(sum(7,-7));
console.log(sum(4.5,3));
