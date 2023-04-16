// Tạo 1 biến lưu trữ nhiều giá trị => array
var listNV = ['Nam', 'Quân', 'Vĩnh', 'Khải', 'Song', 'Thanh']
// Cú pháp truy xuất giá trị trong mảng: listNV[vị_trí]
// console.log(listNV[2]);
// Thay đổi giá trị của phần tử trong mảng;
// listNV[4]='Nguyên';
// console.log(listNV[4]);

// In tất cả các giá trị trong mảng lần lượt ra console.log
for (i = 0; i <= listNV.length - 1; i++) {
    console.log(listNV[i]);
}
// Một số thao tác trên mảng
// CRUD: (create: tạo, thêm . Read : Tìm kiếm hoặc đọc, Update: chỉnh sửa; delete:xoá)
// create ==> Thêm 1 phần tử vào mảng
/*
Create: push(giá trị): thêm giá trị vào cuối array - thường hay sử dụng
    unshift(giá trị): thêm 1 giá trị vào đầu arra
*/
listNV.push('Hạ');
console.log(listNV);
listNV.unshift('Nhi');
console.log(listNV);
/*
read: đọc dữ liệu

*/
var viTriCanDoc = 2;
console.log(listNV[viTriCanDoc])
/*
Update: Thay đổi giá trị trong mảng
b1: duyệt mảng
b2: tìm ra vị trí của giá trị(phần tử) để thay đổi

*/


var viTri = -1;
for (var index = 0; index < listNV.length; index++) {
    if (listNV[index] === 'Khải') {
        viTri = index;
    }
}
if (viTri !== -1) {
    listNV[viTri] = 'Phát';
    console.log(listNV);
}
/* 
delete: xoá phần tử trong mảng
b1: duyệt mảng
b2: tìm ra vị trí cần xoá
listNV.splice(vi_tri,1);

listNV.splice(5,1);

*/
var viTriCanTim = -1;
for (var i = 1; i < listNV.length; i++) {
    if (listNV[i] === 'Vĩnh') {
        listNV.splice(i, 1)
    }
}
console.log(listNV);


// ------------------------------------------
var arrNumber = [17, 25, 34, 47, 55, 49, 100, 200, 14]
// Bài 1
document.getElementById('btnThemMang').onclick = function () {
    var soNhap = +document.getElementById('nhap-so').value;
    arrNumber.push(soNhap);
    document.getElementById('ket-qua-b1').innerHTML = arrNumber

}
// Bài 2
document.getElementById('btnInSo').onclick = function () {
    var soMax = arrNumber[0];
    for (i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > soMax) {
            soMax = arrNumber[i]
        }
    }
    document.getElementById('ket-qua-b2').innerHTML = soMax
}
// Bài 3
document.getElementById('btnInViTri').onclick = function () {
    var viTriMin = -1;
    var soMin = arrNumber[0]
    for (i = 0; i < arrNumber.length; i++) {
        if (soMin > arrNumber[i]) {
            viTriMin = i;
        }
    }
    document.getElementById('ket-qua-b3').innerHTML = viTriMin;
}
// Bài 4
document.getElementById('btnXoaGiaTri').onclick = function () {
    var soCanXoa = +document.getElementById('nhapSoXoa').value;
    var soBiXoa = 0
    for (i = arrNumber.length - 1; i >= 0; i--) {
        if (soCanXoa === arrNumber[i]) {
            arrNumber.splice(i, 1);
            soBiXoa = soBiXoa + 1;
        }
    }
    if (soBiXoa > 0) {
        document.getElementById('ket-qua-b4').innerHTML = arrNumber
    } else {
        document.getElementById('ket-qua-b4').innerHTML = 'Không tìm thấy giá trị cần xoá trong mảng'
    }
}
// -----------------------------------------
// Truy xuất thẻ thông qua tagName
var arrTagSection = document.getElementsByTagName('section');
// console.log(arrTagSection);
// arrTagSection[1].style.color = 'blue'
// arrTagSection[2].innerHTML = 'hello';
// Tăng fontsize của 3 thẻ lên 50px;
// for (i = 0; i <= arrTagSection.length; i++) {
//     arrTagSection[i].style.fontSize = '50px'
// }
// Truy xuất thẻ thông qua class name
var arrTagByClass = document.getElementsByClassName('text-content');
console.log(arrTagByClass);
for (i = 0; i <= arrTagByClass.length; i++) {
    // arrTagByClass[i].style.fontSize = '17px';
    // arrTagByClass[i].style.color = 'red';
}
// Truy xuất thẻ thông qua name
var arrTagByName = document.getElementsByName('abc');
for (i = 0; i < arrTagByName.length; i++) {
    arrTagByName[i].className = 'alert alert-danger my-2'
}
// Truy xuất qua selector
/* 
querrySelector('selector'): truy xuất 1 thẻ (nếu không có 1 thẻ nào chưa selector thì trả về undefine.). Nếu có thẻ selector trùng thì lấy được 1 thẻ đầu tiên
querrySelectorAll: luôn trả về 1 mảng, nếu không có selector nào thì trả về mảng rỗng



*/
// document.querySelector('.content .text-content').style.padding = '50px';
// Bài tập form
// event.preventDefault: chặn sự kiện reload trang()
document.querySelector('form').onsubmit = function handleLogin(event) {
    /*
    event: là giá trị trả ra của sự kiện đang thao tác 
    event.target: thẻ đang xảy ra sự kiện
    event.preventDefault(): dừng các thao tác của browser lại
    
    
    */
    event.preventDefault();
    console.log(event.target.className);
    var arrInput = document.querySelectorAll('form.form-group input');
    console.log('username', arrInput[0].value);
    console.log('password', arrInput[1].value);
}