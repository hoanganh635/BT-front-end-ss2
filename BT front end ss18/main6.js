    let year = parseInt(prompt("mời bạn nhập một năm bất kỳ"));
    if( year%400 ==0 || (year%4 ==0 && year%100 !=0)){
        console.log( year +" là năm nhuận");
    } else {
        console.log(year +" không phải là năm nhuận");
    }


