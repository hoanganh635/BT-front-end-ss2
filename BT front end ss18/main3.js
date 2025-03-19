let id = prompt("mời bạn nhập id");
if (id == null){
    console.log("Cancelled");
} else if( id == "ADMIN") {
    let password = prompt("mời bạn nhập mật khẩu");   
        if (password == "THEMASTER"){
            console.log("wellcom");
        } else if ( password == null) {
            console.log("Cancelled");
        } else {
            console.log("Wrongpassword");
        }
} else {
    console.log("i dont know you");
}
