// alert('Hieu Thu Hai');
// var fullName = 'Đỗ Huy Hòa';
// L
// var age = 26;
// alert(fullName);
// alert(age);
// var x = 5;
// var y = 3
// var z = 5;
// var t;
/* document.write('<br/>x = ' + x + '<br/>y = ' + y)
document.write(`<br/>x = ${x}<br/>y = ${y}`)
t = x++ + ++x - y-- + z++ + 2;
console.log(t);
console.log(`t= ${t}`);
document.write(`<br/>x = ${x}, y = ${y}, z = ${z}, t = ${t}`) */

/* var cars = ['Saab', 'volvo', 'BMW'];
for (var x in cars) {
    console.log(cars[x]);
}
console.log(cars.join(' '))
var fun = function() { return this.cars[1]; }
console.log(cars.push(fun))

for (var x in cars) {
    console.log(cars[x]);
} */

/* console.log('AAA')
var date = new Date();
console.log(date)
var day = date.getDay();
var month = date.getMonth();
var year = date.getFullYear();
var hour = date.getHours();
console.log(`${day}/${month}/${year}`)
var fullName = 'Huy Hoa'
var x = function() {
    return true;
}
var nes = 'HuyHoa'

console.log(isNaN(nes)) */
var myInfo = {
    a: 'Huy Hoa',
    b: 32,
    c: 1
}
console.log(myInfo.a)
myInfo.d = '15'
myInfo['e-1'] = '100'
for (var key of Object.values(myInfo)) {
    console.log(key)
}