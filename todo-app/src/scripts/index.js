import { renderTodos } from './views'
import { TodosService } from './todos-service'

TodosService.loadTodos()    
renderTodos()

document.querySelector('#search-text').addEventListener('input', (e) => {
    TodosService.setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        TodosService.createTodo(text)
        renderTodos()
        e.target.elements.text.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    TodosService.setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})


document.querySelector('#filter-by').addEventListener('change', (e) => {
    TodosService.setFilters({
        sortBy: e.target.value
    })
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        TodosService.loadTodos()
        renderTodos()
    }
})