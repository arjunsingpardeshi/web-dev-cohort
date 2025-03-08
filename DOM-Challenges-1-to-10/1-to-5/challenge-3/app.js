/**
 * Write your challenge solution here
 */







const name = document.getElementById(`nameInput`);
const job = document.getElementById(`jobInput`);
const age = document.getElementById(`ageInput`);
const bio = document.getElementById(`bioInput`);

const nameDisplay = document.getElementById(`nameDisplay`);
const jobDisplay = document.getElementById(`jobDisplay`);
const ageDisplay = document.getElementById(`ageDisplay`);
const bioDisplay = document.getElementById(`bioDisplay`);



name.addEventListener(`input`,()=>{
     nameDisplay.textContent = name.value || "Not provided";
     console.log();
     
});

job.addEventListener(`input`,()=>{
    jobDisplay.textContent = job.value || "Not provided";

});

age.addEventListener(`input`,()=>{
    ageDisplay.textContent = age.value || "Not provided";
});

bio.addEventListener(`input`,()=>{
    bioDisplay.textContent = bio.value || "Not provided";
});