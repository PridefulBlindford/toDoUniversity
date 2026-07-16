import {Task} from "./task.js";
import {Project} from "./project.js";
import {tasks,projects,currentTasks,currentProjects} from "./createNew.js";
function sortTasksAlgo(firstTask,secondTask){
let firstTaskDate=new Date(firstTask.taskYear,firstTask.taskMonth,firstTask.taskDay);
let secondTaskDate=new Date(secondTask.taskYear,secondTask.taskMonth,secondTask.taskDay);
return (secondTaskDate.getTime()-secondTask.taskPriority)-(firstTaskDate.getTime()-firstTask.taskPriority);
}
function sortTasks(currentTasks){
    return currentTasks.sort((a,b)=>sortTasksAlgo(a,b));
}
function filterTasks(currentTasks,projectName){
    return currentTasks.filter((currentTask)=> currentTask.taskProjectName===projectName);
}
function removeTask(currentTasks,removedTask){
    return currentTasks.filter((currentTask)=>currentTask!==removedTask);
}
export{sortTasksAlgo,sortTasks,filterTasks,removeTask};