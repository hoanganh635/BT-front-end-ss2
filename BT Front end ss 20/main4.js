let chuoi = prompt("mời bạn nhập vào một chuỗi ngẫu nhiên");
let kytu = prompt("mời bạn nhập vào một ký tự ngẫu nhiên");
let timthay = 1;
for (let i = 0; i < chuoi.length; i ++){
    if (chuoi[i] === kytu){
        timthay = 0;
        console.log("đã tìm thấy ký tự "+kytu+ " trong chuỗi "+ chuoi);
    break;
    }
}
if ( timthay !== 0 ){
    console.log("ko tom thay");
}