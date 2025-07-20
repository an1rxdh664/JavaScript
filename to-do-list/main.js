const taskValue = document.querySelector('.inputBox');
const addTaskBtn = document.querySelector('.addTaskButton')

const tasks = [];

addTaskBtn.addEventListener('click', () => {
    if(taskValue.value === "") console.log("please enter a task before pressing the button");
    else {
        tasks.push({
            taskName: `${taskValue.value}`,
            isCompleted: false
        });
        console.log("Pushed tasks : ", tasks)
    }
});