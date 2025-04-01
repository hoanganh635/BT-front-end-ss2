let choice = null;
let studenLlist = [];
let checkswitch = true;
do{
    console.log("========================================MENU========================================");
    console.log("1. Nhập danh sách sinh viên");
    console.log("2. Hiển thị danh sách sinh viên");
    console.log("3. Tìm sinh viên theo tên");
    console.log("4. Xòa sinh viên ra khỏi danh sách");
    console.log("5. Thoát");
    console.log("====================================================================================");

    choice = Number(prompt("mời bạn nhập vào lựa chọn"));
    
    switch(choice){
        case 1:
            console.log("1. Nhập danh sách sinh viên");
            let numberstudent = Number(prompt("mời bạn nhập số lượng sinh viên"));
            if(isNaN(numberstudent) || !Number.isInteger(numberstudent) || numberstudent <= 0){
                console.log("ko hợp lệ, mời nhập lại");
            } else {
                for (let i = 0; i < numberstudent; i++){
                    let inputName = prompt("nhập tên sinh viên thứ "+ (i+1));
                    if (/^[a-zA-Z\s]+$/.test(inputName)){
                        studenLlist.push(inputName);
                    } else {
                        console.log(" tên không hợp lệ mời nhập lại");
                        i--;
                    }
                }
            }
        break;

        case 2:
            console.log("2. Hiển thị danh sách sinh viên");
            console.log(studenLlist);
        break;

        case 3:
            console.log("3. Tìm sinh viên theo tên");
            let name = prompt("mời bạn nhập tên sinh viên cần tìm");
            let a = findName(studenLlist,name);
            console.log("có sinh vien "+a);
        break;

        case 4:
            console.log("4. Xòa sinh viên ra khỏi danh sách");
            let deletename1 = prompt("mời bạn nhập vào tên sinh viên cần xóa");
            console.log("mảng sau khi xóa bỏ " + deletename1 +" là " +deleteName(studenLlist,deletename1));


            

        break;

        case 5:
            alert("thoát chương trình");
            checkswitch = false;

        break;
   
    }
    if(checkswitch == false){
        break;
    }
}
while(true);

function findName (num, index){
 
    let filtered = [];
    for (let i = 0; i< num.length;i ++){
        if (num[i] === index){
            filtered.push(num[i]); 
        }             
        return filtered;
    }

}

function deleteName(num,index){
    let arraydelete = [];
    for( let i = 0;i < num.length; i ++){
        if(num[i] !== index ){
            arraydelete.push(num[i]);
        }
    }

    
    return arraydelete;
}