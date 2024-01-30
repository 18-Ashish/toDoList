let prompt1 = document.getElementById("prompt")
let container = document.getElementById("container");

function select(){
    if(prompt1.value==""){
        alert("First add the task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = prompt1.value;
        container.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        prompt1.value = "";
        saving();
    }
}

container.addEventListener('click', function(e){
    if(e.target.tagName=='SPAN'){
       console.log( e.target.remove());
        saving();
    }
})


function saving(){
    let data = prompt1.value;
    let setLocal = localStorage.setItem("hello",data)
    let getLocal = localStorage.getItem("hello");
    console.log(getLocal); 
}