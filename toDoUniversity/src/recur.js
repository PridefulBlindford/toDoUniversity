import { addDays ,addWeeks,addMonths} from "date-fns";
import {Task} from "./task.js";
import {Project} from "./project.js";
function createRecurringTask(originalTask,startingDate,daysAdded,weeksAdded,monthsAdded,endingDate,newTasks){
    
    
    
    
    while(startingDate.getTime()<=endingDate.getTime()){
        startingDate=addDays(startingDate,daysAdded);
        startingDate=addWeeks(startingDate,weeksAdded);
        startingDate=addMonths(startingDate,monthsAdded);
    
        originalTask.taskDay=startingDate.getDate();
        console.log(originalTask.taskDay);
        originalTask.taskMonth=startingDate.getMonth();
        originalTask.taskYear=startingDate.getFullYear();
        newTasks.push(originalTask);
    }
    
}
export{createRecurringTask};