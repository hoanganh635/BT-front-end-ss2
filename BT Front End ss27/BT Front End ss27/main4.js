const array = [2,4,6,8,10];
console.log("mảng array có phai la dãy cấp số cộng không : " +checkcapso(array));

 function checkcapso(arr){
    let check = true;

    let valuemid = array[1] - array[0];
    for(let i = 1;i< array.length - 1;i++){
        if((array[i+1] - array[i]) != valuemid) {
            check = false;
        }
    }   
    return check;

 }