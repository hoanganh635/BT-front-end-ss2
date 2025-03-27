let array = [];
let choice;
do{
    console.log("========================================MENU========================================");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm  phần tử lớn nhất trong mảng và in ra chỉ số của nó ");
    console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
    console.log("5. Đảo ngược mảng");
    console.log("6. Kiểm tra mảng có đối xứng không");
    console.log("7. Thoát chương trình");
    console.log("====================================================================================");
    choice = Number(prompt("mời bạn nhập vào lựa chọn của mình"));

switch(choice){
    case 1:
        console.log("1. Nhập mảng số nguyên");
        let addnumber = Number(prompt("mời bạn nhập số phần tử của mảng array"));
        if(!Number.isInteger(addnumber) || addnumber <= 0){
            console.log("không hợp lệ, mởi nhập lại")
        } else {
            for( let i = 0; i< addnumber; i++){
            let element = Number(prompt("mời bạn nhập phần tử thứ "+(i+1)));
            if(Number.isInteger(element)){
                array.push(element);
            } else {
                console.log("ko hợp lệ, mời nhập lại");
                i--;
            }
            }
        }       
        break;

    case 2:
        console.log("2. Hiển thị mảng");
        console.log("mảng array sau khi nhập các phần tử là " + array);
        break;

    case 3:
        console.log("3. Tìm  phần tử lớn nhất trong mảng và in ra chỉ số của nó ");
        let max = array[0];
        let index =0;
        for(let i = 1;i < array.length;i++){
            if(array[i] > max){
                max = array[i];
                index = i;    
            }
        }
        console.log("phần tử lớn nhất là: " +max+ " tại vị trí thứ "+index);
        break;

    case 4:
        console.log("4. Tính tổng và trung bình cộng của các số dương trong mảng");
        let sum= 0;
        let average= 0;
        let count =0;
        for(let i = 0; i< array.length;i++){
            if(array[i] > 0){
                sum += array[i]
                count += 1;
                average = sum/count;  
            }            
        }
        console.log(`tổng là ${sum}, trung bình là: ${average}`);
        break;

    case 5:
        console.log("5. Đảo ngược mảng");
        let array1 = [];
        for(let i = array.length-1;i >= 0; i--){
            array1.push(array[i]);
        }
        array = array1;
        console.log("mảng sau  đão ngc là "+ array );
        break;

    case 6:
        console.log("6. Kiểm tra mảng có đối xứng không");
        let array2 = [];
        for(let i = array.length-1;i >= 0 ; i --){
            array2.push(array[i]);
        }
        if (JSON.stringify(array) === JSON.stringify(array2)) {
            console.log("là mảng đối xứng");
        } else {
            console.log("là mảng không đối xứng");
        }
        break;

    case 7:
        console.log("7. Thoát chương trình");
        console.log("thoát chương trình");
        break;

    default:
        console.log("ko hợp lệ, mời nhập lại");
}
if(choice == 7){
    break;
}
}
while(true);