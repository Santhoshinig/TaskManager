function addtable() {
    const taskSelect = document.getElementById("task");
    const descriptionInput = document.getElementById("description");
    const durationInput = document.getElementById("duration");
    const error = document.getElementById("error");
    const taskTable = document.getElementById("table").querySelector("tbody");

    const task = taskSelect.value;
    const description = descriptionInput.value;
    const duration = durationInput.value;

  
    if (!task || !description || !duration) {
        error.textContent = "Please fill in all fields.";
        return;
    } else {
        error.textContent = "";
    }

    const row = document.createElement("tr");
    row.setAttribute("data-category", task);

    const taskCell = document.createElement("td");
    const descriptionCell = document.createElement("td");
    const durationCell = document.createElement("td");
    const actionsCell = document.createElement("td");

    taskCell.textContent = task;
    descriptionCell.textContent = description;
    durationCell.textContent = duration;

  
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";

    editButton.addEventListener("click", function () {
        
    });

    deleteButton.addEventListener("click", function () {
       
        row.remove();
    });

   
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

   
    row.appendChild(taskCell);
    row.appendChild(descriptionCell);
    row.appendChild(durationCell);
    row.appendChild(actionsCell);

    taskTable.appendChild(row);

    clearInputField();
}

function clearInputField() {
    document.getElementById("task").value = "";
    document.getElementById("description").value = "";
    document.getElementById("duration").value = "";
}

function filterTable() {
    const filterValue = document.getElementById("filterDropdown").value;
    const rows = document.getElementById("table").querySelectorAll("tbody tr");

    rows.forEach((row) => {
        const taskCategory = row.getAttribute("data-category");

        
        if (filterValue === "All" || taskCategory === filterValue) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}


let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function startstop() {
    if (!running) {
        running = true;
        timer = setInterval(()=>{
           seconds++;
       if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
      }
      let format=`${hours.toString().padStart('2',0)}:${minutes.toString().padStart('2',0)}:${seconds.toString().padStart('2',0)}`
      document.getElementById("display").innerText=format
      document.getElementById("stopwatch").innerText="Stop"
    },1000)}
    else{
     document.getElementById("stopwatch").innerText="Start";
     clearInterval(timer);
     running=false;
    }
}

function reset() {
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startBtn").disabled = false;
}

