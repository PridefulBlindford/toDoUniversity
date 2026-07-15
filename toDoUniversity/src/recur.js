import { addDays ,addWeeks,addMonths} from "date-fns";
import {Task} from "./task.js";
import {Project} from "./project.js";
function createRecurringTask(originalTask,startingDate,daysAdded,weeksAdded,monthsAdded,endingDate,newTasks){
    
    
    
    
    
    
    while(startingDate.getTime()<=endingDate.getTime()){
        let currentTask=structuredClone(originalTask);
        startingDate=addDays(startingDate,daysAdded);
        startingDate=addWeeks(startingDate,weeksAdded);
        startingDate=addMonths(startingDate,monthsAdded);
        let currentDate=structuredClone(startingDate);
    
        currentTask.taskDay=currentDate.getDate();
        
        
        currentTask.taskMonth=currentDate.getMonth();
        currentTask.taskYear=currentDate.getFullYear();
        newTasks.push(currentTask);
    }
    
}
export{createRecurringTask};