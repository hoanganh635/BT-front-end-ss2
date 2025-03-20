let a = parseInt(prompt("mời bạn chọn loại quy đổi (nhập 1 để chuyển VND sang USD, nhập 2 để chuyển USD sang VND)"));
let USD = 1;
let VND = 23000;
switch (a){
    case 1:
        let VND_USD = parseFloat(prompt("mời bạn nhập số lượng VND"));
        let usd_change = VND_USD/VND;
        console.log(VND_USD +"VND quy đổi được "+ usd_change +" USD");  
    break;
    case 2:
        let USD_VND = parseFloat(prompt("mời bạn nhập số lượng USD"));
        let vnd_change = USD_VND*VND;
        console.log(USD_VND+" USD quy đổi được "+ vnd_change + " VND");
    break;
    default:
        console.log("mời bạn nhập lại ");
}
