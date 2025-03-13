const container = document.getElementById('gameContainer');
const movesCounter = document.getElementById('moves');
const timeCounter = document.getElementById('time');

const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
let cards = [...emojis, ...emojis];
let firstCard, secondCard;
let lockBoard = false;
let moves = 0;
let timer;
let time = 0;
let matchedPairs = 0;

// Shuffle cards function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startGame() {
  shuffle(cards);
  container.innerHTML = '';
  matchedPairs = 0;
  moves = 0;
  movesCounter.innerText = moves;
  time = 0;
  timeCounter.innerText = '0:00';
  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
  
  cards.forEach(emoji => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-back">${emoji}</div>
      <div class="card-front">?</div>
    `;
    card.addEventListener('click', flipCard);
    container.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard || this.classList.contains('flipped')) return;
  this.classList.add('flipped');
  
  if (!firstCard) {
    firstCard = this;
    return;
  }
  secondCard = this;
  moves++;
  movesCounter.innerText = moves;

  checkMatch();
}

function checkMatch() {
  let isMatch = firstCard.innerHTML === secondCard.innerHTML;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
  matchedPairs++;
  if (matchedPairs === emojis.length) {
    clearInterval(timer);
    alert(`Congratulations! You won in ${moves} moves and ${time} seconds.`);
  }
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

function updateTime() {
  time++;
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timeCounter.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function restartGame() {
  startGame();
}

startGame();
