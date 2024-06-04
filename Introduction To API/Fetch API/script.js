//fetch return a promises
//way-1
// fetch('https://dummyjson.com/products')
//     .then((response) =>
//     {
//         // console.log(response.json()); //here response.json() is also a promise
//         response.json()
//         .then((data) =>
//         {
//             console.log(data);
//         })
//     })

// way -2(GET Method)
// fetch('https://dummyjson.com/products', {method : 'GET'}) //by default it sent GET request
//     .then((res) => res.json())
//     .then((data) => console.log(data))

// way-2 (POST method)
fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  body: JSON.stringify({
    title: 'BMW Pencil',
    category: 'Stationary'
  })
})
.then(res => res.json())
.then(console.log);