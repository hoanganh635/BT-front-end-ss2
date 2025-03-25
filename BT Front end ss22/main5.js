let array = [1,6,5,6,8];
let sumle = 0;
let sumchan = 0;
for (let i = 0;i < array.length;i ++){
    if(array[i]%2 !== 0){
        sumle += array[i];
    } else {
        sumchan += array[i];
    }
}
console.log(" tổng số lẻ là: "+sumle+ " tổng số chẵn là: "+sumchan);