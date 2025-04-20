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
 

function add() {
    const newRow = tableEl.insertRow();
    newRow.innerHTML = `
      <td>2025-04-20 12:00</td>
      <td>200399</td>
      <td>New Product</td>
      <td>$123.45</td>
      <td>1</td>
      <td>$123.45</td>
    `;
  }

