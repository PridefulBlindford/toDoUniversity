import { addDays ,addWeeks,addMonths,format} from "date-fns";
import { Project } from "./project";
import { Task } from "./task";
import { createRecurringTask } from "./recur";
let tasks=[];
let projects=["class"];
let currentTasks=JSON.parse(localStorage.getItem("tasks"))||[""];
let currentProjects=JSON.parse("projects")||[""];

function makeNewProject(newProjectdata){
    let newCurrentProject=new Project(newProjectdata.get("pro-name"));
    projects.push(newCurrentProject);
    localStorage.setItem("projects",JSON.stringify(projects));
    currentProjects=localStorage.getItem("projects",JSON.parse("projects"));
}

function makeNewTask(newTaskData){
    let newCurrentTask=new Task(newTaskData.get("t-name"),newTaskData.get("t-description"),newTaskData.get("t-day"),newTaskData.get("t-month"),newTaskData.get("t-year"),newTaskData.get("t-hour"),newTaskData.get("t-minute"),newTaskData.get("t-completed"),newTaskData.get("t-pro-name"),newTaskData.get("t-priority"));
    tasks.push(newCurrentTask);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    currentTasks=localStorage.getItem("tasks",JSON.parse("tasks"));
    if(newTaskData.get("t-recur")){
        tasks.push(createRecurringTask(new Date(newTaskData.get("t-year"),newTaskData.get("t-month"),newTaskData.get("t-day")),newTaskData.get("t-day-recur"),newTaskData.get("t-week-recur"),newTaskData.get("t-month-recur"),newDate(newTaskData.get("t-year-end"),newTaskData.get("t-month-end"),newTaskData.get("t-day-end"))));
        localStorage.setItem("tasks",JSON.stringify(tasks));
        
    }
}

export{currentTasks,projects,tasks,currentProjects,makeNewProject,makeNewTask};