const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let list = [];

function paintTodo(paintTemp) {
    const li = document.createElement("li");
    li.id = paintTemp.id;
    const span = document.createElement("span");
    span.innerText = paintTemp.text;
    const button = document.createElement("button");
    button.classList.add("list-button");
    button.innerText = "x";
    button.addEventListener("click", delList);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);   
}

function handleToDoList (event) {
    event.preventDefault();
    const tempToDo = toDoInput.value;
    toDoInput.value = "";
    const object = {
        id : Date.now(),
        text : tempToDo
    };
    list.push(object);
    savedToDoList();
    paintTodo(object);
}

function delList(event) {
    const delLi = event.target.parentElement;
    delLi.remove();
    list = list.filter((item) => item.id !== parseInt(delLi.id));
    savedToDoList();
}

function savedToDoList() {
    localStorage.setItem("todolist", JSON.stringify(list));
    quotesHidden();
}

function quotesHidden() {
    const tempQuotes = localStorage.getItem("todolist");
    const templist = JSON.parse(tempQuotes);
    if(templist.length >= 5){
        $( '#quotes' ).fadeOut("slow");
    } else {
        $( '#quotes' ).fadeIn("slow");
    }
}



toDoForm.addEventListener("submit", handleToDoList);

const ifToDoList = localStorage.getItem("todolist");
if(ifToDoList !== null) {
    const parsedList = JSON.parse(ifToDoList);
    list = parsedList;
    parsedList.forEach(item => {
        paintTodo(item);
    });
    quotesHidden();
}
