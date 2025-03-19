const experience = parseFloat(prompt("Nhập số năm kinh nghiệm của nhân viên:"));

if (!isNaN(experience) && experience >= 0) {
    let category;
    
    if (experience < 1) {
        category = "Mới vào nghề";
    } else if (experience <= 3) {
        category = "Nhân viên có kinh nghiệm";
    } else if (experience <= 6) {
        category = "Chuyên viên";
    } else {
        category = "Quản lý";
    }
    
    console.log(`Xếp loại: ${category}`);
} else {
    console.log("Vui lòng nhập số năm kinh nghiệm hợp lệ.");
}
