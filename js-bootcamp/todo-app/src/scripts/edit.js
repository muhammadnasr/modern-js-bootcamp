import { renderEditTodo, generateLastEdited } from './views'
import { TodosService } from './todos-service'


const textElement = document.querySelector('#todo-text')
const removeElement = document.querySelector('#remove-todo')
const dateElement = document.querySelector('#last-edited')
const todoId = location.hash.substring(1)

TodosService.loadTodos()    
renderEditTodo(todoId)

textElement.addEventListener('input', (e) => {
    const todo = TodosService.updateTodo(todoId, {
        text: e.target.value
    })
    dateElement.textContent = generateLastEdited(todo.updatedAt)
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