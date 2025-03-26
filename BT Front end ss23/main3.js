let num = parseInt(prompt("mời bạn nhập vào số phần tử của 1 mảng"));
let array = [];
if (num <0 || isNaN(num)){
    console.log("số lượng phần tử không hợp lệ")
} else if (num === 0){
    console.log("mảng không có phần tử")
} else {
    
    for( let i = 0 ; i < num; i++){
        let element;
        while (true){
        let input = prompt("phần tử thứ " + (i+1) );
        element = parseFloat(input);
        if (!isNaN(element)){
            array.push(element);
            break;
        } else {
            console.log("phần tử không hợp lệ, vui lòng nhập lại");
        }          
        }
    }
    console.log("mảng của bạn đã nhập là array = "+ array );
}
let count = 0;
for (let i = 0 ; i < array.length; i ++){
    if (array[i] < 0 && array[i]%2 !== 0){
        count += 1;

    }
}
console.log(count);

