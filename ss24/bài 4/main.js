function main() {
    let arr = [];
    let row = 0, col = 0;

    while (true) {
        let choice = +prompt(`
            ========== MENU ==========
            1. Nhập mảng 2 chiều
            2. Hiển thị mảng
            3. Tính tổng các phần tử
            4. Tìm số lớn nhất & vị trí
            5. Tính trung bình 1 hàng
            6. Đảo ngược các hàng
            7. Thoát chương trình
            ==========================
            Nhập lựa chọn (1-7): 
        `);

        if (choice === 7) {
            alert("Chương trình kết thúc!");
            return;
        }

        switch (choice) {
            case 1:
                nhapMang();
                break;
            case 2:
                hienThiMang();
                break;
            case 3:
                tinhTong();
                break;
            case 4:
                timMax();
                break;
            case 5:
                tinhTrungBinh();
                break;
            case 6:
                daoNguocHang();
                break;
            default:
                alert("Lựa chọn không hợp lệ! Hãy nhập số từ 1-7.");
        }
    }

    function nhapMang() {
        row = +prompt("Nhập số hàng:");
        col = +prompt("Nhập số cột:");
        arr = [];

        for (let i = 0; i < row; i++) {
            arr[i] = [];
            for (let j = 0; j < col; j++) {
                arr[i][j] = +prompt(`Nhập phần tử ở hàng ${i}, cột ${j}:`);
            }
        }
        alert("Đã nhập xong mảng!");
    }

    function hienThiMang() {
        if (arr.length === 0) {
            alert("Mảng đang rỗng! Hãy nhập dữ liệu trước.");
            return;
        }
        let result = "Mảng hiện tại:\n";
        for (let i = 0; i < row; i++) {
            result += arr[i].join(" ") + "\n";
        }
        alert(result);
    }

    function tinhTong() {
        let sum = 0;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                sum += arr[i][j];
            }
        }
        alert(`Tổng các phần tử trong mảng là: ${sum}`);
    }

    function timMax() {
        let max = arr[0][0];
        let viTri = [0, 0];

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (arr[i][j] > max) {
                    max = arr[i][j];
                    viTri = [i, j];
                }
            }
        }
        alert(`Số lớn nhất: ${max} tại vị trí [${viTri[0]}, ${viTri[1]}]`);
    }

    function tinhTrungBinh() {
        let rowIndex = +prompt("Nhập chỉ số hàng cần tính trung bình:");
        if (rowIndex < 0 || rowIndex >= row) {
            alert("Chỉ số hàng không hợp lệ!");
            return;
        }

        let sum = 0;
        for (let j = 0; j < col; j++) {
            sum += arr[rowIndex][j];
        }
        let avg = sum / col;
        alert(`Trung bình cộng của hàng ${rowIndex} là: ${avg}`);
    }

    function daoNguocHang() {
        for (let i = 0; i < row; i++) {
            arr[i] = arr[i].reverse();
        }
        alert("Đã đảo ngược các hàng trong mảng!");
        hienThiMang();
    }
}

main();
