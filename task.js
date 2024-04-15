function addtable(){
var task= document.getElementById("task").value;
var description= document.getElementById("description").value;
var duration= document.getElementById("duration").value;
const error=document.getElementById('error');
error.innerHTML=(!task||!description||!duration)?alert('Enter all the details'):'';

if(task && description && duration){
    const tableele=document.getElementById('table');
    const trelement=document.createElement('tr');
    const tbodyele=document.createElement('tbody');

    const taskele=document.createElement('td');
    const descele=document.createElement('td');
    const duraele=document.createElement('td');
    const actions = document.createElement('td');
    const editele= document.createElement('button');
    const deletele= document.createElement('button');

    taskele.innerHTML=task;
    descele.innerHTML=description;
    duraele.innerHTML=duration;
    editele.textContent="Update"
    deletele.textContent="Delete"
    editele.classList.add('edit');
    deletele.classList.add('delete')
    editele.addEventListener('click', function () {
        editTask(trelement);
    });

    deletele.addEventListener('click', function () {
        deleteTask(trelement);
    });
    actions.appendChild(editele);
    actions.appendChild(deletele);
    trelement.appendChild(taskele);
    trelement.appendChild(descele);
    trelement.appendChild(duraele);
    trelement.appendChild(editele);
    trelement.appendChild(deletele);
    tbodyele.appendChild(trelement);
    tableele.appendChild(tbodyele);
    updateDropdown(task);

}
}
function editTask(row) {
    var task = row.getElementsByTagName('td')[0].innerHTML;
    var description = row.getElementsByTagName('td')[1].innerHTML;
    var duration = row.getElementsByTagName('td')[2].innerHTML;
    document.getElementById("task").value = task;
    document.getElementById("description").value = description;
    document.getElementById("duration").value = duration;
}

function deleteTask(row) {
    row.remove();
}


function updateDropdown(task) {
  var filterColumn = document.getElementById("filterColumn");
  var option = document.createElement("option");
  option.text = task;
  option.value = task;
  filterColumn.add(option);
}
    var table = document.getElementById("tables");


  function clearInputField() {

    document.getElementById("task").value = "";
    document.getElementById("description").value = "";
    document.getElementById("duration").value = "";
}

let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function startstop() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            let format = `${hours.toString().padStart('2',0)}:${minutes.toString().padStart('2',0)}:${seconds.toString().padStart('2',0)}`
            document.getElementById("display").innerText = format;
            document.getElementById("stopwatch").innerText = "Stop";
        }, 1000);
    } else {
        clearInterval(timer);
        running = false;
      
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;
       
        let durationHours = Math.floor(totalSeconds / 3600);
        let durationMinutes = Math.floor((totalSeconds % 3600) / 60);
        let durationSeconds = totalSeconds % 60;
     
        document.getElementById("duration").value = `${durationHours.toString().padStart('2', 0)}:${durationMinutes.toString().padStart('2', 0)}:${durationSeconds.toString().padStart('2', 0)}`;
     
        document.getElementById("duration").disabled = false;
       
        seconds = 0;
        minutes = 0;
        hours = 0;
        document.getElementById("display").innerText = "00:00:00";
        document.getElementById("stopwatch").innerText = "Start";
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


function Filtering() {
    var select = document.getElementById("filterDropdown").value;
    var table = document.getElementById("table");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var category = rows[i].getElementsByTagName("td")[0].innerText; // Assuming category is in the first column
        if (category === select || select === "All") {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Perform authentication
    authenticate(username, password);
});

function authenticate(username, password) {
    // Assume authentication data is stored in JSON format
    var users = [
        { "username": "santho", "password": "1234", "role": "admin" },
        { "username": "gopal", "password": "4321", "role": "admin" }
    ];

    var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
      
        alert('Welcome, ' + authenticatedUser.username + '!');
        window.location.href = 'index.html';
      
    } else {
        // Authentication failed
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
}
