// Синхронный код



// console.log('1')
// console.log('2')
// console.log('3')




// Асхинронный код

// console.log('start')

// setTimeout(() => {
//     console.log('setTimeout')
// }, 1000)

// console.log('end')

// console.log(1)

// // set  Timeout(() => {
// document.getElementById('btn').addEventListener('click', () => {
//     console.log(123)
// })
// // }, 1000)


// console.log(321)


// а. загрузка картинки


// document.getElementById('btn').addEventListener('click', () => {
//     const img = document.createElement('img')
//     img.src = 'https://allterra.ru/upload/iblock/3e0/b8iu701mkpbeivrkjzgn7d5gw71tc791/IMG-Academy-1.jpg'
//     img.addEventListener('load', () => {
//         document.body.append(img)
//     })

//     img.addEventListener('error', () => {
//         alert('err')
//     })

// })

// function main() {
//     setTimeout(function gridSet() {
//         console.log('hello')
//     }, 123)
// }

// main()

// console.log('Заказываем пиццу')
// setTimeout(function () {
//     console.log("Ваша пицца доставлена")
// }, 2000)
// console.log('смотрим фильм')

// function cookPizza(callback) {
//     console.log('Готовим пиццу')
//     setTimeout(() => {
//         console.log('Пицца готова')
//         callback(true)
//     }, 3000)
// }

// cookPizza((res) => {
//     if(res){
//         console.log('Ваша пицца готова')
//     } else {
//         console.log('Ваша пицца не готова')
//     }
// })