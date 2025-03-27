function main(){
    let arr = [];
    while (1) {
        let choice = +prompt(`
            ===================MENU===================
            1.Nhập mảng
            2.Hiển thị mảng
            3.Tìm phần tử lớn nhất và nhỏ nhất trong mảng
            4.Tính tổng các phần tử trong mảng
            5.Tìm số lần xuất hiện của một phần tử trong mảng
            6.Sắp xếp mảng tăng dần
            7.Thoát chương trình
            ==========================================
            nhập lựa chọn:
            `);
        switch (choice) {
            case 1:
                let n = +prompt("nhập số phần tử muốn nhập vào mảng ");
                let a;
                for (let i = 0; i < n; i++) {
                    a = +prompt(`nhập phần tử thử ${i + 1} của mảng`);
                    arr[i] = a;
                }
                break;
            case 2:
                if (arr.length === 0) {
                    alert("Mảng hiện đang rỗng! Hãy nhập dữ liệu trước.");
                } else {
                    alert(`arr = [${arr}]`);
                }
                break;
            case 3:
                let max = arr[0], min = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                    }
                    if (arr[i] < min) {
                        min = arr[i];
                    }
                }
                alert(`max = ${max}  min = ${min}`);
                break;
            case 4:
                let sum = 0;
                for(let i=0; i<arr.length; i++){
                    sum+=arr[i];
                }
                alert(`tổng các phần tử trong mảng là: ${sum}`);
                break;
            case 5:{
                let n = +prompt(`nhập số muốn tìm trong mảng`);
                let count=0;
                for(let i=0; i<arr.length; i++){
                    if(arr[i]==n){
                        count++;
                    }
                }
                if(count==0){
                    alert(`${n} không tồn tại trong mảng`);
                }else{
                    alert(`${n} xuất hiện ${count} lần trong mảng`);
                }
                break;
            }
            case 6:
                arr.sort((a,b)=>a-b);
                alert(`sắp xếp hoàn tất`);
                break;
            case 7:
                return 0;
        }
    }
}
main();