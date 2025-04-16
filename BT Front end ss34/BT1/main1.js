let regisEmail = [
    {
        email : "mail1111",
        password : "1111" ,
        confirmpassword : true,
    }
]


function addToStorage(regisEmail){
localStorage.setItem("regisEmail",JSON.stringify(regisEmail));
}

function getDataFromStorage(){
 return JSON.parse(localStorage.getItem("regisEmail")) || [];
}

function addEmail(event){
 event.preventDefault()
    let a = getDataFromStorage()  || [];
    let getin4 = event.target;
    let newRegisEmail = {
        email : getin4.fillEmail.value ,
        password : getin4.fillPassword.value ,
        confirmPassword : getin4.check.value
    }



for(let i = 0; i< a.length;i++){
    if(a[i].email == newRegisEmail.email){
        alert("email đã tồn tại trong hệ thống rồi, mời nhập lại email")
        return
    }
}

if(newRegisEmail.password != newRegisEmail.confirmPassword){
    alert("ko trùng khớp , mời nhập lại")
    return
}
a.push(newRegisEmail)
addToStorage(a)
alert("bạn dẵ thêm thành công ")
}





