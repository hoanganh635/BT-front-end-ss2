// Nhập bán kính từ người dùng
let radius = parseFloat(prompt("Nhập bán kính của hình cầu: "));

// Kiểm tra nếu nhập không hợp lệ
if (isNaN(radius) || radius <= 0) {
    console.log("Vui lòng nhập giá trị hợp lệ cho bán kính!");
} else {
    // Tính toán các giá trị
    let theTich = (4 / 3) * Math.PI * Math.pow(radius, 3);
    let dienTichBeMat = 4 * Math.PI * Math.pow(radius, 2);
    let chuViLonNhat = 2 * Math.PI * radius;

    // In kết quả ra màn hình
    console.log("Thể tích hình cầu: " + theTich.toFixed(2));
    console.log("Diện tích bề mặt: " + dienTichBeMat.toFixed(2));
    console.log("Chu vi lớn nhất: " + chuViLonNhat.toFixed(2));
}