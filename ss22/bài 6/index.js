let arr = [2,5,7,4,1,8,6,2,5,7];
let count = 0;
let n = +prompt("nhập số muốn đếm");
for(let i=0; i<arr.length; i++){
    if(arr[i]==n){
        count++;
    }
}
if(count==0){
    document.writeln(`số ${n} không tồn tại trong mảng`);
}else{
    document.writeln(`số ${n} xuất hiện ${count} lần`);
}