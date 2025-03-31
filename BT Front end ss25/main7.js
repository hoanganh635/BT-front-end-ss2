function capitalizeFirstLetter(str) {
    // Tách chuỗi thành mảng các từ, rồi biến ký tự đầu tiên của mỗi từ thành chữ in hoa
    return str.split(' ')  // Tách chuỗi thành mảng các từ
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Biến chữ cái đầu tiên thành chữ in hoa
              .join(' ');  // Nối lại thành chuỗi
}


const inputString = "hello world from chatgpt";
const result = capitalizeFirstLetter(inputString);
console.log(result);  