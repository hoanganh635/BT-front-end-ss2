
let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Vui lòng nhập các số hợp lệ!");
} else {
    
    
        let delta = b * b - 4 * a * c;

        if (delta < 0) {
            document.writeln("Phương trình vô nghiệm.");
        } else if (delta === 0) {
            let x = -b / (2 * a);
            document.writeln("Phương trình có nghiệm kép x = " + x);
        } else {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            document.writeln("Phương trình có 2 nghiệm phân biệt:<br>");
            document.writeln("x1 = " + x1 + "<br>");
            document.writeln("x2 = " + x2);
        }
    }
