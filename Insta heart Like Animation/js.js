let img = document.querySelector('img');
let like = document.querySelector('i');

img.addEventListener('dblclick', () => {
    like.style.transform = "scale(1)"
    like.style.opacity = 0.8;
    setTimeout(() => {
        like.style.transform = "scale(0)"
        like.style.opacity = 0;
    }, 1000)
});