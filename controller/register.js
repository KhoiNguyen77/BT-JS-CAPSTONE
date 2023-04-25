// Đăng ký : Post
import { Users } from "../models/Users.js";

document.querySelector('#registerSub').onclick = function () {
    //input:
    let usersNew = new Users();
    let arrayUsers = document.querySelectorAll(`#row input[type="input"]`)
    let gender = document.querySelectorAll(`input[name="gender"]`);
    let booleanGender;
    gender.forEach(item => {
        if (item.checked) {
            if (item.value === "m") { return booleanGender = true }
            else if (item.value === "f") {
                return booleanGender = false;
            };
        }
    });
    console.log(arrayUsers);
    for (let input of arrayUsers) {
        let { id, value } = input;
        usersNew[id] = value;
    }
    usersNew["gender"] = booleanGender;
    console.log("user", usersNew);

    if (!checkValid(usersNew)) return;



    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: usersNew
    });

    promise.then(function (ketQua) {
        console.log(ketQua.data);
    });
    promise.catch(function (err) {
        console.log('err', err);
    })
}