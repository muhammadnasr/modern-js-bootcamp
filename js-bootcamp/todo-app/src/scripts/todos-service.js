import { v4 as uuidv4 } from 'uuid'

export class TodosService {

    static #todos = []

    static filters = {
        searchText: '', 
        hideCompleted: false
    }
    
    static getFilteredTodos = () => {
        return todos.filter((todo) => {
            const searchTextMatch = todo.text.toLowerCase().includes(this.filters.searchText.toLowerCase())
            const hideCompletedMatch = !this.filters.hideCompleted || !todo.completed
    
            return searchTextMatch && hideCompletedMatch
        })    
    }

    static getIncompletedTodos = () => this.getFilteredTodos().filter((todo) => !todo.completed)
    
    static setFilters = ({ searchText, hideCompleted }) => {
        if (typeof searchText === 'string') {
            this.filters.searchText = searchText
        }
        if (typeof hideCompleted === 'boolean') {
           this.filters.hideCompleted = hideCompleted
        }
    }

    // Fetch existing todos from localStorage
    static loadTodos = () => {
        const todosJSON = localStorage.getItem('todos')

        try {
            todos = todosJSON ? JSON.parse(todosJSON) : []
        } catch (e) {
            todos = []
        }
    }

    // Save todos to localStorage
    static saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    static createTodo = (text) => {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
        TodosService.saveTodos()
    }

    static removeTodo = (id) => {
        const todoIndex = todos.findIndex((todo) => todo.id === id)

        if (todoIndex > -1) {
            todos.splice(todoIndex, 1)
            TodosService.saveTodos()
        }
    }

    // Toggle the completed value for a given todo
    static toggleTodo = (id) => {
        const todo = todos.find((todo) => todo.id === id)

        if (todo) {
            todo.completed = !todo.completed
            TodosService.saveTodos()
        }
    }

}