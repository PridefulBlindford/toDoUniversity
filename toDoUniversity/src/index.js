import {Task} from "./task.js";
import {Project } from "./project.js";
import { createRecurringTask } from "./recur.js";
import {projects,tasks,makeNewProject,makeNewTask} from "./createNew.js";
import {sortTasksAlgo,sortTasks,filterTasks,removeTask} from "./manageTasks.js";
import { format } from "date-fns";
let currentTasks=[];
currentTasks=JSON.parse(localStorage.getItem("tasks"));
let currentProjects=[];
currentProjects=JSON.parse(localStorage.getItem("projects"));
function showTasks(currentTasks){

    
    document.querySelector(".tasks-area").remove();
        
    
    let tasksArea=document.createElement("div");
    tasksArea.setAttribute("class","tasks-area");
    let mainContent=document.querySelector(".main-content");
    currentTasks.forEach((currentTask)=>{
        let taskArea=document.createElement("div");
        taskArea.setAttribute("class",currentTask.taskName);
        let taskHeading=document.createElement("h3");
        taskHeading.innerText=`${currentTask.taskName} (${currentTask.taskCompleted?"completed":"not completed"})`;
        taskArea.appendChild(taskHeading);
        let  taskDueDate=document.createElement("p");
        let taskDate=new Date(parseInt(currentTask.taskYear),parseInt(currentTask.taskMonth),parseInt(currentTask.taskDay));

        let formattedDate=format(taskDate,"MMMM dd, yyyy");
taskDueDate.innerText=`Due ${formattedDate} at ${currentTask.taskHour}:${currentTask.taskMinute}${parseInt(currentTask.taskMinute)===0?"0":""} ${currentTask.taskTimeDay}`;
        taskArea.appendChild(taskDueDate);
        let taskInfoArea=document.createElement("details");
        let moreInfo=document.createElement("summary");
        moreInfo.innerText=`More info about ${currentTask.taskName}`;
        taskInfoArea.appendChild(moreInfo);
        let taskDescriptionInfo=document.createElement("p");
        taskDescriptionInfo.innerText=`Task Description: ${currentTask.taskDescription}`;
        taskInfoArea.appendChild(taskDescriptionInfo);
        let taskCompletedInfo=document.createElement("p");
        taskCompletedInfo.innerText=`Task Completed: ${currentTask.taskCompleted?"yes":"no"}`;
        taskInfoArea.appendChild(taskCompletedInfo);
        let taskCompButton=document.createElement("button");
        taskCompButton.innerText="Change Task Completed Status";
        taskCompButton.addEventListener("click",()=>{
            currentTask.changeTaskCompleted();
            taskCompletedInfo.innerText=`Task Completed: ${currentTask.taskCompleted?"yes":"no"}`;
        });
        taskInfoArea.appendChild(taskCompButton);
        let taskPriorityInfo=document.createElement("p");
        taskPriorityInfo.innerText=`Task Priority Level: ${currentTask.taskPriority}`;
        taskInfoArea.appendChild(taskPriorityInfo);
        let taskPrioButton=document.createElement("button");
        taskPrioButton.innerText="Change Task Priority Level";
        taskPrioButton.addEventListener("click",()=>{
            let prioLevelInput=parseInt(prompt("Please input a new priority level",currentTask.taskPriority));
            currentTask.changePriorityLevel(prioLevelInput);
            taskPriorityInfo.innerText=`Priority Level: ${currentTask.taskPriority}`;
        });
        taskInfoArea.appendChild(taskPrioButton);
        taskArea.appendChild(taskInfoArea);


        let taskProjectInfo=document.createElement("p");
        taskProjectInfo.innerText=`Project: ${currentTask.taskProjectName}`;
        taskArea.appendChild(taskProjectInfo);
        let removeTaskButton=document.createElement("button");
        removeTaskButton.innerText="Remove Task";
        removeTaskButton.addEventListener("click",()=>{
            
            currentTasks=removeTask(currentTasks,currentTask);
            showTasks(currentTasks);
            localStorage.setItem("tasks",JSON.stringify(currentTasks));
            });
    

    taskArea.appendChild(removeTaskButton);    
    tasksArea.appendChild(taskArea);
    });
    mainContent.appendChild(tasksArea);
}
let projectDetails=document.querySelector(".project-details");
function showProjects(){
    
    if(document.querySelector(".project-area")!==null){
        document.querySelector(".project-area").remove;
    }
    currentProjects=JSON.parse(localStorage.getItem("projects"));
    
    let projectArea=document.createElement("div");
    
    projectArea.setAttribute("class","project-area");
    for(let i=0;i<currentProjects.length;i++){
        let     newCurrentProject=document.createElement("button");
        newCurrentProject.innerText=currentProjects[i].projectName;
        newCurrentProject.addEventListener("click",()=>{
            currentTasks=JSON.parse(localStorage.getItem("tasks"));
            currentTasks=sortTasks(currentTasks);
            currentTasks=filterTasks(currentTasks,currentProjects[i].projectName);
            showTasks(currentTasks);
        });
        projectArea.appendChild(newCurrentProject);
    }
    projectDetails.appendChild(projectArea);
}

