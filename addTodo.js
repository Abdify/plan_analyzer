const todoContainer = document.getElementById("todoContainer");
const addTodoContainer = document.querySelector(".addTodo");
const addTodoLayer = document.querySelector(".addTodoLayer");

//Add to do animation
addTodoLayer.addEventListener("click", () => {
    addTodoContainer.classList.add("addTodoAnimation");
    addTodoLayer.classList.add("addTodoLayerAnimation");
});
addTodoLayer.addEventListener("animationstart", (e) => {
    if (e.animationName === "slideUp") {
        addTodoContainer.style.width = "80%";
        addTodoLayer.style.bottom = "500px";
    }
});

//Remove to do animation
todoContainer.addEventListener("click", (e) => {
    if (
        e.target.className !== "addTodoLayer" &&
        e.target.className !== "plusBtn" &&
        e.target.className !== "todoInput" &&
        e.target.id !== "todoTitle" &&
        e.target.id !== "todoDescription"
    ) {
        addTodoContainer.classList.remove("addTodoAnimation");
        addTodoLayer.classList.remove("addTodoLayerAnimation");
        addTodoContainer.style.width = "";
        addTodoLayer.style.bottom = "0px";
    }
});

//Display Todo

const todoTitle = document.getElementById("todoTitle");
const todoDescription = document.getElementById("todoDescription");

document.getElementById("addTodoBtn").addEventListener("click", () => {
    const title = todoTitle.value;
    const description = todoDescription.value;
    const newTodo = { title, description };

    let todoList = [];
    if (localStorage.getItem("todoList")) {
        todoList = JSON.parse(localStorage.getItem("todoList"));
    }

    todoList.push(newTodo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    displayTodo();
});

let displayTodoContainer = document.querySelector(".displayTodo");

const displayTodo = () => {
    let todoList = JSON.parse(localStorage.getItem("todoList"));
    displayTodoContainer.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        todo = todoList[i];
        const { title, description, bgColor } = todo;
        // console.log(todo);
        displayTodoContainer.innerHTML += `
      <div class="todoItem" style="background-color: ${bgColor};">
        <div class="todoItemLayer"></div>
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
    `;
    }
};
if (localStorage.getItem("todoList")) {
    displayTodo();
}
