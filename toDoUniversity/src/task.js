import {Project} from "./project.js";
    class Task{
    constructor(taskName,taskDescription,taskDate,taskTime,taskCompleted,taskProjectName,taskPriority){
        this.taskName=taskName;
        this.taskDescription=taskDescription;
        this.taskDate=taskDate;
        this.taskTime=taskTime;
        this.taskCompleted=taskCompleted;
        this.taskProjectName=ptaskProjectName;
        this.taskPriority=taskPriority;
    }

    
     setTaskCompleted(taskCompletedValue) {
        if(taskCompletedValue){
            this.taskCompleted=true;
        }
        else{
            this.taskCompleted=false;
        }
    }
    setTaskPriority(taskPriorityValue){
        this.taskPriority=taskPriorityValue;
    }
    setDate(taskDateValue){
        this.taskDate=taskDateValue;
    }
}
export {Task};