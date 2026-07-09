import {Task} from "./task.js";
import {Project} from "./project.js";
import {tasks,projects,currentTasks,currentProjects} from "./createNew.js";
function sortTasksAlgo(firstTask,secondTask){
let firstTaskDate=new Date(taskYear,taskMonth,taskDay);
let secondTaskDate=new Date(taskYear,taskMonth,taskDay);
return (secondTaskDate.getTime()-second.taskPriority)-(firstTaskDate.getTime()-firstTask.taskPriority);
}
function sortTasks(currentTasks){
    return currentTasks.sort(sortTasksAlgo(a,b));
}
function filterTasks(currentTasks,projectName){
    return currentTasks.filter((currentTask)=>return currentTask.taskProjectName===projectName;);
}
function removeTask(currentTasks,removedTask){
    return currentTasks.filter((currentTask)=>currentTask.taskName!==removedTask);
}
export{sortTasksAlgo,sortTasks,filterTasks,removeTask};