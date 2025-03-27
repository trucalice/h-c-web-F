function main() {
    let arr = [];
    while (1) {
        let choice = +prompt(`
            ===================MENU===================
            1.Nhập mảng số nguyên
            2.Hiển thị mảng
            3.Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó 
            4.Tính tổng và trung bình cộng của các số dương trong mảng
            5.Đảo ngược mảng
            6. Kiểm tra mảng có đối xứng không
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
                if (arr.length == 0) {
                    alert("Mảng hiện đang rỗng! Hãy nhập dữ liệu trước.");
                } else {
                    alert(`arr = [${arr}]`);
                }
                break;
            case 3:
                {
                    let max = arr[0], maxIndex = 0;
                    for (let i = 1; i < arr.length; i++){
                        if (arr[i] > max) {
                            max = arr[i];
                            maxIndex=i;
                        }
                    }
                    alert(`max = ${max}, chỉ số = ${maxIndex}`);
                    break;
                }
            case 4:
                {
                    let sum = 0, count = 0;
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] > 0) {
                            sum += arr[i];
                            count++;
                        }
                    }
                    let avr = sum / count;
                    alert(`tổng là ${sum}, trung bình cộng của số dương trong mảng là: ${avr}`);
                }
                break;
            case 5:
                {
                    let mangDao = arr.slice().reverse();
                    alert(`mảng đảo ngược: arrDao=[${mangDao}]`);
                }
                break;
            case 6:
                {
                    let mangDao = arr.slice().reverse();
                    let check=1;
                    for(let i=0; i< arr.length; i++){
                        if(mangDao[i]!=arr[i]){
                            check=0;
                        }
                    }
                    if(check){
                        alert(`mảng là mảng đối xứng`);
                    }else{
                        alert(`không phải mảng đối xứng`);
                    }
                }
                break;
            case 7:
                return 0;
            default:
                alert(`lựa chọn không hơp lệ`);
                break;
        }
    }
}
main();