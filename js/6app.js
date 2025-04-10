// console.log('До')

// function make(callback) {
//     console.log('Получаем сумму масива')
//     setTimeout(() => {
//         let arr = [11, 2, 3, 4, 5, 55]
//         callback(arr)
//     }, 2000)
// }



// make((arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let sum =+ arr[i]
//         console.log(sum)
//     }
// })

// function processData(date, callback) {
//     setTimeout(() => {
//         let result = (date * 2) + 5;
//         callback(result);
//     }, 3000);
// }


// processData(5, (result) => {
//     console.log('результат: ' + result );
// })


// function lunchData(callback){
//     setTimeout(() => {
//         let milk = true;
//         let bread = true;
//         let eggs = true;
//         let butter = true;

//         if(milk && bread && eggs && butter){
//             callback(null ,"на месте")
//         } else {
//             callback("не на месте", null)
//         }
//     }, 2000)
// }

// lunchData((error, message) => {
//     if(error){
//         console.error(error)
//     } else {
//         console.info(message)
//     }
// })

let lunchDataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let milk = true;
        let bread = true;
        let eggs = true;
        let butter = false;

        if (milk && bread && eggs && butter) {
            resolve("на месте")
        } else {
            reject("не на месте")
        }
    }, 2000)
})


lunchDataPromise
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => { console.log('ок') })