let phones = [
    { id: 1, name: "iPhone 14", price: 20000000, quantity: 5, brand: "Apple" },
    { id: 2, name: "Samsung Galaxy S23", price: 18000000, quantity: 4, brand: "Samsung" },
    { id: 3, name: "Xiaomi Mi 13", price: 15000000, quantity: 6, brand: "Xiaomi" }
];

let cart = [];

function getUniqueBrands() {
    let brands = [];
    for (let phone of phones) {
        let brandLower = phone.brand.toLowerCase();
        if (!brands.includes(brandLower)) {
            brands.push(brandLower);
        }
    }
    return brands;
}

function displayPhonesByBrand() {
    let brands = getUniqueBrands();
    let result = "";
    brands.forEach(brand => {
        result += `\n=== Hãng: ${brand.toUpperCase()} ===\n`;
        phones.filter(p => p.brand.toLowerCase() === brand)
            .forEach(p => {
                result += `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}đ, SL: ${p.quantity}\n`;
            });
    });
    alert(result);
}

function addNewPhone() {
    let id = +prompt("Nhập ID:");
    if (phones.find(p => p.id === id)) {
        alert("ID đã tồn tại!");
        return;
    }
    let name = prompt("Nhập tên điện thoại:");
    let price = +prompt("Nhập giá:");
    let quantity = +prompt("Nhập số lượng:");
    let brand = prompt("Nhập hãng:");

    phones.push({ id, name, price, quantity, brand });
    alert("Thêm điện thoại thành công!");
}

function searchPhone() {
    let keyword = prompt("Nhập tên hoặc ID để tìm:");
    let found = phones.filter(p => 
        p.name.toLowerCase().includes(keyword.toLowerCase()) || p.id == keyword
    );

    if (found.length > 0) {
        let result = "Kết quả tìm kiếm:\n";
        found.forEach(p => {
            result += `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}đ, SL: ${p.quantity}, Hãng: ${p.brand}\n`;
        });
        alert(result);
    } else {
        alert("Không tìm thấy điện thoại.");
    }
}

function buyPhone() {
    let id = +prompt("Nhập ID điện thoại muốn mua:");
    let product = phones.find(p => p.id === id);
    if (!product) {
        alert("Không tìm thấy điện thoại.");
        return;
    }
    alert(`Điện thoại: ${product.name} - Giá: ${product.price} - Còn: ${product.quantity}`);
    let quantity = +prompt("Nhập số lượng muốn mua:");
    if (quantity <= 0 || quantity > product.quantity) {
        alert("Số lượng không hợp lệ.");
        return;
    }

    product.quantity -= quantity;
    let itemInCart = cart.find(item => item.id === product.id);
    if (itemInCart) {
        itemInCart.quantity += quantity;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity });
    }

    alert("Mua thành công!");
}

function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống.");
        return;
    }
    let result = "Thanh toán giỏ hàng:\n";
    let total = 0;
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        result += `ID: ${item.id}, Tên: ${item.name}, SL: ${item.quantity}, Thành tiền: ${itemTotal}đ\n`;
    });
    result += `\nTổng tiền thanh toán: ${total}đ\nThanh toán thành công!`;
    alert(result);
    cart = []; // Xóa giỏ hàng sau khi thanh toán
}

function sortPhonesByPrice() {
    let choice = prompt("a. Tăng dần\nb. Giảm dần\nNhập lựa chọn:");
    let sorted = [...phones];
    if (choice === "a") {
        sorted.sort((a, b) => a.price - b.price);
    } else if (choice === "b") {
        sorted.sort((a, b) => b.price - a.price);
    } else {
        alert("Lựa chọn không hợp lệ.");
        return;
    }

    let result = "Danh sách điện thoại đã sắp xếp:\n";
    sorted.forEach(p => {
        result += `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}đ, SL: ${p.quantity}, Hãng: ${p.brand}\n`;
    });
    alert(result);
}

function totalInventoryValue() {
    let total = phones.reduce((sum, p) => sum + p.price * p.quantity, 0);
    alert(`Tổng giá trị tồn kho: ${total}đ`);
}

function quantityByBrand() {
    let counts = {};
    phones.forEach(p => {
        let brand = p.brand.toLowerCase();
        counts[brand] = (counts[brand] || 0) + p.quantity;
    });

    let result = "Số lượng điện thoại theo hãng:\n";
    for (let brand in counts) {
        result += `${brand}: ${counts[brand]}\n`;
    }
    alert(result);
}

function main() {
    let choice;
    while (choice !== 10) {
        choice = +prompt(`
========= MENU =========
1. Hiển thị danh sách điện thoại theo hãng
2. Thêm điện thoại mới vào cửa hàng
3. Tìm kiếm điện thoại theo tên hoặc ID
4. Mua điện thoại
5. Thanh toán giỏ hàng
6. Sắp xếp điện thoại theo giá
7. Hiển thị tổng số tiền điện thoại trong kho
8. Hiển thị tổng số lượng theo từng hãng
9. Xem giỏ hàng
10. Thoát
=======================
Nhập lựa chọn của bạn:
        `);

        switch (choice) {
            case 1: displayPhonesByBrand(); break;
            case 2: addNewPhone(); break;
            case 3: searchPhone(); break;
            case 4: buyPhone(); break;
            case 5: checkout(); break;
            case 6: sortPhonesByPrice(); break;
            case 7: totalInventoryValue(); break;
            case 8: quantityByBrand(); break;
            case 9: calculateTotalPriceInCart(); break;
            case 10: alert("Tạm biệt!"); break;
            default: alert("Lựa chọn không hợp lệ.");
        }
    }
}

function calculateTotalPriceInCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng đang trống.");
        return;
    }
    let result = "Giỏ hàng hiện tại:\n";
    let total = 0;
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        result += `ID: ${item.id}, Tên: ${item.name}, Giá: ${item.price}, SL: ${item.quantity}, Thành tiền: ${itemTotal}đ\n`;
        total += itemTotal;
    });
    result += `\nTổng cộng: ${total}đ`;
    alert(result);
}

main();
