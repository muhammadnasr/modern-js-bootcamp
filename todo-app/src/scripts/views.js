import { TodosService } from './todos-service'
import moment from 'moment'

// Render application todos based on filters
const renderTodos = () => {
    const todoEl = document.querySelector('#todos')
    const filteredTodos = TodosService.getFilteredTodos()

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(TodosService.getIncompletedTodos()))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There are no to-dos to show'
        todoEl.appendChild(messageEl)
    }
}

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const editButton = document.createElement('button')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        TodosService.toggleTodo(todo.id)
        renderTodos()
    })

    // Setup the todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the edit button
    editButton.textContent = 'edit'
    editButton.classList.add('button', 'button--text')
    editButton.classList.add('button', 'button--push--right')
    todoEl.appendChild(editButton)
    editButton.addEventListener('click', () => {
        location.assign(`/edit.html#${todo.id}`)
    })

    // Setup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        TodosService.removeTodo(todo.id)
        renderTodos()
    })

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    const plural = incompleteTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    return summary
}


const renderEditTodo = (todoId) => {
    const textElement = document.querySelector('#todo-text')
    const dateElement = document.querySelector('#last-edited')

    const todo = TodosService.getTodoByID(todoId)

    if (!todo) {
        location.assign('/index.html')
    }

    textElement.value = todo.text
    dateElement.textContent = generateLastEdited(todo.updatedAt)
}

// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
}

export { generateTodoDOM, renderTodos, generateSummaryDOM, renderEditTodo, generateLastEdited }