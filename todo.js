document.getElementById("add").addEventListener('click',()=>{
    if(document.getElementById("task").value===''){
        alert("Please enter a task");
    }
    else {
        document.getElementById("tasklist").innerHTML+=`<div id=innercon>
        <span class=tasks>${document.getElementById("task").value}
        </span>
        <button class=del><i class="fa-solid fa-trash"></i></button>
        </div>
        `
        let alltasks=document.querySelectorAll(".del")
       for(i=0;i<alltasks.length;i++){
        alltasks[i].onclick=function (){
            this.parentNode.remove();            
           
        }
        document.getElementById("task").value='';
       }  
    }
    
   
})