let password = "hello";
for (let i =0;i < 5;i ++){
    let num = prompt("mời bạn nhập password, tối đa 5 lần");
    
    if ( num !== password){
        alert("mật khẩu ko chính xác");
        continue;
    } else {
        alert("mật khẩu chính xác");
        
    }
}