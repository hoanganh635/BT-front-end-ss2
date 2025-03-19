let math = parseFloat(prompt("mời bạn nhập điểm môn toán"));
let chemistry = parseFloat(prompt("mời bạn nhập điểm môn hóa"));
let english = parseFloat(prompt("mời bạn nhập điểm môn tiếng anh"));
let average = (math + chemistry + english)/3;
if (average > 8 || average == 8){
    console.log("bạn đạt học lực giỏi");
}else if (average > 6.5 && average < 7.9){
    console.log("bạn đạt học lực khá");
}else if (average > 5 && average < 6.4){
    console.log("bạn đât học lực trung bình");
}else {
    console.log("bạn đạt học lực yếu");
} 