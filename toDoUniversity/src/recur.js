import { addDays ,addWeeks,addMonths} from "date-fns";
import {Task} from "./task.js";
import {Project} from "./project.js";
function createRecurringTask(originalTask,startingDate,daysAdded,weeksAdded,monthsAdded,endingDate){
    let newTasks=[];
    let currentDate=new Date(startingDate);
    let currentTask=new Task(originalTask);
    while(currentDate.getTime()<=endingDate.getTime()){
        currentDate=addDays(currentDate,daysAdded);
        currentDate.addWeeks(currentDated,weeksAdded);
        currentDate=addMonths(currentDate,monthsAdded);
        currentTask.setDate(currentDate);
        newTasks.push(currentTask);
    }
    return newTasks;
}
export{createRecurringTask};