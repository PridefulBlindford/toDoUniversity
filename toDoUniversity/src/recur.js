import { addDays ,addWeeks,addMonths} from "date-fns";
import {Task} from "./task.js";
import {Project} from "./project.js";
function createRecurringTask(originalTask,startingDate,daysAdded,weeksAdded,monthsAdded,endingDate){
    let newTasks=[];
    let currentDate=Object.assign({},startingDate);
    let currentTask=Object.assign({},originalTask);
    console.log(currentTask);
    console.log(originalTask);
    
    while(currentDate.getTime()<=endingDate.getTime()){
        currentDate=addDays(currentDate,daysAdded);
        currentDate=addWeeks(currentDate,weeksAdded);
        currentDate=addMonths(currentDate,monthsAdded);
        currentTask.taskDay=currentDate.getDate();
        currentTask.taskMonth=currentDate.getMonth();
        currentTask.taskYear=currentDate.getFullYear();
        newTasks.push(currentTask);
    }
    return newTasks;
}
export{createRecurringTask};