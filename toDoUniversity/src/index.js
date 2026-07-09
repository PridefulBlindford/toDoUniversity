import {Task} from "./task.js";
import {Project } from "./project.js";
import { createRecurringTask } from "./recur.js";
import {currentTasks,projects,tasks} from "./createNew.js";
import {sortTasksAlgo,sortTasks,filterTasks,removeTask} from "./manageTasks.js";

function showTasks(curredtTasks){
    
    let mainContent=document.querySelector(".main-content");
    currentTasks.forEach((currentTask)=>{
        let taskArea=document.createElement("div");
        taskArea.setAttribute("class",currentTask.taskName);
        let taskHeading=document.createElement("h3");
        taskHeading.innerText=`${currentTask.taskName} (${taskName.taskCompleted?"completed":"not completed"})`;
        taskArea.appendChild(taskHeading);
        let  taskDueDate=document.createElement("p");
        taskDueDate.innerText=`Due ${currentTask.taskDate} at ${currentTask.task} at ${currentTask.taskHour}:${currentTask.taskMinute}`;
        taskArea.appendChild(taskDueDate);
        let taskInfoButton=document.createElement("button");
        taskInfoButton.innerText="More Info";
        taskInfoButton.addEventListener("click",()=>{
            let taskInfoArea=document.createElement("div");
            taskInfoArea.setAttribute("class",`${currentTask.taskName}-info`);
            moreInfoButton.innerText="Less Info";
            let taskInfo=document.createElement("p");
            taskInfo.innerText=`Description: ${currentTask.taskDescription}`;
            taskInfoArea.appendChild(taskInfo);
            let taskCompInfo=document.createElement("p");
            taskCompInfo.innerText=`Task Completed: ${currentTask.taskCompleted?"yes":"no"}`;
            taskHeading.innerText=`${currentTask.taskName} (${currentTask.taskCompleted?"completed":"not completed"})`;
            taskInfoArea.appendChild(taskCompInfo);
            let taskCompButton=document.createElement("button");
            taskCompButton.innerText="Change Completion Status";
            taskCompButton.addEventListener("click",()=>{
                currentTask.changeTaskCompleted(currentTask.taskCompleted);
                taskCompInfo.innerText=`Completed: ${currentTask.taskComepleted?"yes":"no"}`;
            });
            taskInfoArea.appendChild(taskCompButton);
            let taskPriorityInfo=document.createElement("p");
            taskPriorityInfo.innerText=`Priority Level: ${currentTask.taskPriority}`;
            taskInfoArea.appendChild(taskPriorityInfo);
            let taskPriorityButton=document.createElement("button");
            taskPriorityButton.innerText="Change Priority Level";
            taskPriorityButton.addEventListner("click",()=>{
                let newPriorityLevel=parseInt(prompt("Enter a priority level",currentTask.taskPriority));
                currentTask.changeTaskPriorityLevel(newPriorityLevel);
                taskPriorityInfo.innerText=`Priority Level: ${currentTask.taskPriority}`;
            });
            taskInfoArea.appendChild(taskPriorityButton);
            moreInfoButton.addEventListener("click",()=>{
                document.querySelector(`.${currentTask.taskName}`).remove;
            });
            taskArea.appendChild(taskInfoArea);
            
        });
        let taskProjectInfo=document.createElement("p");
        taskProjectInfo.innerText=`Project: ${currentTask.taskProjectName}`;
        taskArea.appendChild(taskProjectinfo);
        let removeTaskButton=document.createElement("button");
        removeTaskButton.innerText="Rmove Task";
        removeTaskButton.addEventListener("click",()=>{
            document.querySelector(`.${currentTask.taskName}`).remove;
            showTasks(removeTask(currentTasks,currentTask.taskName))
            });

        
    });
}
function showProjects(currentProjects){
    let projectView=document.querySelector(".view-projects");
    let navArea=document.querySelector("nav");
    let projectsArea=document.createElement("div");
    projectsArea.setAttribute("class","current-projects");
    projectView.addEventListener("click",()=>{
        projectView.innerText="Hide Projects";
        currentProjects.forEach((currentProject)=>{
            let currentProjectButton=document.createElement("button");
            currentProjectButton.innerText=currentProject.projectName;
            currentProjectButton.addEventListener("click",()=>{
                showTasks(filterTasks(currentProject));
            });
            projectsArea.appendChild(currentProjectButton);
         });
         pnavArea.appendChild(projectArea);
         projectView.addEventListener("click",()=>{
            document.querySelector(".current-projects").remove;
            projectView.innerText="Show Projects";
         });
    });
}
showTasks(sortTasks(currentTasks));