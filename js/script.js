const mainImageEl = document.querySelector(".iphone__image img")

function changeImage(path){
    mainImageEl.setAttribute("src", path)
}





const card = document.querySelector(".card");
const wrapper = document.querySelector(".card__wrapper");

const showFull = ()=> {
    card.classList.toggle("show");
}




const tableEl = document.querySelector(".table tbody")
console.log(tableEl);