projectDetails.addEventListener("toggle",()=>{
    try{
        if(projectDetails.open){
            currentProjects=JSON.parse(localStorage.getItem("projects"));
            showProjects();
        }
    } catch {
        alert("There are currently no projects. Try creating a project before showing them.");
    }
});
let newProjectButton=document.querySelector(".new-project-button");
let newProjectDialog=document.querySelector("#new-project-dialog");
newProjectButton.addEventListener("click",(event)=>{
    event.preventDefault();
    let newProjectForm=document.querySelector(".new-project-form");  
    let newProjectSubmission=new FormData(newProjectForm)
    
    makeNewProject(newProjectSubmission.get("pro-name"));
    
    
    
    newProjectDialog.close();
});
let newTaskButton=document.querySelector(".new-task-button");
let newTaskForm=document.querySelector(".new-task-form");
let newTaskDialog=document.querySelector("#new-task-dialog");
newTaskButton.addEventListener("click",(event)=>{
    event.preventDefault();
    let newTaskSubmission=new FormData(newTaskForm);
    makeNewTask(newTaskSubmission);
    currentTasks=JSON.parse(localStorage.getItem("tasks"));
    currentTasks=sortTasks(currentTasks);
    showTasks(currentTasks);
    newTaskDialog.close();
});
let clearProjects=document.querySelector(".clear-projects");
clearProjects.addEventListener("click",()=>{
    localStorage.removeItem("projects");
});
let clearTasks=document.querySelector(".clear-tasks");
clearTasks.addEventListener("click",()=>{
    localStorage.removeItem("tasks");
    
     
     
})

let showTasksButton=document.querySelector(".show-tasks");
showTasksButton.addEventListener("click",()=>{
    try{
        currentTasks=JSON.parse(localStorage.getItem("tasks"))||[];
        currentTasks=sortTasks(currentTasks);
        showTasks(currentTasks);
    } catch{
        alert("There are currently no tasks. Try creating a task before showing them.");
    }

});
let   createTaskButton=document.querySelector(".new-task");
createTaskButton.addEventListener("click",()=>{
    let projectSelection=document.querySelector(".project-names");
    document.querySelector(".project-options-area").remove();
    let projectOptionsArea=document.createElement("div");
    projectOptionsArea.setAttribute("class","project-options-area");
    let projectOptions=JSON.parse(localStorage.getItem("projects"));
    projectOptions.forEach((projectOption)=>{

    
        let newProjectOption=document.createElement("option");
        newProjectOption.innerText=projectOption.projectName;
        projectOptionsArea.appendChild(newProjectOption);
    });
    projectSelection.appendChild(projectOptionsArea);
    
})