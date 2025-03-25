let num = prompt("mời bạn nhập chuỗi số nguyên");
let array =num.split("");
let found = 1;
for(let i =0; i < array.length;i ++){
    if(isNaN(array[i])){
        found = 0;
        console.log("ky tu bạn nhập không hợp lệ là: "+ array[i] + "\n mời nhập lại");
        
    }
}
if (found){
    let reverse = array.reverse();
    console.log("dãy đảo ngược là: "+ reverse);
}