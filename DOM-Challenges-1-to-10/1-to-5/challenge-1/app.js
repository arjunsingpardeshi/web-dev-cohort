/**
 * Write your challenge solution here
 */
const toggle = document.getElementById(`toggleButton`);
const status = document.getElementById(`status`);
const bulb = document.getElementById(`bulb`);


toggle.addEventListener(`click`,()=>{

    toggleText = toggle.textContent;
    if(toggleText === `Turn On`){
        document.body.style.backgroundColor = `#141414`;
        document.getElementById(`h1`).style.color = `#ffffff`;
        document.getElementById(`p`).style.color = `#ffffff`;
        status.style.color = `#ffffff`
        status.textContent = `Status: On`
        toggle.textContent = `Turn Off`
        bulb.classList.remove(`off`);
    }
    else if(toggleText === `Turn Off`){
        document.body.style.backgroundColor = `#f5f5f5`;
        document.getElementById(`h1`).style.color = `#000000`;
        document.getElementById(`p`).style.color = `#000000`;
        status.style.color = `#000000`;
        toggle.textContent = `Turn On`
        status.textContent = `Status: Off`
        bulb.classList.add(`off`);

    }

});
