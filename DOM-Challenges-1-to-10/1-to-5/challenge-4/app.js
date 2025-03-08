/**
 * Write your challenge solution here
 */
const addbtn = document.getElementById(`addButton`);
const emptyList = document.querySelector(`.empty-list`);

const taskInput = document.getElementById(`taskInput`);
const taskList = document.getElementById(`taskList`);
let totalTask = 0

let completedTask = 0;
const totalTaskCount = document.getElementById(`totalTasks`);

const complete = document.getElementById(`completedTasks`);


addbtn.addEventListener(`click`,()=>{
       // document.querySelector(`.empty-list`).remove();
          const input = taskInput.value;
          taskInput.value = "";
            if(input==="" || input.trim().length===0){
               alert('Please fill task');
            }else{
                     countOfTotalTask(`add`);
                     const task = document.createElement(`li`);
                     task.classList.add(`task-item`);
                     taskList.appendChild(task);
                     
                     const checkbox = document.createElement(`input`);
                     checkbox.setAttribute(`type`,`checkbox`)
                     checkbox.className = `complete-checkbox`;
                     task.appendChild(checkbox);

                     const text = document.createElement(`p`);
                     text.className = `task-text`;
                     text.textContent = input.trim();
                     task.appendChild(text);
                     
                     const deletebtn = document.createElement(`button`);
                     deletebtn.className = `delete-button`
                     deletebtn.textContent = `delete`
                     task.appendChild(deletebtn);

                     deletebtn.addEventListener(`click`,() => {
                       
                            task.remove();
                            countOfTotalTask(`delete`)
                            completedTaskTotal();
                     });
                     checkbox.addEventListener(`click`,() => {
                        completedTaskTotal();
                        if(checkbox.checked){
                            task.classList.add(`completed`);
                        }
                        else{
                            task.classList.remove(`completed`)
                        }
                     })
            }           
});

function countOfTotalTask(str){
    if(str ==='add'){
        totalTask = totalTask + 1;
        totalTaskCount.textContent = "Total tasks: "+totalTask
        if(totalTask>0){
            emptyList.remove();
        }
    }
    else if(str === 'delete'){
        totalTask = totalTask - 1
        totalTaskCount.textContent = "Total tasks: "+totalTask
        if(totalTask === 0){
            emptyList.classList.add(`empty-list`);
            taskList.appendChild(emptyList);
        }
    }
}

function completedTaskTotal(){
    const chkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    complete.textContent = `Completed: ` + chkbox.length
}