const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
            getAllTasks(); // array method örneği


    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

inputBox.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

function removeCompletedTasks() {
    const tasks = Array.from(listContainer.getElementsByTagName("li"));
    tasks.filter(task => task.classList.contains("checked"))
         .forEach(task => task.remove());
    saveData();
}