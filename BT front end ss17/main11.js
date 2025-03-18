// Truyền giá trị -5.5 và kiểm tra kết quả
let value1 = -5.5;
let result1 = Math.abs(value1);
console.log("Math.abs(" + value1 + ") = " + result1); // Kết quả: 5.5

// Giải thích: 
// Hàm Math.abs() trả về giá trị tuyệt đối của số truyền vào. 
// Vì -5.5 là số âm, nên giá trị tuyệt đối của nó là 5.5.

// Truyền giá trị 10 và kiểm tra kết quả
let value2 = 10;
let result2 = Math.abs(value2);
console.log("Math.abs(" + value2 + ") = " + result2); // Kết quả: 10

// Giải thích:
// Hàm Math.abs() trả về giá trị tuyệt đối của số truyền vào.
// Vì 10 là số dương, nên giá trị tuyệt đối của nó vẫn là 10.

// Sử dụng hàm Math.ceil()

// Truyền giá trị 4.4 và kiểm tra kết quả
let value3 = 4.4;
let result3 = Math.ceil(value3);
console.log("Math.ceil(" + value3 + ") = " + result3); // Kết quả: 5

// Giải thích:
// Hàm Math.ceil() làm tròn số lên số nguyên gần nhất.
// Vì 4.4 gần 5 hơn nên kết quả là 5.

// Truyền giá trị 5.8 và kiểm tra kết quả
let value4 = 5.8;
let result4 = Math.ceil(value4);
console.log("Math.ceil(" + value4 + ") = " + result4); // Kết quả: 6

// Giải thích:
// Hàm Math.ceil() làm tròn số lên số nguyên gần nhất.
// Vì 5.8 gần 6 hơn nên kết quả là 6.

// Sử dụng hàm Math.floor()

// Truyền giá trị 5.7 và kiểm tra kết quả
let value5 = 5.7;
let result5 = Math.floor(value5);
console.log("Math.floor(" + value5 + ") = " + result5); // Kết quả: 5

// Giải thích:
// Hàm Math.floor() làm tròn số xuống số nguyên gần nhất.
// Vì 5.7 gần 5 hơn nên kết quả là 5.

// Truyền giá trị 6.1 và kiểm tra kết quả
let value6 = 6.1;
let result6 = Math.floor(value6);
console.log("Math.floor(" + value6 + ") = " + result6); // Kết quả: 6

// Giải thích:
// Hàm Math.floor() làm tròn số xuống số nguyên gần nhất.
// Vì 6.1 gần 6 hơn nên kết quả là 6.

// Sử dụng hàm Math.round()

// Truyền giá trị 10.1 và kiểm tra kết quả
let value7 = 10.1;
let result7 = Math.round(value7);
console.log("Math.round(" + value7 + ") = " + result7); // Kết quả: 10

// Giải thích:
// Hàm Math.round() làm tròn đến số nguyên gần nhất.
// Vì 10.1 gần 10 hơn nên kết quả là 10.

// Truyền giá trị 20.6 và kiểm tra kết quả
let value8 = 20.6;
let result8 = Math.round(value8);
console.log("Math.round(" + value8 + ") = " + result8); // Kết quả: 21

// Giải thích:
// Hàm Math.round() làm tròn đến số nguyên gần nhất.
// Vì 20.6 gần 21 hơn nên kết quả là 21.