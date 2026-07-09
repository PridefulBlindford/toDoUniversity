import {Project} from "./project.js";
    class Task{
        taskName;
        taskDescription;
        taskDate;
        taskHour;
        taskMinute;
        taskCompleted;
        taskProjectName;
        taskPriority;
        taskDay;
        taskMonth;
        taskyear;
    constructor(taskName,taskDescription,taskDay,taskMonth,taskYear,k,taskHour,taskMinute,taskCompleted,taskProjectName,taskPriority){
        this.taskName=taskName;
        this.taskDescription=taskDescription;
        this.taskDay=taskDay;
        this.taskMonth=taskMonth;
        this.taskYear=taskYear;
        this.taskHour=taskHour;
        this.taskMinute=taskMinute;
        this.taskCompleted=taskCompleted;
        this.taskProjectName=ptaskProjectName;
        this.taskPriority=taskPriority;
    }

    
     changeTaskCompleted(taskCompletedValue) {
        if(taskCompletedValue){
            this.taskCompleted=true;
        }
        else{
            this.taskCompleted=false;
        }
    }
    changeTaskPriority(taskPriorityValue){
        this.taskPriority=taskPriorityValue;
    }
    setDate(taskDateValue){
        this.taskDate=taskDateValue;
    }
}
export {Task};