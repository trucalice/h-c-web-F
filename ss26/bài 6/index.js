function formatDates(dates) {
    if (!Array.isArray(dates)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    if (dates.length === 0) {
        console.log("Mảng không có phần tử nào");
        return;
    }

    let formattedDates = [];
    
    for (let i = 0; i < dates.length; i++) {
        let parts = dates[i].split("-");
        if (parts.length === 3) {
            let formattedDate = parts[2] + "/" + parts[1] + "/" + parts[0];
            formattedDates.push(formattedDate);
        }
    }

    console.log(formattedDates);
}

formatDates(["2025-03-10", "2024-12-25", "2023-07-01"]);
formatDates([]);
formatDates("abc");