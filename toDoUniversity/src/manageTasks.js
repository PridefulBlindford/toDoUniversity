import {Task} from "./task.js";
import {Project} from "./project.js";
import {tasks,projects,currentTasks,currentProjects} from "./createNew.js";
function sortTasksAlgo(firstTask,secondTask){
let firstTaskDate=new Date(firstTask.taskYear,firstTask.taskMonth,firstTask.taskDay);
let secondTaskDate=new Date(secondTask.taskYear,secondTask.taskMonth,secondTask.taskDay);
return (firstTaskDate.getTime()-firstTask.taskPriority)-(secondTaskDate.getTime()-secondTask.taskPriority);
}
function sortTasks(currentTasks){
    return currentTasks.sort((a,b)=>sortTasksAlgo(a,b));
}
function filterTasks(currentTasks,projectName){
    let filteredTasks=[];
    currentTasks.forEach((currentTask)=>{
        if(currentTask.taskProjectName===projectName){
            filteredTasks.push(currentTask);
        }
    });
    return filteredTasks;
}
function removeTask(currentTasks,removedTask){
    return currentTasks.filter((currentTask)=>currentTask!==removedTask);
}
export{sortTasksAlgo,sortTasks,filterTasks,removeTask};