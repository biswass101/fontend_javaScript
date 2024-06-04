//getting elements by tagName
// const im = document.getElementsByTagName('img');
// console.log(im);

//getting elements by className
// const css_img = document.getElementsByClassName('css-img')
// console.log(css_img)


//getting element by Id
// const css_img_id = document.getElementById('css-img-id')
// console.log(css_img_id);

//getting elements by querySelector

// const cssImage = document.querySelector('.css-image') //first matching value
// const img2 = document.querySelector('#css-img-id')
// const img3 = document.querySelectorAll('.css-image') //all selected element(returns NodeList)
// const img4 = document.querySelector('[alt="html-css-javascript"]') //atrributes selection
// img4.src = 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg'

const allImages = document.querySelectorAll('img')

const imagesURL = [
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
    'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80',
    'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714348800&semt=sph',
]

// for(let i = 0; i < allImages.length; i++) allImages[i].src = imagesURL[i]
allImages.forEach((img, idx) =>
{
    img.src = imagesURL[idx]
})