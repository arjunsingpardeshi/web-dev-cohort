const addButton = document.getElementById(`add-button`);
const todotext = document.getElementById(`todo-input`);
const items = document.getElementById(`items`);
const deleteAllbtn = document.getElementById(`delete-all-button`);

addButton.addEventListener(`click`, () => {
    const text = todotext.value;
    const li = document.createElement('li');
    li.innerText = text;
    const deletebtn = document.createElement(`button`);
    deletebtn.innerText = `X`
    deletebtn.addEventListener(`click`, () =>{  
        li.remove();
    });
    li.appendChild(deletebtn);
    items.appendChild(li);
    todotext.value = "";     
});

deleteAllbtn.addEventListener(`click`, () =>{  
    const count = items.childElementCount;
    for(let i = 0; i<count;i++){
        items.removeChild(items.firstElementChild);
      }
 });