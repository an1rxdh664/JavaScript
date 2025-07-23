const inputTasks = document.querySelector('.inputBox');
const addTaskBtn = document.querySelector('.addTaskBtn');
const taskContainer = document.querySelector('.taskContainer');

const tasks = [];

function addTask(taskName){
    tasks.push({
        name: taskName,
        isCompleted: false
    })
}

let tasksListHTML = '';

function renderTasks(){
    tasks.forEach((task) => {
        tasksListHTML += `
            <div class="task">
                <p>Task : ${task.name}</p>
                <p>Status : ${task.isCompleted}</p>
                <button class="deleteTaskBtn">Delete</button>
            </div>
        `
    })
}

addTaskBtn.addEventListener('click', () => {
    addTask(inputTasks.value);
    inputTasks.value = '';
    taskContainer.innerHTML = tasksListHTML;
    console.log(tasks); 
});