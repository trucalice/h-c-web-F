let arr = [1,2,3,4,5];
let tongChan=0,tongLe=0;
for(let i=0; i<arr.length; i++ ){
    if(arr[i]%2==0){
        tongChan+=arr[i];
    }else{
        tongLe+=arr[i];
    }
}
document.writeln(`Tổng các số chẵn: `, tongChan);
document.writeln(`Tổng các số lẻ: `, tongLe);