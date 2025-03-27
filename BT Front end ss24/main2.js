let array = [];
let choice = null;
do{
    console.log("========================================MENU========================================");
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm các phần tử chẵn và lẻ ");
    console.log("4. Tính trung bình cộng của mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ 2 tron mảng");
    console.log("7. Thoát chương trình");
    console.log("====================================================================================");
    choice = Number(prompt("mời bạn nhập vào lựa chọn của mình"));
    switch(choice){
        case 1:
            console.log("1. Nhập mảng số nguyên");
            let addnumber = Number(prompt("số lượng phần tử bạn muốn xuất hiện trong mảng array là:"));
            if(!Number.isInteger(addnumber) || addnumber <= 0){
                console.log("không hợp lệ, mời nhập lại");
                break;
            } else {
                let element;
                for(let i = 0; i< addnumber; i++){
                    element = Number(prompt("phần tử thứ "+(i+1)));
                    if (Number.isInteger(element)){
                        array.push(element);
                    } else {
                        console.log("phần tử nhập vào không hợp lệ, mời nhập lại");
                        i --;
                    }
                }
            }
            break;

        case 2:
            console.log("2. Hiển thị mảng");
            console.log(" Mảng array sau khi nhập là: "+array);
            break;
        
        case 3:
            for(let i = 0;i< array.length;i++){
                if(array[i]%2 == 0){
                    console.log(array[i] +" là phần tử chẵn");
                } else {
                    console.log(array[i]+ " là phần tử lẻ");                }
            }
            break;
        
        case 4:
            console.log("4. Tính trung bình cộng của mảng");
            let average = 0;
            let sum = 0;
            for(let i = 0; i<array.length;i++){
                 sum += array[i];
            }
            average = sum / array.length;
            console.log("trung bình cộng của mảng là: average = "+average);
            break;

        case 5:
            console.log("5. Xóa phần tử tại vị trí chỉ định");
            // let array1 = [];
            // let index = Number(prompt("nhập vị trí bạn muốn xóa"));
            // if(!Number.isInteger(index ) || isNaN(index) || index < 0 || index > (array.length-1)){
            //     console.log("vị trí bạn muốn xóa không hợp lệ");
            // } else { 
                
            //     for (let i = 0; i< array.length; i++){
            //         if(i != index){
            //             array1.push(array[i]);
            //         }
            //     }
            // }
            // array = array1;
            // console.log("mảng array sau khi xóa phần tử thứ "+index+ " là "+array);

            let index = Number(prompt("nhập vị trí bạn muốn xóa"));
            if(!Number.isInteger(index ) || isNaN(index) || index < 0 || index > (array.length-1)){
                console.log("vị trí bạn muốn xóa không hợp lệ");
            } else { 
                for(let i = 0;i<array.length;i++){
                    if(index == i){
                        array.splice(array[i],1);
                    }
                }
            }
            console.log("mảng array sau khi xóa phần tử thứ "+index+ " là "+array);
            break;

        case 6:
            console.log("6. Tìm phần tử lớn thứ 2 tron mảng");
            for(let i = 0; i< array.length-1; i++){
                for(let j = 0;j < array.length-1-i;j++){
                    if(array[j] < array[j+1]);
                    let temp = array[j+1];
                    array[j+1] = array[j];
                    array[j] = temp;
                }
            }
            if(array[0] === array[1]){
                console.log("ko có số lớn thứ 2");
            } else {
                console.log("số lớn thứ 2 là "+array[1]);
            }
            break;


        case 7:
            console.log("7. Thoát chương trình");
            alert(" chương trình kết thúc");
            break;
        default:
            console.log("không hợp lệ, mời nhập lại");
            break;
    }
    if (choice == 7){
        break;
    }
}
while(true);