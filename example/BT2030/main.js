function registerNewUser() {
    console.log('test...')
    var fullname = document.getElementById('fullname').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var passwordconfirm = document.getElementById('password-confirm').value
    var birth = document.getElementById('birth').value
    if (password != passwordconfirm) {
        alert(`Mật khẩu nhập không khớp! Vui lòng nhập lại trùng nhau.`)
        return false;
    }
    localStorage.setItem('fullname', fullname)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('birth', birth)

    return true;
}