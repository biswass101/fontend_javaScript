// function makeHttpRequest(method, url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'json'
//     xhr.addEventListener("load", () => {
//         // console.log(xhr.response);
//         callback(xhr.response)
//     })
//     xhr.open(method, url)
//     xhr.send()
// }


// //this known as the callback hell
// // makeHttpRequest('GET', 'https://dummyjson.com/users')
// makeHttpRequest('GET', 'https://dummyjson.com/users', (userData) =>{
//     // console.log(userData);
//     makeHttpRequest("GET", `https://dummyjson.com/users/${userData.users[0].id}/posts`, (postData) =>{
//         // console.log(postData);
//         makeHttpRequest("GET", `https://dummyjson.com/posts/${postData.posts[0].id}/comments`, cmntData =>{
//             console.log(cmntData.comments[0].user.id);
//             makeHttpRequest("GET", `http://dummyjson.com/users/${cmntData.comments[0].user.id}`, data=>
//                 {
//                     console.log(data);
//                 }
//             )
//         })
//     })
// })


//fixing callback hell -->

function makeHttpRequest(method, url) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json'

    const promise = new Promise((resolve, reject) =>
    {
        xhr.addEventListener("load", () => {
            resolve(xhr.response)
        })
        xhr.addEventListener("error", () =>
        {
            reject('request failed')
        })
    })

    xhr.open(method, url)
    xhr.send()

    return promise
}

makeHttpRequest("GET", 'https://dummyjson.com/users')
    .then((userData) => makeHttpRequest("GET", `https://dummyjson.com/users/${userData.users[0].id}/posts`))
    .then((postData) => makeHttpRequest("GET", `https://dummyjson.com/posts/${postData.posts[0].id}/comments`))
    .then((cmntData) => makeHttpRequest("GET", `http://dummyjson.com/users/${cmntData.comments[0].user.id}`))
    .then((userCmnt)=> console.log(userCmnt))
    .catch((err) => console.log(err))
    
// //this known as the callback hell
// // makeHttpRequest('GET', 'https://dummyjson.com/users')
// makeHttpRequest('GET', 'https://dummyjson.com/users', (userData) =>{
//     // console.log(userData);
//     makeHttpRequest("GET", `https://dummyjson.com/users/${userData.users[0].id}/posts`, (postData) =>{
//         // console.log(postData);
//         makeHttpRequest("GET", `https://dummyjson.com/posts/${postData.posts[0].id}/comments`, cmntData =>{
//             console.log(cmntData.comments[0].user.id);
//             makeHttpRequest("GET", `http://dummyjson.com/users/${cmntData.comments[0].user.id}`, data=>
//                 {
//                     console.log(data);
//                 }
//             )
//         })
//     })
// })
