let a = parseInt(prompt("mời bạn nhập giá trị a"));
let b = parseInt(prompt("mời bạn nhập giá trị b"));
let c = parseInt(prompt("mời bạn nhập giá trị c"));
let denta = (b*b) - (4*a*c);
if (denta < 0){
    console.log("PT vô nghiệm");
} else if (denta = 0){
   let x = -b / (2*a);
   console.log("PT CÓ 2 nghiệm phân biệt là: x = "+x); 
} else {
    let x1 = (-b + Math.sqrt(denta))/(a*2);
    let x2 = (-b - Math.sqrt(denta))/(a*2);
    console.log("PT có 2 nghiệm phân biệt là "+ x1 +" và "+ x2);
}