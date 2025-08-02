
const inputTodo = document.getElementById('input-todo');
const addTodo = document.getElementById('add-btn');
const todoContainer = document.getElementById('todo-container')

addTodo.addEventListener('click', () => {

    const value = inputTodo.value;

    const li = document.createElement('li');
    li.innerText = value

    const button = document.createElement('button')
    button.innerText = 'X'

    button.addEventListener('click', () => {
        li.remove()
    })


    li.appendChild(button)

    todoContainer.appendChild(li)
    inputTodo.value = ''


})