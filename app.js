
document.addEventListener('DOMContentLoaded', function() {

    const todoList = document.querySelector('#todoList');
    const form = document.querySelector('#addtodo');
    const input = document.querySelector('#todo');


    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const newTodo = document.createElement('li');

        const removeButton = document.createElement('button');
        removeButton.innerText = 'DONE';

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox'

        newTodo.innerText = input.value;
        newTodo.appendChild(checkBox);
        newTodo.prepend(removeButton);

        todoList.appendChild(newTodo);

        form.reset();
    });

    todoList.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentNode.remove();
        }else if (e.target.tagName === 'LI') {
            e.target.style.textDecoration = 'line-through';
        }
    });
});