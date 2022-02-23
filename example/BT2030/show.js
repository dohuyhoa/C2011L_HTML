function init() {
    var fullname = localStorage.getItem('fullname')
    var email = localStorage.getItem('email')
    var birth = localStorage.getItem('birth')

    document.getElementById('fullname').innerHTML += fullname
    document.getElementById('email').innerHTML += email
    document.getElementById('birth').innerHTML += birth
}