function unit() {
    var fullName = localStorage.getItem('fullName')
    var email = localStorage.getItem('email')
    var password = localStorage.getItem('password')
    var birthday = localStorage.getItem('birthday')

    document.getElementById('fullName__id').innerHTML += fullName
    document.getElementById('email__id').innerHTML += email
    document.getElementById('password__id').innerHTML += password
    document.getElementById('birthday__id').innerHTML += birthday
}