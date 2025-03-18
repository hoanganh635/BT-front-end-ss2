document.write("PT bậc 2 có biểu thức như sau : ax^2 + bx + c = 0 <br>");
 

let a = parseFloat(prompt("nhập giá trị a"));
let b = parseFloat(prompt("nhập giá trị b"));
let c = parseFloat(prompt("nhập giá trị c"));
let denta = b*b - (4*a*c);
if( denta < 0){
    document.write("PT vô nghiệm");
}
else if( denta == 0){
    let x  = -b/(2*a);

    document.write("PT có nghiệm kép là:" + x);
    
}
else {
    let x1 = (-b + Math.sqrt(denta))/(2*a);
    let x2 = (-b - Math.sqrt(denta))/(2*a);
    document.write("PT có 2 nghiệm phân biệt là x1 =" + x1 + "và x2 =" + x2);
}
