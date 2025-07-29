const inputTasks = document.querySelector('.inputBox');
const addTaskBtn = document.querySelector('.addTaskBtn');
const taskContainer = document.querySelector('.taskContainer');
const deleteTaskBtn = document.querySelector('.deleteTaskBtn');
const tasks = [];

function addTask(taskName){
    let sameTask;

    tasks.push({
        id: Date.now(),
        name: taskName,
        isCompleted: false
    })
}

let tasksListHTML = '';

function renderTasks(){
    tasksListHTML = '';
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
    renderTasks();
    taskContainer.innerHTML = tasksListHTML;
    console.log(tasks);
})