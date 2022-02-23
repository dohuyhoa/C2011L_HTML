console.log(`Anh Hai`);
var cIndex = -1
var studentList = []

function saveData() {

    var userName = document.getElementById('userName_id').value
    var fullName = document.getElementById('fullName_id').value
    var email = document.getElementById('email_id').value
    var birthday = document.getElementById('birthday_id').value
    var std = {
        'userName': userName,
        'fullName': fullName,
        'email': email,
        'birthday': birthday,
    }
    if (cIndex >= 0) {
        studentList[cIndex] = std
        cIndex = -1
    } else {
        studentList.push(std)
    }
    console.log(studentList)
    showData()
    resetData()
    saveStorage()
    return false
}

function resetData() {
    var userName = document.getElementById('userName_id').value = ''
    var fullName = document.getElementById('fullName_id').value = ''
    var email = document.getElementById('email_id').value = ''
    var birthday = document.getElementById('birthday_id').value = ''
}


function showData() {

    var resultTag = document.getElementById('result')
    resultTag.innerHTML = ''

    var index = 0
    for (var std of studentList) {
        resultTag.innerHTML += `<tr>
            <td>${index+1}</td>
            <td>${std.userName}</td>
            <td>${std.fullName}</td>
            <td>${std.email}</td>
            <td>${std.birthday}</td>
            <td><button class="btn__reset" onclick="editData(${index})">Edit</button></td>
            <td><button class="btn__delete" onclick="deleteData(${index})">Delete</button></td>
        </tr>`
        index++
    }

}

function editData(index) {
    cIndex = index
    document.getElementById('userName_id').value = studentList[index].userName
    document.getElementById('fullName_id').value = studentList[index].fullName
    document.getElementById('email_id').value = studentList[index].email
    document.getElementById('birthday_id').value = studentList[index].birthday
}


function deleteData(index) {
    var option = confirm('Ban co muon xoa?')
    if (!option) { return }
    studentList.splice(index, 1)
    showData()
    saveStorage()
}

function saveLocalStorage() {
    var json = JSON.stringify(studentList)
    localStorage.setItem('studentList', json)
}

function readStorage() {
    var json = localStorage.getItem(studentList)
    if (json != null && json != '') {
        studentList = JSON.parse(json)
    }
    showData()
}