const nowTime = document.getElementById('errorMessage')

// function time() {
//     const now = new Date()
//     nowTime.textContent = `${now.getFullYear()}:${now.getMonth() + 1}:${now.getDate()}:${now.getMinutes()}`
//     const newel = document.createElement('p')
//     newel.textContent = `y / m / d / min`
//     nowTime.append(newel)
// }

// time()


// function diff(date1, date2) {
//     const res = date1 - date2
//     const dres = res / (1000 * 60 * 60 * 24);
//     console.log(dres)
// }

// const date1 = new Date(2025, 2, 20)
// const date2 = new Date(2025, 1, 5)

// diff(date1, date2)


let count = localStorage.getItem("count") ?? 0;
count++
localStorage.setItem("count", count)
nowTime.textContent = count