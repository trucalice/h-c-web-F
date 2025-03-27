function main() {
    let arr = [];
    while (1) {
        let choice = +prompt(`
            ===================MENU===================
            1.Nhập mảng
            2.Hiển thị mảng
            3.Tìm các phần tử chẵn và lẻ 
            4.Tính trung bình cộng của mảng
            5.Xóa phần tử tại vị trí chỉ định
            6.Tìm phần tử lớn thứ hai trong mảng
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
                {
                    let arrChan = [];
                    let arrLe = [];
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] % 2 == 0) {
                            arrChan.push(arr[i]);
                        } else {
                            arrLe.push(arr[i]);
                        }
                        alert(`
                            số chẵn trong mảng là: ${arrChan}
                            số lẻ trong mảng là: ${arrLe}
                            `)
                    }
                    break;
                }
            case 4:
                {
                    let sum = 0;
                    for (let i = 0; i < arr.length; i++) {
                        sum += arr[i];
                    }
                    let avr = sum / arr.length;
                    alert(`trung bình cộng của mảng là: ${avr}`);
                }
                break;
            case 5:
                {
                    let deleteIndex = +prompt(`nhập vị trí muốn xóa phần tử`)
                    arr.splice(deleteIndex, 1);
                    alert(`xóa hoàn tất`);
                }
                break;
            case 6:
                {
                    let max = arr[0], max2 = arr[0];
                    for (let i = 1; i < arr.length; i++) {
                        if (arr[i] > max) {
                            max2 = max;
                            max = arr[i];
                        }
                    }
                   alert(`số lớn thứ 2 trong mảng là ${max2}`); 
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