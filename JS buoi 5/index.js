// Yêu cầu thay đổi fontsize của các thẻ ở ví dụ thành 30px
// document.getElementById('div-content').style.fontSize = '30px';
// document.getElementById('section-content').style.fontSize = '30px';
// document.getElementById('article').style.fontSize = '30px';
// Khaibáo hàm
/**
 * Hàm này dùng để thay đổi fs, color và background và id của thẻ
 * @param {*} idTag thuộc tính id của 1 thẻ nào đó 
 * @param {*} fSize thuộc tính fs của 1 thẻ nào đó dựa vào igTag
 * @param {*} colorText thuộc tính màu của 1 thẻ nào đó dựa vào igTag
 * @param {*} bgColor  thuộc tính màu bg của 1 thẻ nào đó dựa vào igTag
 * @returns 
 */
function chinhFont(idTag, size, colorText, bgColor) {
    document.getElementById(idTag).style.fontSize = size;
    document.getElementById(idTag).style.color = colorText;
    document.getElementById(idTag).style.backgroundColor = bgColor;
    return;
}
// Gọi hàm
chinhFont('div-content', '30px', 'red', 'black');
chinhFont('section-content', '30px', 'blue', 'orange');
// Đổi màu của thẻ article-content thành 50px và xanh lá
chinhFont('article', '50px', 'green', 'purple');
// Bài 2
var fSize = 100;
function tangGiamFont(donVi) {
    document.getElementById('home').style.fontSize = `${fSize = fSize + +donVi}px`;
    return
}
document.getElementById('tangFont').onclick = function () {
    tangGiamFont('5');
}
document.getElementById('giamFont').onclick = function () {
    tangGiamFont('-5');
}
// Bài tập 1:
/**
 * 
 * @param {*} diem1 điểm môn thứ nhất ng dùng nhập vào
 * @param {*} diem2 điểm môn thứ hai ng dùng nhập vào
 * @param {*} diem3 điểm môn thứ ba ng dùng nhập vào
 * @returns giá trị điểm trung bình
 */
function tinhDTB(diem1, diem2, diem3, idOutPut) {
    var d1 = +document.getElementById(diem1).value;
    var d2 = +document.getElementById(diem2).value;
    var d3 = +document.getElementById(diem3).value;
    var dtb = 0;
    dtb = (d1 + d2 + d3) / 3;
    document.getElementById(idOutPut).innerHTML = dtb.toFixed(2);
    return dtb;
}
document.getElementById('btnTinhDiem').onclick = function () {
    // Input: điểm các môn
    // Tính điểm tb
    var dtbKhoiA = tinhDTB('toan', 'ly', 'hoa', 'diem-tb-khoi-a');
    var dtbKhoiC = tinhDTB('van', 'su', 'dia', 'diem-tb-khoi-c');
}