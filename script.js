document.addEventListener('DOMContentLoaded',()=>{
    const todoInput = document.getElementById('task-input')
// access the ul element 
const todoList = document.getElementById('task-list')
var taskList = JSON.parse(localStorage.getItem('Task')) || [] ; 

// render Elements 
taskList.forEach(element => renderTask(element));


// add task to the list 
const addTaskButton = document.getElementById('add-task').addEventListener('click',()=>{
    const taskText = todoInput.value.trim()
    if(taskText=="") return;
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    }
    taskList.push(newTask)
    renderTask(newTask)
    saveTask()
    todoInput.value = '' // clear input
    console.log(taskList)
})

// saveData on local storage 

function saveTask(){
    localStorage.setItem('Task',JSON.stringify(taskList))
}


function renderTask(task){
    const li = document.createElement("li")
    li.setAttribute('data-id', task.id)
    if(task.completed) li.classList.add('completed')
    li.innerHTML = `
    <span>${task.text}</span>
    <button class="remove-btn">Remove</button>
    `
    li.addEventListener('click',(event)=>{
        console.log('hjrllpo')
        if(event.target.tagName = "BUTTON") return;
        task.completed = !task.completed
        li.classList.toggle('completed')
        saveTask()
    });

    li.querySelector('button').addEventListener('click',(event)=>{
        event.stopPropagation() //prevent toggle from firing;
        taskList = taskList.filter(t => t.id !== task.id)
        li.remove()
        saveTask()

    })



    todoList.appendChild(li)
    
}


})





