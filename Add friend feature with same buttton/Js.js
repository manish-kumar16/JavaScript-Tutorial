let isStatus = document.querySelector("h5");
// let remove = document.querySelector("#btnRemove");
let add = document.querySelector("#btnAdd");

let flag = 0;
add.addEventListener("click", () => {
    if (flag == 0) {
        isStatus.innerHTML = "Friends"
        isStatus.style.color = "green"
        add.innerHTML = "Remove"
        add.style.color = "red"
        flag = 1

    } else {
        isStatus.innerHTML = "stranger"
        isStatus.style.color = "red"
        add.innerHTML = "Add"
        add.style.color = "green"
        flag = 0
    }
});


// remove.addEventListener("click", ()=>{
//     isStatus.innerHTML = "Stranger"
//     isStatus.style.color = "Red"
// });
