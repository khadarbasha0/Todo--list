

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if(taskText !== ""){

        const taskitems = document.createElement("li");

        taskitems.innerHTML = `
        <span>${taskText}</span>
        <button onclick="deleteTask(this)" id="delete">Delete</button>`

        taskList.appendChild(taskitems);
        taskInput.value ="";

    }

}

 function deleteTask(button){
    const listItems = button.parentElement;
    taskList.removeChild(listItems);
    
 }