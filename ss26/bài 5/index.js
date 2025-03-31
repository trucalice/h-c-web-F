function maxNumber (array) {
    if (!Array.isArray(array) || !array.every(item => typeof item === "number")){
        console.log("Dữ liệu không hợp lệ");
        return;
    }else
    if (array.length === 0) {
        console.log("Mảng không có dữ liệu")
        return;
    }else {
        console.log("max = " + max + "postion: " + index)
    }
    let max = Math.max(...aray)
}

let array1 = [10, 9, 5, 11, 24, 5];
let array2 = [ ];
let array3 = ["abc"]

maxNumber(array1);
maxNumber(array2);
maxNumber(array3);