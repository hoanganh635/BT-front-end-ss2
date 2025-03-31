       // Hàm kiểm tra chuỗi đối xứng
       function isPalindrome(str) {
        // Loại bỏ khoảng trắng và chuyển chuỗi về chữ thường
        const cleanedStr = str.replace(/\s+/g, '').toLowerCase();

        // Đảo ngược chuỗi và so sánh với chuỗi gốc
        const reversedStr = cleanedStr.split('').reverse().join('');
        
        return cleanedStr === reversedStr;
    }

    // Nhận chuỗi từ người dùng thông qua prompt()
    const userInput = prompt("Nhập vào một chuỗi:");

    // Kiểm tra chuỗi đối xứng và thông báo cho người dùng
    if (isPalindrome(userInput)) {
        alert("Đây là chuỗi đối xứng (Palindrome).");
    } else {
        alert("Đây không phải là chuỗi đối xứng (Palindrome).");
    }