let n = Number(prompt("mời bạn nhập vào số phần tử của mảng array"));
let array = [];
if(n < 0 || isNaN(n)){
    console.log("số lượng phần tử không được âm")
} else if (n === 0){
    console.log("mảng không có phần tử")
} else {
    for(let i = 0; i < n; i++){
        let element = prompt("mời bạn nhập vào phần tử thứ "+ (i+1));
        array.push(element);
    }
}
let check = 1;
let index = [];
let sum = 0;
for (let i = 0; i < array.length; i++){
    if (!isNaN(array[i])){
        check = 0;
        index.push(array[i]);
        sum += Number(array[i]);
        
    }
    
}
if (check){
    console.log("không có phần tử nào là số");
} else {
    console.log(sum);
}


