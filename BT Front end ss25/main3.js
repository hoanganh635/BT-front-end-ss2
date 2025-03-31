function showEvenNumbers(arr) {
    
    const evenNumbers = arr.filter(num => num % 2 === 0);

    
    console.log("Các số chẵn trong mảng là:", evenNumbers);
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
showEvenNumbers(array); 