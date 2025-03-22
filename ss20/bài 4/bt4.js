let str = prompt("nhập vào chuỗi");
let search = prompt("nhập vào từ cần tìm");
function check(str,search){
    for(let i =0; i <str.length;i++){
        if(str[i]==search){
            document.writeln("Tồn tại từ cần tìm kiếm");
            return 0;
        }
    }
     document.writeln("Không tồn tại từ cần tìm kiếm");
}
check(str,search);