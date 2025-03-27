let array = [1,2,3]; // Nhóm trưởng nên chạy case 7 trước , mở màn hình console rồi check các case khác !!
let choice = null;
while(true){
console.log(" ==============================MENU============================== ");
console.log("1. Nhập mảng");
console.log("2. Hiển thị mảng");
console.log("3. Tìm thành phần lớn nhất và nhỏ nhất trong mảng");
console.log("4. Tính tổng các thành phần trong mảng");
console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
console.log("6. Sắp xếp mảng tăng dần");
console.log("7. Thoát chương trình ");
console.log(" ================================================================ ");


     choice = Number(prompt(" \n Mời bạn nhập lựa chọn !!",0));
switch(choice){
    case 1: 
    console.log("1. Nhập mảng");
    let num = prompt("số lượng phần tử bạn muốn thêm cho mảng array là: ");
    for ( let i = 0; i < num; i++){
        let element = Number(prompt("phần tử thứ "+(i+1)));
        if( !isNaN(element) && Number.isInteger(element)){
            array.push(element);
        } else {
            alert(" đây ko phải là số nguyên, ko hợp lệ, mời nhập lại");
            i --;
        }
    }
    break;
    
    case 2: 
    console.log("2. Hiển thị mảng");
    console.log("mảng array của bạn vửa nhập là: array[] = "+ array);
    break;

    case 3:
    console.log("3. Tìm thành phần lớn nhất và nhỏ nhất trong mảng");
    for (let i = 0;i < array.length -1; i++){
        for ( let j = 0; j < array.length -1 -i; j++){
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }   
    }
    let min = array[0];
    let max = array[array.length-1];
    console.log("min là: "+min+ "\n  max là "+max );
    break;

    case 4:
    console.log("4. Tính tổng các thành phần trong mảng");
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];

    }
    console.log("tổng của các phần tử trong mảng là: sum = "+sum);
    break;

    case 5:
    console.log("5. Tìm số lần xuất hiện của một phần tử trong mảng");
    let check = Number(prompt("mời bạn nhập vào phần tử cần tìm kiếm trong mảng"));
    let check1 = 0;
    let count = 0;
    if (isNaN(check)) {
        console.log("Giá trị nhập không hợp lệ.");
        break;
    }    
    for(let i = 0;i < array.length;i++){
        if(array[i] == check){
            count += 1;
            check1 = 1;
        }
    }
    if(check1 == 1){
        console.log("phần tử "+ check +" xuất hiện "+ count+ " lần");
    } else {
        console.log("phần tử không tồn tại trong mảng");
    }
    break;

    case 6:
    console.log("6. Sắp xếp mảng tăng dần");
    for (let i = 0;i < array.length -1; i++){
        for ( let j = 0; j < array.length -1 -i; j++){
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }   
    }
    console.log("mảng sau sắp xếp là array = "+ array);
    break;

    case 7:
    console.log("7. Thoát chương trình ");
    alert("chương trình kết thúc");
    break;

    default: 
    console.log("lựa chọn ko hợp lệ, mời nhập lại");
    break;

}
    if(choice == 7){
    break;
    }
}
