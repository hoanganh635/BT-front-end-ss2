let car = [];
let products = [
    { id: 1, name: 'mèn mén', category: 'món ăn dân tộc mông', price: 100000, quantity: 10 },
    { id: 2, name: 'bánh đậu xanh', category: 'món ăn dân tộc kinh', price: 200000, quantity: 5 },
    { id: 3, name: 'bánh tráng', category: 'món ăn dân tộc tninh', price: 150000, quantity: 8 },
];
let choice;

do{
    console.log("========================================Menu========================================");
    console.log("1. Hiển thị các sản phẩm theo tên danh mục");
    console.log("2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.");
    console.log("3. Sắp xếp các sản phẩm trong cửa hàng theo giá");
    console.log("4. Tính số tiền thanh toán trong giỏ hàng.");
    console.log("5. Thoát");
    console.log("====================================================================================");

    choice = +prompt("mời bạn nhập vào một lựa chọn");
    switch(choice){
        case 1:
            console.log("1. Hiển thị các sản phẩm theo tên danh mục");
            let a = prompt("danh mục sản phẩm bạn muốn hiển thị");
            showallowcategory(a);

        break;

        case 2:
            console.log("2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.");


        case 5:
            alert("thoát");
        break;

        default:
            console.log("lựa chọn của bạn không hợp lệ");
        break;
    }
    if(choice == 5)
        break;
}
while(true);

function showallowcategory (categoryname){
    let filteredproducts = products.filter(product => product.category === categoryname);
    let show = filteredproducts.forEach(product => {
        console.log(`id: ${product.id}, name: ${product.name}, category: ${product.category}, price: ${product.price}, quantity: ${product.quantity}`);
    });
};

function selectProductById(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let quantityToBuy;
        do {
            quantityToBuy = parseInt(prompt(`Nhập số lượng muốn mua (tối đa ${product.quantity}):`));
            if (isNaN(quantityToBuy) || quantityToBuy <= 0 || quantityToBuy > product.quantity) {
                alert('Số lượng không hợp lệ. Vui lòng nhập lại.');
            }
        } while (isNaN(quantityToBuy) || quantityToBuy <= 0 || quantityToBuy > product.quantity);
        addToCart(product, quantityToBuy);
    } else {
        alert('Sản phẩm không tồn tại.');
    }
}

function sortProductsByPriceAsc() {
    products.sort((a, b) => a.price - b.price);
    console.log('Sản phẩm đã được sắp xếp theo giá tăng dần.');
}

function sortProductsByPriceDesc() {
    products.sort((a, b) => b.price - a.price);
    console.log('Sản phẩm đã được sắp xếp theo giá giảm dần.');
}

function calculateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Tổng tiền thanh toán: ${total}`);
    return total;
}