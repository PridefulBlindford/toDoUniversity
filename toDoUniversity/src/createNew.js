import { addDays ,addWeeks,addMonths,format} from "date-fns";
import { Project } from "./project.js";
import { Task } from "./task.js";
import { createRecurringTask } from "./recur.js";
let tasks=[];
let projects=[];

function makeNewProject(newProjectName){
    let newCurrentProject=new Project(newProjectName);
    projects=JSON.parse(localStorage.getItem("projects"))||[];
    projects.push(newCurrentProject);
    localStorage.setItem("projects",JSON.stringify(projects));
}

function makeNewTask(newTaskData){
    let newCurrentTask=new Task(newTaskData.get("t-name"),newTaskData.get("t-description"),newTaskData.get("t-day"),newTaskData.get("t-month"),newTaskData.get("t-year"),newTaskData.get("t-hour"),newTaskData.get("t-minute"),newTaskData.get("t-completed"),newTaskData.get("t-pro-name"),newTaskData.get("t-priority"),newTaskData.get("t-time-day"));
    tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.push(newCurrentTask);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    if(newTaskData.get("t-recur")){
        tasks=JSON.parse(localStorage.getItem("tasks"))||[];
        createRecurringTask(newCurrentTask,new Date(parseInt(newTaskData.get("t-year")),parseInt(newTaskData.get("t-month")),parseInt(newTaskData.get("t-day"))),parseInt(newTaskData.get("t-day-recur")),parseInt(newTaskData.get("t-week-recur")),parseInt(newTaskData.get("t-month-recur")),new Date(parseInt(newTaskData.get("t-year-end")),parseInt(newTaskData.get("t-month-end")),parseInt(newTaskData.get("t-day-end"))),tasks);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        
    }
}

export{projects,tasks,makeNewProject,makeNewTask};