import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

export class TodosService {

    static #todos = []

    static #filters = {
        searchText: '',
        hideCompleted: false,
        sortBy: 'byEdited'
    }

    static getFilteredTodos = () => {
        let sortedTodos = this.#getSortedTodos()
        return sortedTodos.filter((todo) => {
            const searchTextMatch = todo.text.toLowerCase().includes(this.#filters.searchText.toLowerCase())
            const hideCompletedMatch = !this.#filters.hideCompleted || !todo.completed

            return searchTextMatch && hideCompletedMatch
        })
    }

    static #getSortedTodos = () => {
        switch (this.#filters.sortBy) {
            case 'byEdited':
                return this.#todos.sort((a, b) => {
                    if (a.updatedAt > b.updatedAt) {
                        return -1
                    } else if (a.updatedAt < b.updatedAt) {
                        return 1
                    } else {
                        return 0
                    }
                })
            case 'byCreated':
                return this.#todos.sort((a, b) => {
                    if (a.createdAt > b.createdAt) {
                        return -1
                    } else if (a.createdAt < b.createdAt) {
                        return 1
                    } else {
                        return 0
                    }
                })
            case 'alphabetical':
                return this.#todos.sort((a, b) => {
                    if (a.text.toLowerCase() < b.text.toLowerCase()) {
                        return -1
                    } else if (a.text.toLowerCase() > b.text.toLowerCase()) {
                        return 1
                    } else {
                        return 0
                    }
                })
            default:
                return this.#todos
        }
    }

    static getIncompletedTodos = () => this.getFilteredTodos().filter((todo) => !todo.completed)

    static setFilters = ({ searchText, hideCompleted, sortBy }) => {
        if (typeof searchText === 'string') {
            this.#filters.searchText = searchText
        }
        if (typeof hideCompleted === 'boolean') {
            this.#filters.hideCompleted = hideCompleted
        }
        if (typeof sortBy === 'string') {
            this.#filters.sortBy = sortBy
        }
    }

    // Fetch existing todos from localStorage
    static loadTodos = () => {
        const todosJSON = localStorage.getItem('todos')

        try {
            this.#todos = todosJSON ? JSON.parse(todosJSON) : []
        } catch (e) {
            this.#todos = []
        }
    }

    // Save todos to localStorage
    static saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(this.#todos))
    }

    static createTodo = (text) => {
        const timestamp = moment().valueOf()

        this.#todos.push({
            id: uuidv4(),
            text,
            completed: false,
            createdAt: timestamp,
            updatedAt: timestamp
        })
        TodosService.saveTodos()
    }

    static removeTodo = (id) => {
        const todoIndex = this.#todos.findIndex((todo) => todo.id === id)

        if (todoIndex > -1) {
            this.#todos.splice(todoIndex, 1)
            TodosService.saveTodos()
        }
    }

    // Toggle the completed value for a given todo
    static toggleTodo = (id) => {
        const todo = this.#todos.find((todo) => todo.id === id)

        if (todo) {
            todo.completed = !todo.completed
            todo.updatedAt = moment().valueOf()
            TodosService.saveTodos()
        }
    }

}