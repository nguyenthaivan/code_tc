let image = document.querySelectorAll('.image img')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')

let currentIndex = 0;
image.forEach((item,index) => {
    item.addEventListener('click', function() {
        currentIndex = index
        galleryImg.src = image[currentIndex].src
        gallery.classList.add('show')
    })
})
document.onkeydown = (e) => {
    if (e.key == 'Escape') {
        gallery.classList.remove('show')    
    }
}

close.onclick = () => {
    gallery.classList.remove('show')
}

next.onclick = () => {
    currentIndex = currentIndex === image.length ? 0 : currentIndex + 1
    console.log(currentIndex)
    galleryImg.src = image[currentIndex ].src
}

prev.onclick = () => {
    currentIndex = currentIndex === 0 ? image.length - 1 : currentIndex - 1
    galleryImg.src = image[currentIndex ].src
}