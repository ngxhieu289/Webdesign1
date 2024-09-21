function tinhToan() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    
    var tong = a + b;
    var hieu = a - b;
    var tich = a * b;
    var thuong = b !== 0 ? a / b : 'Không thể chia cho 0';
    
    document.getElementById("ketqua").innerHTML = 
        "Phép tính: " + a + " + " + b + " = " + tong + "<br>" +
        "Phép tính: " + a + " - " + b + " = " + hieu + "<br>" +
        "Phép tính: " + a + " * " + b + " = " + tich + "<br>" +
        "Phép tính: " + a + " / " + b + " = " + thuong;
}

function giaiPhuongTrinh() {
    var a = parseFloat(document.getElementById("a_pt").value);
    var b = parseFloat(document.getElementById("b_pt").value);
    
    if (a === 0) {
        if (b === 0) {
            document.getElementById("ketqua_pt").innerHTML = "Phương trình có vô số nghiệm";
        } else {
            document.getElementById("ketqua_pt").innerHTML = "Phương trình vô nghiệm";
        }
    } else {
        var x = -b / a;
        document.getElementById("ketqua_pt").innerHTML = "Nghiệm của phương trình là: x = " + x;
    }
}

function tinhSoNgay() {
    var thang = parseInt(document.getElementById("thang").value);
    var nam = parseInt(document.getElementById("nam").value);
    
    var soNgay;
    if (thang < 1 || thang > 12) {
        soNgay = "Tháng không hợp lệ";
    } else {
        if (thang === 2) {
            if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
                soNgay = 29; // Năm nhuận
            } else {
                soNgay = 28; // Năm không nhuận
            }
        } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
            soNgay = 30;
        } else {
            soNgay = 31;
        }
    }
    
    document.getElementById("ketqua_thang").innerHTML = "Số ngày trong tháng " + thang + " là: " + soNgay;
}
