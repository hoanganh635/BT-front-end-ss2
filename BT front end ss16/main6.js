
let usdAmount = parseFloat(prompt("Nhập số tiền (USD):"));

// tỷ giá
const exchangeRate = 25000;

// Chuyển đổi sang VND
let vndAmount = usdAmount * exchangeRate;

// Hiển thị kết quả
alert(usdAmount + " USD tương đương với " + vndAmount.toLocaleString() + " VND");