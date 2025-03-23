let n = parseInt(prompt("Nhập vào một số nguyên:"));
let laSoNguyenTo = true;

if (n <= 1) {
  laSoNguyenTo = false; 
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      laSoNguyenTo = false;
      break;
    }
  }
}

if (laSoNguyenTo) {
  alert(n + " là số nguyên tố.");
} else {
  alert(n + " không phải là số nguyên tố.");
}