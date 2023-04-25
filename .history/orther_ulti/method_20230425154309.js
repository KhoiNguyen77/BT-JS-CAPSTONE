//-------Validation--------

function checkEmpty(value, name) {
    if (value.trim() == '') {
        document.querySelector(`#error-required-${name}`).innerHTML = `Please provide your ${name}!`;
        return false;
    }
    document.querySelector(`#error-required-${name}`).innerHTML = '';
    return true;
}


function checkEmail(value, name) {

    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(value)) {
        document.querySelector(`#error-regex-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML = `Please enter correct Email !`;
    return false;


}
function duplicatePass (value, name) {
    let password = document.getElementById("#password");
    if (value === password) {
        return true
    } else {
        document.querySelector(name).innerHTML = `Mật khẩu không giống nhau`;
    }
}
function checkNumber(value, name) {

    console.log(value);
    let regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
        document.querySelector(`#error-regex-${name}`).innerHTML = '';
        return true;
    }
    else {
        document.querySelector(`#error-regex-${name}`).innerHTML = `Please enter correct ${name} number !`;
        return false;
    }

}

function checkText(value, name) {
    let regexLetter = /^[A-Za-z\s]+$/;;
    if (regexLetter.test(value)) {
        document.querySelector(`#error-regex-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML = `Please enter correct ${name} !`;
    return false;
}

function checkPassword(value, name) {
    let regexPass = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    if (regexPass.test(value)) {
        document.querySelector(`#error-regex-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-regex-${name}`).innerHTML = `${name} need  !`;
    return false;
}

function checkValid(obj) {
    let valid = true;

    valid = checkEmpty(obj.email, 'Email') &
        checkEmpty(obj.password, 'Password') &
        checkEmpty(obj.name, 'Name') &
        checkEmpty(obj.phone, 'Phone');

    valid += valid & checkEmail(obj.email, 'Email');
    valid += valid & checkNumber(parseInt(obj.phone), 'Phone');
    valid += valid & checkText(obj.name, 'Name');
    return valid;
}