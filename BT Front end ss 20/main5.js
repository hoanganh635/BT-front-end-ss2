
let a = parseInt(prompt("Nhập số a:"));
let b = parseInt(prompt("Nhập số b:"));

let ketQua = 1;
for (let i = 1; i <= b; i++) {
  ketQua *= a;
}

// In kết quả ra màn hình
console.log(`${a} ^ ${b} = ${ketQua}`);
alert(`${a} ^ ${b} = ${ketQua}`);