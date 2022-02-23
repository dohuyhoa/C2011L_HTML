var registerList = []

console.log('test')

function saveData() {
    var fullName = document.getElementById('fullName_id').value
    var email = document.getElementById('email_id').value
    var password = document.getElementById('password_id').value
    var confirm_pwd = document.getElementById('confirm_id').value
    var birthday = document.getElementById('birthday_id').value
    var std = {
        'fullName': fullName,
        'email': email,
        'password': password,
        'birthday': birthday,
    }
    if (password != confirm_pwd) {
        alert('Mat khau khong khop. Vui long nhap lai!')
        return false;
    } else {
        registerList.push(std)
        console.log(registerList[std])
    }
    // saveLocalStorage()
    localStorage.setItem('fullName', registerList[std].fullName)
    localStorage.setItem('email', registerList[std].email)
    localStorage.setItem('password', registerList[std].password)
    localStorage.setItem('birthday', registerList[std].birthday)


    return true;

}

/* function saveLocalStorage() {
    localStorage.setItem('FullName', fullName)
    localStorage.setItem('Email', email)
    localStorage.setItem('Password', password)
    localStorage.setItem('ConfirmPassword', confirm_pwd)
    localStorage.setItem('Birthday', birthday)
} */

/* function unit() {
    localStorage.getItem('FullName')
    localStorage.getItem('Email')
    localStorage.getItem('Password')
    localStorage.setItem('ConfirmPassword', confirm_pwd)
    localStorage.getItem('Birthday')

    document.getElementById('fullName__id').innerHTML += FullName
    document.getElementById('email__id').innerHTML += Email
    document.getElementById('password__id').innerHTML += Password
    document.getElementById('birthday__id').innerHTML += Birthday
} */