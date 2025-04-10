// Задача номер 2

// const users = [{
//     name: 'Rodion',
//     age: 17
// },
// {
//     name: 'name',
//     age: 25
// },
// {
//     name: 'name2',
//     age: 24
// }
// ]

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const userChecked = users.every(el => el.age >= 18)
//             const user = users.find(el => el.age < 18)
//             if (userChecked) {
//                 resolve('Всем пользователям есть 18')
//             } else {
//                 reject(user.name)
//             }
//         }, 3 * 1000)
//     })
// }

// getUsers()
//     .then((res) => { alert('Всем пользователям есть 18: ' + res) })
//     .catch((res) => { alert(`${res} нету 18`) })


// zadacha 3

// function getRandomNumber() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             const nrn = Math.round(Math.random() * 100)
//             res(nrn)
//         }, 2 * 1000)
//     })
// }

// getRandomNumber()
//     .then((res) => { alert(res) })
//     .catch((err) => { alert('erro') })


// async

// async function checkRandomNumber() {
//     try {
//         let num1 = await getRandomNumber()
//         console.log(num1)
//         let num2 = await getRandomNumber()
//         console.log(num2)
//     } catch (error) {
//         console.log('Ошибка не понятно где')
//     }
// }

// checkRandomNumber()


// work


// const listData = document.getElementById('list')
// const url = "https://jsonplaceholder.typicode.com/comments"

// fetch(url)
//     .then((response) => {
//         console.log(response)
//         if (response.ok) {
//             return response.json()
//         }
//         else {
//             return console.log('error')
//         }
//     })
//     .then((data) => {
//         console.log(data)
//         data.forEach(el => {
//             const card = document.createElement("li")
//             card.className = "list__card"
//             const cardId = document.createElement("p")
//             const cardTitle = document.createElement("p")

//             card.style.display = 'flex'
//             card.style.gap = '30px'

//             cardId.textContent = el.id;
//             card.append(cardId)
//             cardTitle.textContent = el.name
//             card.append(cardTitle)

//             listData.append(card)
//         });
//     })
//     .catch((error) => { console.log(error) })