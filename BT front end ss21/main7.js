let money = parseFloat(prompt("mời bạn nhập vào số tiền gốc"));
let interest = parseFloat(prompt("mời ban nhập vào lãi suất mỗi tháng"));
let month = parseFloat("mơi bạn nhập vào số tháng gửi");
let interestafter1 = 0;

for (let i = 0;i <3;i ++){
    interestafter1 = money*interest;
    money = interestafter1 + money

}
document.writeln(money);