let array =[1,2,5,6,9,7,"hello"];
let number = prompt("mời bạn nhập vào 1 số hay 1 ký tự bất kỳ");
let found = 1;
for (let i = 0;i < array.length;i ++){
    if(array[i] == number){
        found = 0;
        console.log("Bingo");
        break;    
    }
}
 if (found == 1){
    console.log("chúc may mắn");
 }

