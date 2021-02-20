const sideBar = document.getElementById("sideBar");
const colorSchemesContainer = document.getElementById("colorSchemes");
const fChangeBg = document.querySelector(".fChangeBg");
fChangeBg.addEventListener("click", () => {
    colorSchemesContainer.style.opacity = "1";
    colorSchemesContainer.style.zIndex = '1';
});

let colorSchemes = [];
document.querySelectorAll(".colorScheme").forEach((color) => {
    colorSchemes.push(color.style.backgroundColor);
});

const todoItems = document.querySelectorAll(".todoItem");


displayTodoContainer.addEventListener("click", (e) => {
    if (e.target.className === "todoItemLayer") {
        //Sidebar animation
        sideBar.style.left = 0;
        todoContainer.style.width = "80%";

        const x = document.querySelector(".activeTodo");
        if (x !== null) x.classList.remove("activeTodo");

        // todoItems.forEach((todo) => {
        //     todo.classList.remove('activeTodo');
        // });
        e.target.parentNode.classList.add("activeTodo");
        addFeatures();
    }
});

const addFeatures = () => {
    sideBar.addEventListener("click", (e) => {
        if (e.target.className === "colorScheme") {
            // let activeTodo = document.querySelector(".activeTodo");

            let todoList = JSON.parse(localStorage.getItem("todoList"));

            todoItems.forEach((todo, i) => {
                let todoItems = [...document.querySelectorAll(".todoItem")];
                if (todoItems[i].classList[1] === "activeTodo") {
                    todoList[i].bgColor = e.target.style.backgroundColor;
                    localStorage.setItem("todoList", JSON.stringify(todoList));
                    displayTodo();
                    
                    [...document.querySelectorAll(".todoItem")][i].classList.add("activeTodo");
                    console.log(todoItems[i]);
                }
            });


            //activeTodo.style.backgroundColor = e.target.style.backgroundColor;
        }
    });
};

todoContainer.addEventListener("click", (e) => {
    if (e.target.className !== "todoItemLayer") {
        sideBar.style.left = "";
        todoContainer.style.width = "";
        colorSchemesContainer.style.opacity = "";
        colorSchemesContainer.style.zIndex = "";
        const x = document.querySelector(".activeTodo");
        if (x !== null) x.classList.remove("activeTodo");
    }
});
