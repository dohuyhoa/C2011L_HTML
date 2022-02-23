// B1. Binding toan bo tag input & tbody -> object trong JS
var productTag = document.getElementById('product_id')
var manufacturerTag = document.getElementById('manufacturer_id')
var categoryTag = document.getElementById('category_id')
var priceTag = document.getElementById('price_id')
var quantityTag = document.getElementById('quanlity_id')
var totalPriceTag = document.getElementById('total_price_id')
var resultTag = document.getElementById('result')

// B2. Tu dong tinh tong gia cua tung san pham
function updateTotalPrice() {
    var price = priceTag.value
    var quantity = quantityTag.value

    totalPriceTag.value = price * quantity
}

// B3. Hien thi du lieu len nsx + danh muc san pham -> js -> hien thi nsx + danh muc san pham
// Y tuong ve quan ly du lieu
var dataList = [{
    "name": "Apple",
    "categoryList": ["Iphone"]
}, {
    "name": "Sam Sung",
    "categoryList": ["S01", "S02", "S03", "S04", "S05"]
}, {
    "name": "LG",
    "categoryList": ["LG01", "LG02"]
}]

// Tu du lieu tren -> hien thi thong tin nsx len select
for (var item of dataList) {
    manufacturerTag.innerHTML += `<option value="${item.name}">${item.name}</option>`
}

// Hien thi dc danh muc san pham tuong ung cua tung nsx
function changeManufacturer() {
    var nsx = manufacturerTag.value

    var categoryList = []

    categoryTag.innerHTML = ''
    for (var item of dataList) {
        if (item.name == nsx) {
            categoryList = item.categoryList
            break
        }
    }

    if (categoryList.length > 1) {
        categoryTag.innerHTML = '<option value="">-- Lua Chon --</option>'
    }

    for (var v of categoryList) {
        categoryTag.innerHTML += `<option value="${v}">${v}</option>`
    }
}

// B4: Them/sua/xoa san pham
var productList = []

function saveData() {
    // product object
    var product = {
        "productName": productTag.value,
        "manufacturerName": manufacturerTag.value,
        "category": categoryTag.value,
        "price": priceTag.value,
        "quantity": quantityTag.value
    }

    if (currentIndex >= 0) {
        //update
        productList[currentIndex] = product
        currentIndex = -1
    } else {
        productList.push(product)
    }

    showData()
    saveStorage()

    return false
}

function showData() {
    // Xoa het noi dung du lieu trong tbody
    resultTag.innerHTML = ''

    // Hien thi lai du lieu
    var index = 0
    for (var item of productList) {
        resultTag.innerHTML += `<tr>
				<td>${index + 1}</td>
				<td>${item.productName}</td>
				<td>${item.manufacturerName}</td>
				<td>${item.category}</td>
				<td>${item.price}</td>
				<td>${item.quantity}</td>
				<td>${item.price * item.quantity}</td>
				<td>
					<button type="button" class="btn btn-warning" onclick="editProduct(${index})">Sua</button>
				</td>
				<td>
					<button type="button" class="btn btn-danger" onclick="removeProduct(${index})">Xoa</button>
				</td>
			</tr>`
        index++
    }
}

function removeProduct(index) {
    var option = confirm('Ban co chac chan muon xoa san pham nay khong?')
    if (!option) return

    productList.splice(index, 1)

    showData()

    saveStorage()
}

var currentIndex = -1

function editProduct(index) {
    // index >= 0 -> vi tri cua san pham trong mang productList
    currentIndex = index

    productTag.value = productList[index].productName
    manufacturerTag.value = productList[index].manufacturerName
    changeManufacturer()

    categoryTag.value = productList[index].category

    priceTag.value = productList[index].price
    quantityTag.value = productList[index].quantity
    totalPriceTag.value = productList[index].price * productList[index].quantity
}

// Luu lai thong tin san pham -> sau khi reload + bat lai web -> van hien thi du lieu cu
// Ung dung localStorage -> luu tru thong tin du lieu
// Can luu toan bo thong tin productList -> localStorage
// Chu y: localStorage -> chi cho phep luu kieu du lieu int, float, char, string & nhung productList -> array object
// Do vay => khong the luu truc tiep productList -> localStorage
// Giai phap:
// chuyen productList -> json string -> luu xuong localStorage
// Doc noi dung tu localStorage -> json string -> chuyen array object -> hien thi la len website
function saveStorage() {
    var json = JSON.stringify(productList)

    localStorage.setItem('productList', json)
}

readStorage()

function readStorage() {
    var json = localStorage.getItem('productList')

    if (json != null && json != "") {
        productList = JSON.parse(json)
    }

    showData()
}