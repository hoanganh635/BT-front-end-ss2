let a = parseInt(prompt("mời bạn nhập giá trị a"));
let b = parseInt(prompt("mời bạn nhập giá trị b"));
let c = parseInt(prompt("mời bạn nhập giá trị c"));
let mit = a + b;
let mir = a + c;
let mio = b + c;
let max,min;

if ( mit > mir && mir > mio){
    max == a;
    min == c;
    console.log("max là :"+ a);
} else if ( mit > mir && mir < mio){
    max == b;
    console.log("max la: " +b);
} else if ( mit < mir && mir < mio){
    max == c;
    console.log("max la: " +c);
} else if ( mit < mir && mir > mio && a > c){
    max == a;
    console.log("max la: " +a);
} else {
    max == c;
    console.log("max la: " +c);
}

    
