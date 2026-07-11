import { addDays ,addWeeks,addMonths,format} from "date-fns";
import { Project } from "./project.js";
import { Task } from "./task.js";
import { createRecurringTask } from "./recur.js";
let tasks=[];
let projects=[];

function makeNewProject(newProjectName){
    let newCurrentProject=new Project(newProjectName);
    projects.push(newCurrentProject);
    localStorage.setItem("projects",JSON.stringify(projects));
}

function makeNewTask(newTaskData){
    let newCurrentTask=new Task(newTaskData.get("t-name"),newTaskData.get("t-description"),newTaskData.get("t-day"),newTaskData.get("t-month"),newTaskData.get("t-year"),newTaskData.get("t-hour"),newTaskData.get("t-minute"),newTaskData.get("t-completed"),newTaskData.get("t-pro-name"),newTaskData.get("t-priority"));
    tasks.push(newCurrentTask);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    if(newTaskData.get("t-recur")){
        tasks.push(createRecurringTask(new Date(newTaskData.get("t-year"),newTaskData.get("t-month"),newTaskData.get("t-day")),newTaskData.get("t-day-recur"),newTaskData.get("t-week-recur"),newTaskData.get("t-month-recur"),newDate(newTaskData.get("t-year-end"),newTaskData.get("t-month-end"),newTaskData.get("t-day-end"))));
        localStorage.setItem("tasks",JSON.stringify(tasks));
        
    }
}

export{projects,tasks,makeNewProject,makeNewTask};