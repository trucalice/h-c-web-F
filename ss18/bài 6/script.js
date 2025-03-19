const year = parseInt(prompt("Nhập một năm bất kỳ:"), 10);

if (!isNaN(year)) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    
    if (isLeapYear) {
        console.log(`${year} là năm nhuận.`);
    } else {
        console.log(`${year} không phải là năm nhuận.`);
    }
} else {
    console.log("Vui lòng nhập một năm hợp lệ.");
}