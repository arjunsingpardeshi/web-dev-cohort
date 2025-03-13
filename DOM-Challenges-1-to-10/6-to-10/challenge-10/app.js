const container = document.getElementById(`gameContainer`);
const movesDisplay = document.getElementById(`moves`);
const time = document.getElementById(`time`);
const emoji = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
const emojis = [...emoji, ...emoji];
let flipCount = 0, card1, card2;
let matchCardArray = [];
let moves = 0;
let timeVariable;
let matchPaired = 0;
shuffle();
start();
function start(){                                                   //this function is used to create cards 
    for(let i = 0;i<emojis.length;i++){
       const card =  document.createElement(`div`);
       card.className = `card`;
       card.innerHTML = `<div class = "card-front">?</div>
                         <div class = "card-back">${emojis[i]}</div>`
        container.appendChild(card);
        card.addEventListener(`click`,function() {
              card.classList.add(`flipped`);
              matchCard(this);
              timeDisplay();
        });
    
    } 
}
function shuffle(){                                                 //this function us used to shuffle
    emojis.sort(()=>Math.random()-0.5);
}
function matchCard(card){         //this function is used for match paired 
    let text1,text2;
    matchCardArray.push(card);         //it store last two card element
    if(matchCardArray.length===2){
        moves++;
        movesDisplay.textContent = moves;
        card1 = matchCardArray[0];
        card2 = matchCardArray[1];
        matchCardArray = [];
        text1 = card1.querySelector(`.card-back`).textContent;
        text2 = card2.querySelector(`.card-back`).textContent;
        if(text1 != text2){                         //this match the cards aare not same then flip
            setTimeout(()=>{
                card1.classList.remove(`flipped`);
                card2.classList.remove(`flipped`);    
            },1000);
        }  
        else{                                       //when paired is match the this execute
            matchPaired++;
            if(matchPaired === emoji.length){
                clearInterval(timeVariable);
                alert(`you have completed game in ${movesDisplay.textContent} moves and ${time.textContent}`);
            }
        }
    }
}
function timeDisplay(){
    if(timeVariable!=undefined)
        return;
    let minute = 0
    let second = 0
    timeVariable = setInterval(()=>{
                second++;
                if(second===60){
                    minute++;
                    second = 0; 
                }  
                time.textContent = `${minute}:${second.toString().padStart(2,`0`)}`
            },1000)
}
function restartGame(){
    clearInterval(timeVariable);
    time.textContent = `0:00`;
    movesDisplay.textContent = `0`;
    container.innerHTML = ``;
    shuffle();
    start();    
}