
let mang = [23, 5, 12, 7, 34, 1, 19, 3, 9, 15];
console.log("Mảng ban đầu:", mang);
mang.sort(function(a, b) {
  return a - b;
});
console.log("Mảng sau khi sắp xếp tăng dần:", mang);