/**
 * Write your challenge solution here
 */
const clock = document.querySelector(`.clock`);
const handHour = document.querySelector(`.hour`);
const handminute = document.querySelector(`.minute`);
const handSeconds = document.querySelector(`.second`);
const digitalClock = document.querySelector(`.digital-clock`);
const date = document.querySelector(`.date`);

for(i = 1; i <= 12; i++){
        const number = document.createElement(`div`);
        number.className = `number`;
        number.style.setProperty(`--rotation`,`${i * 30}deg`);
        number.innerHTML = `<span>${i}<span/>`;
        clock.appendChild(number);

}

function updateClock(){
       const now = new Date()
       const hours = now.getHours().toString().padStart(2,`0`);
       const minute = now.getMinutes().toString().padStart(2,`0`);
       const second = now.getSeconds().toString().padStart(2,`0`); 
       digitalClock.textContent = `${hours}:${minute}:${second}`;

       const option = {
                         weekday : `long`,
                         year : `numeric`,
                         month : `long`,
                         day : `numeric`
                     }
        date.textContent = now.toLocaleDateString(`en-GB`,option);

        //code for analog clock
        const secondsDegree = (now.getSeconds() / 60) * 360;
        const minutesDegree = ((now.getMinutes() + now.getSeconds() / 60) /60) * 360;
        const hoursDegree =((now.getHours() + now.getMinutes() / 60) /12) * 360;
        
        // console.log('second',secondsDegree);
        // console.log(`minute`,minutesDegree);
        // console.log(`hour`,hoursDegree);
        
        handSeconds.style.transform = `translateX(-50%) rotate(${secondsDegree}deg)`;
        handminute.style.transform = `translateX(-50%) rotate(${minutesDegree}deg)`;
        handHour.style.transform = `translateX(-50%) rotate(${hoursDegree}deg)`;
}
updateClock();

setInterval(updateClock,1000);