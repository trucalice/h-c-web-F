const math = parseFloat(prompt("Nhập điểm Toán:"));
const literature = parseFloat(prompt("Nhập điểm Văn:"));
const english = parseFloat(prompt("Nhập điểm Anh:"));

if (!isNaN(math) && !isNaN(literature) && !isNaN(english)) {
    const average = (math + literature + english) / 3;
    let grade;
    
    if (average >= 8.0) {
        grade = "Giỏi";
    } else if (average >= 6.5) {
        grade = "Khá";
    } else if (average >= 5.0) {
        grade = "Trung bình";
    } else {
        grade = "Yếu";
    }
    
    console.log(`Điểm trung bình: ${average.toFixed(2)}`);
    console.log(`Xếp loại: ${grade}`);
} else {
    console.log("Vui lòng nhập điểm hợp lệ.");
}
