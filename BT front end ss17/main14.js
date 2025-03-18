// Nhập bán kính và chiều cao từ người dùng
let radius = parseFloat(prompt("Nhập bán kính của hình trụ: "));
let height = parseFloat(prompt("Nhập chiều cao của hình trụ: "));

// Kiểm tra nếu nhập không hợp lệ
if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
    console.log("Vui lòng nhập giá trị hợp lệ cho bán kính và chiều cao!");
} else {
    // Tính toán các giá trị
    let chuViDay = 2 * Math.PI * radius;
    let dienTichXungQuanh = chuViDay * height;
    let dienTichToanPhan = dienTichXungQuanh + 2 * (Math.PI * radius * radius);
    let theTich = Math.PI * radius * radius * height;

    // In kết quả ra màn hình
    console.log("Chu vi đáy: " + chuViDay.toFixed(2));
    console.log("Diện tích xung quanh: " + dienTichXungQuanh.toFixed(2));
    console.log("Diện tích toàn phần: " + dienTichToanPhan.toFixed(2));
    console.log("Thể tích: " + theTich.toFixed(2));
}