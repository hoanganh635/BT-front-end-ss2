let array = [];
array.push("hello");
array[array.length] = 5;
array.unshift("world");
array.splice(1,0,"love");
console.log(array);