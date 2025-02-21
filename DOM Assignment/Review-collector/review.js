const stars = document.querySelectorAll(`.star`);
const addbtn = document.getElementById(`submit-review`);
const userReview = document.getElementById(`user-review`);

let starRating;
function review_Star(str){
    starRating = str;
}

stars.forEach((star) =>{

    star.addEventListener(`click`,() => {             //execute when click on any one star
        let reviewStar = star.getAttribute(`data-value`);
              review_Star(reviewStar);                 //pass the rating star to fuction for get value of selected star
        const value = star.getAttribute(`data-value`);
        stars.forEach((e) =>{

            e.classList.remove(`active`);               //use to remove previous stars
        });
        for(let i =0; i<value;i++){
            stars[i].classList.add(`active`);           //highlight selected stars
        }
    });
});

addbtn.addEventListener(`click`,() => {
        let strUserReivew = userReview.value
        console.log("user reviw",strUserReivew);
        
    console.log("outside review - rating = ",starRating);
            
            if(starRating===undefined || strUserReivew ==="" ){    //checking if no rating star is given or no review given
                     alert("Please give rating and review")
            }
            else
            {                                                         //in this block runtime html element added     
                       const reviewSection = document.querySelector(`.all-review`)
                       const reviewDiv = document.createElement(`div`);
                       reviewSection.prepend(reviewDiv);
                       reviewDiv.classList.add(`user-review-rating`);
                       const oldStarcontanier =document.createElement(`div`);
                       reviewDiv.appendChild(oldStarcontanier);
                       oldStarcontanier.classList.add(`old-star-container`);
                       for(let i = 1; i<=5;i++){
                             let oldStar = document.createElement(`span`);
                             oldStar.innerHTML = "&#9733"
                             oldStar.classList.add(`old-star`);
                             if(i<=starRating){
                                  oldStar.classList.add(`active`)
                             }
                             oldStarcontanier.appendChild(oldStar)
                       } 
                       const paragraph = document.createElement(`p`);
                       paragraph.innerHTML = strUserReivew;
                       reviewDiv.appendChild(paragraph);
            }
            userReview.value="";
            stars.forEach(e =>{
                e.classList.remove(`active`);
            });

});