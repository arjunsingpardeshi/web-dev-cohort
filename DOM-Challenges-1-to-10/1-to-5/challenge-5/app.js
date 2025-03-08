/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];
const carouselTrack = document.getElementById(`carouselTrack`);
const captionText = document.getElementById(`caption`);
const prevButton = document.getElementById(`prevButton`);
const nextButton = document.getElementById(`nextButton`);
const carouselNav = document.getElementById(`carouselNav`);
const autoPlayButton = document.getElementById(`autoPlayButton`);
const timerDisplay = document.getElementById(`timerDisplay`);
let slideImageIndex = 0;
let timer;
slide();
images.forEach((image,index) => {

  const imageSlide = document.createElement(`div`);
  imageSlide.className = `carousel-slide`;
  imageSlide.style.backgroundImage = `url(${image.url})`;
  carouselTrack.appendChild(imageSlide)

  const carouselIndicator = document.createElement(`div`);
  carouselIndicator.className = `carousel-indicator`;
  carouselIndicator.addEventListener(`click`, ()=>slideIndex(index));
  carouselNav.appendChild(carouselIndicator);
});
function slide(){  
          carouselTrack.style.transform = `translateX(-${slideImageIndex * 100}%)`;
          captionText.textContent = images[slideImageIndex].caption;

          document.querySelectorAll(`.carousel-indicator`).forEach((carouselIndicator,index) =>{
            console.log("Hello ");
            carouselIndicator.classList.toggle(`active`, index === slideImageIndex);
          });
}
function slideIndex(index){  
  slideImageIndex = (index + images.length) % images.length;
  slide();
}
prevButton.addEventListener(`click`,()=>slideIndex(slideImageIndex - 1));
nextButton.addEventListener(`click`,()=>slideIndex(slideImageIndex + 1));
autoPlayButton.addEventListener(`click`,()=>{
       let str = autoPlayButton.textContent.trim();
      if(str===`Start Auto Play`){      
        autoPlayButton.textContent = `Stop Auto Play`;
        autoPlay();
      }
      else{
        autoPlayButton.textContent = `Start Auto Play`
        timerDisplay.textContent = ``;
        clearInterval(timer);
      }   
});
function autoPlay(){
  let count = 5;
  let index = 1;
  timerDisplay.textContent = `Next slide in ${count}s`
  timer= setInterval(()=>{
                 count--;
                 if(index>4){
                  index = 1;
                 }
                timerDisplay.textContent = `Next slide in ${count}s`
                 if(count===0){
                  count = 6;
                  console.log("value of Index",index);       
                  slideIndex(index);
                  index++;
                 }
    },1000)   
}