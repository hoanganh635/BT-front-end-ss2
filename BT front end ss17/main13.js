let money = parseFloat(prompt("Nhập số tiền gửi (VND):"));
let time = parseInt(prompt("Nhập số tháng gửi:"));


if (isNaN(money) || money <= 0) {
    alert("Vui lòng nhập số tiền hợp lệ.");
    return;
}
if (isNaN(time) || time <= 0) {
    alert("Vui lòng nhập số tháng hợp lệ.");
    return;
}

    
let rateYear = 4.3 / 100; // Lãi suất 4.3% mỗi năm
let rateMonth = rateYear / 12; // Lãi suất mỗi tháng


let interest = money * rateMonth * time;
let total = money + interest;


alert(`Kết quả tính toán:\nSố tiền lãi nhận được: ${interest.toFixed(2)} VND\nTổng số tiền sau ${time} tháng: ${total.toFixed(2)} VND`);
