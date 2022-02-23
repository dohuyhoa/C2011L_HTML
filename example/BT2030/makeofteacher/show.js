function init() {
    var fname = localStorage.getItem('fullname')
    var email = localStorage.getItem('email')
    var birthday = localStorage.getItem('birthday')

    document.getElementById('fullname').innerHTML += fname
    document.getElementById('email').innerHTML += email
    document.getElementById('birthday').innerHTML += birthday
}