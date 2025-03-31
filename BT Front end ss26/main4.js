const array = [1,2,3,5,8,6,7,9,10,15,20];
function checkNumber (num){
    if (num <= 1){
        return false;
    } 
    for (let i = 2; i <= Math.sqrt(num);i ++){
        if(num %i == 0){
            return false;
        } 
    }   
    return true; 
}

let check = array.filter(checkNumber);
console.log(check);




