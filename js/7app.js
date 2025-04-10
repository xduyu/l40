//                                                                           t. 1

// function Delete(ms) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (ms) {
//                 res('код выполнен через: ' + ms + ' - м. секунд' + '\nсекунды: ' + ms / 1000)
//             } else {
//                 rej('error')
//             }
//         }, ms)
//     })
// }

// Delete(3000)
//     .then((message) => {
//         console.log(message)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
//     .finally(() => { console.log('ok') })

// let deleteF = new Promise((resolve, reject) => {

// })

//                                                                           t. 2


// const p1 = Promise.resolve('Успешно')
// const p2 = Promise.resolve('Хорошо')
// const p3 = Promise.resolve('Отлично')


// Promise.all([p1, p2, p3])
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.error('Ошибка') })



//                                                                           t. 3

// const p1 = Promise.resolve('Успешно')
// const p2 = Promise.resolve('Хорошо')
// const p3 = Promise.resolve('Отлично')

// Promise.allSettled([p1, p2, p3])
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.error('err') })





//                                                                           t. 4


// const p1 = new Promise((resovle) => {
//     setTimeout(() => resovle("p1"), 1000)
// })
// const p2 = new Promise((resovle) => {
//     setTimeout(() => resovle("p2"), 2 * 1000)
// })

// Promise.race([p1, p2])
//     .then((res) => { console.log(res) })
//     .catch((err) => { console.log(err) })


//                                                                           t. 5

// promise.any

// const p1 = Promise.reject('error')
// const p2 = new Promise((resolve) => {
//     setTimeout(() => resolve('123'), 2 * 1000)
// })
// const p3 = Promise.reject('error')

// Promise.any([p1, p2, p3])
//     .then((res) => { console.log('успешных: ' + res.length) })
//     .catch((err) => { console.error('с ошибкой: ' + err.length ) })


//                                                                           t. 6

function imgLoad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = 'https://dubaitickets.tours/wp-content/uploads/2023/03/img-worlds-of-adventure-dubai-ticket-11-1.jpg'
            img.addEventListener('load', () => {
                resolve(img)
            })
            img.addEventListener('error', () => {
                reject('ошибка при загрузке картинки')
            })
        }, 5 * 1000)
    })
}

imgLoad()
    .then((resimg) => {
        document.body.append(resimg)
    })
    .then(() => { console.log('Картинка успешно загружена') })
    .catch((err) => { console.log(err) })
    .finally(() => { console.log('Данные обработаны') })