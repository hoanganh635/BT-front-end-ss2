function findMaxNumber() {
    let num1 = parseFloat(prompt("Nhập số thứ nhất:"));
    let num2 = parseFloat(prompt("Nhập số thứ hai:"));
    let num3 = parseFloat(prompt("Nhập số thứ ba:"));
    
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Vui lòng nhập số hợp lệ.");
        return;
    }
    
    if (num1 === num2 || num2 === num3 || num1 === num3) {
        alert("Vui lòng nhập 3 số khác nhau.");
        return;
    }
    
    let maxNum = Math.max(num1, num2, num3);
    alert("Số lớn nhất trong ba số là: " + maxNum);
}

findMaxNumber();
