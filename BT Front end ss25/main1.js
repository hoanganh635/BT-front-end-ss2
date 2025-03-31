function findMin(arr) {
    if (arr.length === 0) {
        return undefined; 
    }

    let min = arr[0];  

    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];  
        }
    }

    return min;  
}

const array = [12, 5, 8, 1, 19];
console.log(findMin(array));