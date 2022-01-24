
function validate() {

    var name = document.getElementsByClassName('name').value;
    var Email = document.getElementsByClassName('Email').value;
    var age = document.getElementsByClassName('Age').value;

    var nameCheck = /^[A-Za-z]{3,30}$/;
    var emailCheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var ageCheck = /^[1-199]$/;
    if (nameCheck.test(name)) {
        return true;

    }
    else {
        alert("enter valid name")
    }
    if (emailCheck.test(Email)) {
        return true;
    }
    else {
        alert("enter valid email");

    }
    if (ageCheck.test(age)) {
        return true
    }
    else {
        alert('enter valid age')
    }
}
