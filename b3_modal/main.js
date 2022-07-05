let btn = document.querySelector(".btn");
let modal = document.querySelector(".modal")
let icon = document.querySelector(".modal__header i")
let modalBtn = document.querySelector(".modal__btn")
// 
btn.onclick = function() {
    modal.style.display = "flex";
}

modal.onclick = function(e) {
    if (e.target === e.currentTarget) {
        console.log(e);
        modal.style.display = "none";
    }
}

icon.onclick = function() {
    modal.style.display = "none";
}

modalBtn.onclick = function() {
    modal.style.display = "none";
}