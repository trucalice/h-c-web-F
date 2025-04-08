let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];

let cart = [];

function displayProductsByCategory() {
    let kinhProducts = products.filter(p => p.category.toLowerCase().includes("kinh"));
    let mongProducts = products.filter(p => p.category.toLowerCase().includes("mông"));
    let result = "";

    if (kinhProducts.length > 0) {
        result += "Danh mục: món ăn dân tộc Kinh\n";
        kinhProducts.forEach(p => {
            result += `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}đ, Số lượng: ${p.quantity}\n`;
        });
    } else {
        result += "Không có sản phẩm thuộc dân tộc Kinh.\n";
    }

    result += "\n-----------------------------\n";
    if (mongProducts.length > 0) {
        result += "Danh mục: món ăn dân tộc Mông\n";
        mongProducts.forEach(p => {
            result += `ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price}đ, Số lượng: ${p.quantity}\n`;
        });
    } else {
        result += "Không có sản phẩm thuộc dân tộc Mông.\n";
    }

    alert(result);
}

function buyProduct() {
    let buyId = +prompt(`Nhập vào Id sản phẩm muốn mua`);
    let filltedProduct = products.filter(p => p.id == buyId);
    if (filltedProduct.length == 0) {
        alert("Sản phẩm không có trong cửa hàng");
    } else {
        filltedProduct.forEach(p => {
            alert(`sản phẩm: ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price} Số lượng: ${p.quantity}`);
            let buyQuantity = +prompt(`nhập vào số lượng muốn mua`);
            p.quantity -= buyQuantity;
            if (p.quantity > 0) {

                //thêm sản phẩm mua vào giỏ hàng
                let productInCart = cart.find(item => item.id === p.id);
                if (productInCart) {
                    // Nếu sản phẩm đã có trong giỏ, chỉ cần cập nhật số lượng
                    productInCart.quantity += buyQuantity;
                } else {
                    // Nếu sản phẩm chưa có trong giỏ, thêm mới vào giỏ
                    cart.push({ id: p.id, name: p.name, price: p.price, quantity: buyQuantity });
                }
                //thông báo mua thành công
                alert(`
                    mua thành công:\n
                    sản phẩm: ID: ${p.id}, Tên: ${p.name}, Giá: ${p.price} Số lượng còn lại: ${p.quantity}
                    `);
            } else {
                alert(`sản phẩm không còn đủ hàng`);
                p.quantity += buyQuantity;
            }
        })
    }
}

function sortProductsByPrice(){
    let choiceSort = prompt(`
        a.Tăng dần
        b.Giảm dần
        nhập lựa chọn: 
        `);
    let sorted;
    switch (choiceSort) {
        case "a":
            sorted= products.sort((a,b)=> a.price - b.price);
            displayProductsByCategory();
            break;
        case "b":
            sorted= products.sort((a,b)=> b.price - a.price);
            displayProductsByCategory();
            break;
        default:
            alert("Lựa chọn không hợp lệ");

    }
}

function calculateTotalPriceInCart(){
    let result = "Giỏ hàng của bạn:\n";
    cart.forEach(item => {
        result += `ID: ${item.id}, Tên: ${item.name}, Giá: ${item.price}đ, Số lượng: ${item.quantity}, Thành tiền: ${item.price * item.quantity}đ\n`;
    });
    
    // Tính tổng số tiền thanh toán
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    result += `Tổng số tiền thanh toán: ${total}đ`;
    alert(result);
}


function main() {
    let choice;
    while (choice != 5) {
        choice = +prompt(`
           \n=== MENU ===
    1. Hiển thị sản phẩm theo danh mục
    2. Mua sản phẩm
    3. Sắp xếp sản phẩm theo giá
    4. Tính tổng tiền trong giỏ hàng
    5. Thoát
    Nhập lựa chọn của bạn:
    `);
        switch (choice) {
            case 1:
                displayProductsByCategory();
                break;
            case 2:
                buyProduct();
                break;
            case 3:
                sortProductsByPrice();
                break;
            case 4:
                calculateTotalPriceInCart();
                break;
            case 5:
                alert("Cảm ơn bạn đã sử dụng chương trình!");
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    }
}
main();
