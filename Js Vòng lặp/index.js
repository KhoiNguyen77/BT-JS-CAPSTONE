/*
Xác định bài toán là vòng lặp:
 + Công việc cần thực hiện nhiều với 1 hoặc nhiều giá trị
 Xử lý bài toán về vòng lặp cần xác định 4 yếu tố
 + Biến điều kiện: Biến được gắn trong biểu thức lặp (while)
 + Khối lệnh cần thực hiện (công việc cần thực hiện)
 + Thay đổi biến điều kiện để vòng lặp có thể dùng

*/
// B1: Khai báo biến điều kiện 
var soLan = 1;
while (soLan <= 5) { //B2: biểu thức lặp
    console.log('Hello CyberSoft') //B3: khối lệnh
    //B4: Thay đổi giá trị tiến về điều kiện dừng
    soLan++;
}
// Bài 1
var inKQ = 0;
document.getElementById('btnInKQ').onclick = function () {
    var soLanXH = document.getElementById('so-lan-xh').value
    while (inKQ < soLanXH) {
        document.getElementById('ket-qua-b1').innerHTML += `<br> Hello Cybersoft`;
        inKQ++;
    }
}
// Bài 2:
var i = 1;
var tong = 0;
document.getElementById('tinhTong').onclick = function () {
    var n = document.getElementById('soNhapVao').value;
    while (i <= n) {
        tong += i;
        i++;
    }
    document.getElementById('ket-qua-b2').innerHTML = tong;
}
// Bài 3

document.getElementById('btnGiaiThua').onclick = function () {
    var i = 1;
    var giaiThua = 1;
    var so = document.getElementById('soN').value;
    while (i <= so) {
        giaiThua = giaiThua * i;
        i++;
    }
    document.getElementById('ket-qua-b3').innerHTML = giaiThua;
}
// bài 4
document.getElementById('btnTong').onclick = function () {
    var i = 1;
    var soNhap = +document.getElementById('soInput').value;
    var tongCacSo = 0;
    while (i <= soNhap) {
        if (i % 3 === 0) {
            tongCacSo = tongCacSo + i;
            i++;
        } else i++
    }
    document.getElementById('ket-qua-b4').innerHTML = tongCacSo;
}
// Bài 5

document.getElementById('btnKiemTraSoNT').onclick = function () {

    var soKiemTra = +document.getElementById('so').value;
    if (soKiemTra === 1) {
        document.getElementById('ket-qua-b5').innerHTML = '1 không phải là số nguyên tố'
        return
    }
    var kiemTraSo = true;
    var i = 2;
    while (i <= Math.sqrt(soKiemTra)) {
        if (soKiemTra % i === 0) {
            kiemTraSo = false;
            break;
        }
        i++;
    }
    if (kiemTraSo) {
        document.getElementById('ket-qua-b5').innerHTML = 'Đây là số nguyên tố'
    } else {
        document.getElementById('ket-qua-b5').innerHTML = 'Đây không phải là số nguyên tố'
    }
}
// Bafi 6

document.getElementById('btnInSao').onclick = function () {
    var soSao = document.getElementById('sao').value;
    var i = 1;
    var ketQua = "";
    // while (i <= soSao) {
    //     ketQua += `<i class="fa fa-star"></i>`;
    //     i += 1;
    // }
    for (i = 1; i <= soSao; i++) {
        ketQua += `<i class="fa fa-star"></i>`;
    }
    document.getElementById('ket-qua-b6').innerHTML = ketQua;
}
// Bài 7
document.getElementById('btnInMaTranSao').onclick = function () {
    hangInput = document.getElementById('soHang').value;
    cotInput = document.getElementById('soCot').value;
    htmlStr = "";
    for (i = 1; i <= hangInput; i++) {
        // for (n = 1; n <= cotInput; n++) {
        //     htmlStr += `<i class="fa fa-star"></i>`
        // }
        htmlStr += insoSao(cotInput)
        htmlStr += `<br>`
    }
    document.getElementById('ket-qua-b7').innerHTML = htmlStr;
}

function insoSao(soSaoCanIn) {
    var outPut = ""
    for (n = 1; n <= soSaoCanIn; n++) {
        outPut += `<i class="fa fa-star"></i>`;
    }
    return outPut
}
// Bài 8
document.getElementById('inSoNT').onclick = function () {
    var InputSo = +document.getElementById('soNguyenN').value;
    var ketQuaB8 = '';
    var ketquaTF;
    for (i = 2; i <= InputSo; i++) {
        ketquaTF = kiemTraNT(i);
        if (ketquaTF === true) {
            ketQuaB8 += `${i}`;
        }
    }
    // process
    // B1: In ra cac con so
    // B2: Kiem tra cac so do la so nguyen to thi moi in
    document.getElementById('ket-qua-b8').innerHTML = ketQuaB8;
}
function kiemTraNT(so) {     // input
    var output = true;
    for (n = 2; n <= Math.sqrt(so); n++) {
        if (so % n === 0) {
            output = false;
            break;
        }
        return output
    }
}
