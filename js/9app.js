const searchForm = document.getElementById('search_form');
const searchLogin = document.getElementById('search-login');
const searchBtn = document.getElementById('search_btn');
const searchRes = document.getElementById('search-res');
const historyList = document.getElementById('historyList');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    user = searchLogin.value.trim();
    if (user) {
        GetDataUser(user)
    }
})

async function GetDataUser(user) {
    try {
        const response = await fetch(`https://api.github.com/users/${user}`)
        const reData = await response.json()
        console.log(reData)
        getUserOutData(reData)
        saveUserDataToLocalStorage(user)
    } catch (e) {
        displayEror(e)
    }
}

function getUserOutData(user) {
    searchRes.innerHTML = ""
    if (user.login == undefined) {
        searchRes.innerHTML = 'Пользователь не найден';
        searchRes.classList.add('error-user')
        return
    }
    const profileCard = document.createElement('div')
    profileCard.className = 'profile-card'
    searchRes.append(profileCard)
    const pUser = document.createElement('p')
    pUser.className = 'pUser'
    const userAvatar = document.createElement(`img`)
    const rigthBlock = document.createElement('div')
    rigthBlock.className = 'user__info-block'
    rigthBlock.append(pUser)
    // user avatar
    userAvatar.src = user.avatar_url ?? 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
    userAvatar.alt = `Аватар пользователя: ${user.login}`
    // username
    userLogin = user.login ?? 'Не найдено'
    // userId
    userId = user.id ?? 'Не найдено'
    // userNode_id
    userNode_id = user.node_id ?? 'Не найдено'
    // userBio
    userBio = user.bio ?? 'Не найдено'
    // append to card
    profileCard.append(userAvatar)
    pUser.innerHTML = `user login: ${userLogin} </br> user id: ${userId} </br> node id: ${userNode_id} </br> user bio: ${userBio} </br> user url: <a href='${user.html_url}' target='_blank'>${user.html_url}</a>`
    profileCard.append(pUser)
    userAvatar.className = 'AvatarImg'
    // userAvatar.src = `${user.avatar_url}`
    // profileCard.append(userAvatar)
    // pUser.innerHTML = `user login: ${user.login} user id: ${user.id} node id: ${user.node_id}`
    // profileCard.append(pUser)
}

function displayEror(e) {
    searchRes.textContent = e;
    searchRes.classList.add('error')
}
function saveUserDataToLocalStorage(user) {
    if (!user.login) return

    let history = localStorage.getItem('history') ?? []

    history.unshift(user)

    localStorage.setItem('history', JSON.stringify(history))
}

function ShowData() {

}

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

//     })