/**
 * Write your challenge solution here
 */
const panel = document.querySelector(`.panel`)
const toggleButton = document.querySelector(`.toggle-btn`);
const closebutton  = document.querySelector(`.close-btn`);

const menu = document.querySelectorAll(`.menu-item`);

toggleButton.addEventListener(`click`,(e) =>{
    
    panel.classList.toggle(`active`);
})
closebutton.addEventListener(`click`,()=>{
       panel.classList.remove(`active`)
})

document.addEventListener(`click`,(e)=>{
    if(!panel.contains(e.target) && ! toggleButton.contains(e.target)){
        panel.classList.remove(`active`)
     }
})
menu.forEach(item => {

    item.addEventListener(`click`,() => {
        alert(item.textContent);
    })
})