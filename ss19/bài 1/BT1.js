let number = parseInt(prompt("Hãy nhập tháng(1-12)"));
  
    while (number < 1 || number > 12 || isNaN(number)) {
        alert("Tháng không hợp lệ");
        number = parseInt(prompt("Hãy nhập lại tháng (1->12)"));  
    }   

    if (number === 1 || number === 3 || number === 5 || number ===7 || number === 8 || number === 10 || number === 12){
        document.writeln("Tháng " + number + " có 31 ngày" );
    } else if (number === 2){
        document.writeln("Tháng 2 có 28 hoặc 29 ngày năm nhuận");
    }
    else{
        document.writeln("Tháng " + number + " có 30 ngày");
    }


