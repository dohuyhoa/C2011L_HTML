function registerNewUser() {
    console.log('test....')
    var fname = document.getElementById('fname').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var confirmPwd = document.getElementById('password-confirmation').value
    var birthday = document.getElementById('birthday').value

    if (password != confirmPwd) {
        alert('Mat khau nhap khong khop!!! Vui long kiem tra lai!!!')
        return false;
    }

    localStorage.setItem('fullname', fname)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('birthday', birthday)

    return true;
}