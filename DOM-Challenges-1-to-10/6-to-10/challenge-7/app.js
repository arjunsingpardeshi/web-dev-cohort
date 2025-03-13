/**
 * Write your challenge solution here
 */
const accordionButton = document.querySelectorAll(`.accordion-button`)
accordionButton.forEach(button => {
    button.addEventListener(`click`,() => {
        const accordionItem = button.parentElement;
        const isActive =  accordionItem.classList.contains(`active`);
        document.querySelectorAll(`.accordion-item`).forEach(item=>{
                item.classList.remove(`active`);
         });
         if(!isActive){
            accordionItem.classList.add(`active`);
         }
    })
});