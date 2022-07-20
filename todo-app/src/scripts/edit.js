import { renderEditTodo } from './views'
import { TodosService } from './todos-service'


const textElement = document.querySelector('#todo-text')
const saveElement = document.querySelector('#save-todo')
const removeElement = document.querySelector('#remove-todo')
const dateElement = document.querySelector('#last-edited')
const todoId = location.hash.substring(1)

TodosService.loadTodos()    
renderEditTodo(todoId)

saveElement.addEventListener('click', (e) => {
    const todo = TodosService.updateTodo(todoId, {
        text: textElement.value
    })
    location.assign('/index.html')
})

removeElement.addEventListener('click', (e) => {
    TodosService.removeTodo(todoId)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        renderEditTodo(todoId)
    }
})