let box = document.querySelectorAll('.box');

box.forEach(e => {
    e.addEventListener('mouseenter', ()=>{
        e.childNodes[3].style.opacity = 1;
    })
    e.addEventListener('mouseleave', ()=>{
        e.childNodes[3].style.opacity = 0;
    })
    e.addEventListener('mousemove', (elem)=>{
        e.childNodes[3].style.left = elem.x+"px"
        // e.childNodes[3].style.top = elem.y+"px"
    })
});
