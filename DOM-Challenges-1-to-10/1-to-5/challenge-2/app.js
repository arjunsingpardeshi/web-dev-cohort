/**
 * Write your challenge solution here
 */
const red = document.getElementById(`redButton`);
const green = document.getElementById(`greenButton`);
const blue = document.getElementById(`blueButton`);
const purple = document.getElementById(`purpleButton`);
const reset = document.getElementById(`resetButton`);
const mainHaiding  = document.getElementById(`mainHeading`);

red.addEventListener(`click`,()=>{
    mainHaiding.style.color = `#e74c3c`;
});

green.addEventListener(`click`,()=>{
    mainHaiding.style.color = `#2ecc71`;

});

blue.addEventListener(`click`,()=>{
    mainHaiding.style.color = `#3498db`;

});

red.addEventListener(`click`,()=>{
    mainHaiding.style.color = `#3498db`;

});

purple.addEventListener(`click`,()=>{
    mainHaiding.style.color = `#9b59b6`;
});

reset.addEventListener(`click`,()=>{
     mainHaiding.style.color = `#34495e`;
});