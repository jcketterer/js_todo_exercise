const todoList = document.querySelector('#todoList');
const form = document.querySelector('#addtodo');

const todoSaved = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < todoSaved.length; i++) {

    const newTask = document.createElement('li');

    newTask.innerText = savedTodo[i].todo;
    newTask.isCompleted = savedTodo[i].isCompleted ? true : false;

    if (newTask.isCompleted) {
        newTask.style.textDecoration = "line-through";
    }
    todoList.appendChild(newTask);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const newTask = document.createElement('li');
    const actualTodo = document.getElementById('todo').value;

    newTask.innerText = actualTodo;
    newTask.isCompleted = false;

    form.reset();

    todoList.appendChild(newTask);
})

todoList.addEventListener('click', function(e) {
    let clicklistener = e.target;

    if(!clicklistener.isCompleted) {
        clicklistener.style.textDecoration = 'line-through';
        clicklistener.isCompleted = true;
    } else {
        clicklistener.style.textDecoration = 'none';
        clicklistener.isCompleted = false;
    }

    for (let i = 0; i < todoSaved.length; i++) {
        if (todoSaved[i].task === clicklistener.innerText) {
            todoSaved[i].isCompleted = !todoSaved[i].isCompleted;
            localStorage.setItem('todo', JSON.stringify(todoSaved));
        }
    }
});
