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
        document.querySelector(`#error-required-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-required-${name}`).innerHTML = `Please enter correct ${name} !`;
    return false;


}

function checkNumber(value, name) {

    console.log(value);
    let regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
        document.querySelector(`#error-required-${name}`).innerHTML = '';
        return true;
    }
    else {
        document.querySelector(`#error-required-${name}`).innerHTML = `Please enter correct ${name} number !`;
        return false;
    }

}

function checkText(value, name) {
    let regexLetter = /^[A-Za-z\s]+$/;;
    if (regexLetter.test(value)) {
        document.querySelector(`#error-required-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-required-${name}`).innerHTML = `Please enter correct ${name} !`;
    return false;
}

function checkPassword(value, name) {
    let regexPass = /^[A-Za-z]\w{6,10}$/;
    if (regexPass.test(value)) {
        document.querySelector(`#error-required-${name}`).innerHTML = '';
        return true;
    }
    document.querySelector(`#error-required-${name}`).innerHTML = `
    ${name} need 6 to 10 characters,one uppercase and one lowercase letter!`;
    return false;
}
function confirmPass(pass, name) {

    let confPass = document.querySelector("#passConfirm").value
    if (pass == confPass) {
        //alert('Wrong confirm password !');
        document.querySelector(`#error-${name}`).innerHTML = '';
        return true;
    }

    document.querySelector(`#error-${name}`).innerHTML = `Wrong confirm ${name} `;
    return false;

}
// function checkGender(name) {
//     let genderM = document.querySelector('#male');
//     let genderF = document.querySelector('#female');
//     if (!genderM.checked && !genderF.checked) {

//         document.querySelector(`#error-${name}`).innerHTML = 'You must select male or female';
//     }
//     else {
//         document.querySelector(`#error-${name}`).innerHTML = '';
//     }
// }



function checkValid(obj) {
    let valid = true;

    valid = checkEmpty(obj.email, 'Email') &
        checkEmpty(obj.password, 'Password') &
        checkEmpty(obj.name, 'Name') &
        checkEmpty(obj.phone, 'Phone');
    //check email
    valid = valid & checkEmail(obj.email, 'Email');
    //check Number
    valid = valid & checkNumber(parseInt(obj.phone), 'Phone')
    //check Text
    valid = valid & checkText(obj.name, 'Name');
    //check password
    valid = valid & checkPassword(obj.password, 'Password') & confirmPass(obj.password, 'Password');
    //check gender
    // valid = valid & checkGender('Gender');
    return valid;
}