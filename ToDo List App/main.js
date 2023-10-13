// setting up variables
let theInput=document.querySelector('.add-task input');
let addBtn=document.querySelector('.add-task .plus');
let tasks=document.querySelector('.tasks-content');
let taskCount=document.querySelector('.task-count span');
let taskComplete=document.querySelector('.task-completed span');

// focus on input
window.onload=function(){
    theInput.focus();
};
// add task
addBtn.onclick=function(){
    if(theInput.value===''){
        console.log('no')
    }
    else{
        let noTask=document.querySelector('.no-task-message');
        if(document.body.contains(document.querySelector('.no-task-message'))){
        //remove no task message
        noTask.remove();
        }
        //create span
        let mainSpan=document.createElement('span');
        // delete btn
        let deletBtn=document.createElement('span');
        //create text span
        let text = document.createTextNode(theInput.value);

        //creatw delete btn text
        let textToDelete = document.createTextNode("Delete");
        //add text & class to span
        
        mainSpan.appendChild(text);
        mainSpan.classList.add('task-box');
        // add to text to delete 
        deletBtn.appendChild(textToDelete); 
        deletBtn.classList.add('delete');
        // add del bt to main span
        mainSpan.appendChild(deletBtn);
        // add task to container
        tasks.appendChild(mainSpan);

        theInput.value='';
        theInput.focus();

        // clac tasks 
        clacTasks();
    }
};

document.addEventListener('click', function(e){
    // delete task
    if(e.target.className=='delete'){
        e.target.parentNode.remove();

        // 
        if(tasks.childElementCount==0){
            createNoTask();
        }
    }
    //finish
    if(e.target.classList.contains('task-box')){
        e.target.classList.toggle('finished');
    }
    clacTasks();
});
// function to create no task message
function createNoTask(){

    //Create message span 
    let masSpan=document.createElement('span');

    // creatr tect message 
    let masText=document.createTextNode('No Tasks to show');

    // add text to msgspan
    masSpan.appendChild(masText);

    // add class to msg span
    masSpan.classList.add('no-task-message');

    // append the message element to the task container
    tasks.appendChild(masSpan);

}

// function to calc tasks 

function clacTasks(){
    //count all tasks
    taskCount.innerHTML=document.querySelectorAll('.tasks-content .task-box').length;
    // count completed tasks
    taskComplete.innerHTML=document.querySelectorAll('.tasks-content .finished').length;
}
