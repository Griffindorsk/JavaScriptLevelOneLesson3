// Задание #1
document.write('<h3>Задание #1</h3>');
document.write('<p>Вывод простых чисел в диапазоне от 0 до 100</p>');
console.log('Задание #1')
alert('Задание #1');
var i = 1;
var k, m, flag;
while (i <= 100) {
    k = 2;
    m = 1;
    flag = 0;
    // document.write('<p>i = ' + i + '</p>');
    while (k < i) {
        m = i % k;
        if (m === 0) {
            flag = 1;
            break;
        }
        // document.write('<p>k = ' + k + '</p>');
        ++k;
    }
    if (flag == 0) {
        document.write('<p>prime number: ' + i + '</p>');
    }
    ++i;
}
// Задание #2&3
document.write('<h3>Задание #2&3</h3>');
document.write('<p>Подсчет стоимости товаров в корзине</p>');
console.log('Задание #2&3')
alert('Задание #2&3');
// определяем корзину товаров
var basket = [];
var position = [];
var name, price, itemsQuantity;
positionsQuantity = 5;
document.write('<p>Нестилизованная корзина товаров:</p>');
for (i = 0; i < positionsQuantity; i++) {
    price = Math.random() * (i+1) * 100;
    price = price.toFixed(2);
    itemsQuantity = Math.floor(Math.random() * 10);
    position = ['товар_' + (i+1), price, itemsQuantity];
    basket.push(position);
    document.write('<p>' + basket[i] + '</p>');
}
console.log(basket)
// Функция подсчета общей стоимости товаров в корзине
function countBasketPrice(basketName) {
    var totalSum = 0;
    for (i = 0; i < basketName.length; i++) {
        totalSum = totalSum + basketName[i][1] * basketName[i][2]
    }
    return totalSum;
}
document.write('<p>Общая стоимость товаров в корзине: ' + countBasketPrice(basket) + '</p>');
console.log(countBasketPrice(basket));
alert(countBasketPrice(basket));

// Задание #4
document.write('<h3>Задание #4</h3>');
document.write('<p>Вывод из цикла</p>');
console.log('Задание #4')
alert('Задание #4');
for (i = 0; i <= 9; document.write('<p>' + i++ + '</p>')) {
}

// Задание #5
document.write('<h3>Задание #5</h3>');
document.write('<p>Ряды в консоли</p>');
console.log('Задание #5')
alert('Задание #5');
var myString = 'x';
console.log(myString);
for (i = 2; i < 20; i++) {
    myString = myString + 'x';
    console.log(myString);
}













