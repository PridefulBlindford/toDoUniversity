import { addDays ,addWeeks,addMonths,format} from "date-fns";
let tasks=[];
let projects=["class"];
let currentTasks=JSON.parse(localStorage.getItem("tasks"))||[""];
let currentProjects=JSON.parse("projects")||[""];




export{currentTasks,projects,tasks,currentProjects};