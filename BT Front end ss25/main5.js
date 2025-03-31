function countPositiveIntegers(arr) {
    // Dùng filter để lọc ra các số nguyên dương
    const positiveIntegers = arr.filter(num => Number.isInteger(num) && num > 0);
    
    // Trả về số lượng các số nguyên dương
    return positiveIntegers.length;
}


const array = [1, -5, 7, 3.5, 9, 'hello', 10];
console.log(countPositiveIntegers(array));