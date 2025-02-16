const { createApp } = Vue

/**
 * Todo application main component
 * Manages todo items with localStorage persistence
 */
createApp({
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos') || '[]'),
            newTodoText: '',
            newTodoDueDate: ''
        }
    },

    methods: {
        /**
         * Add a new todo item to the list
         * @returns {void}
         */
        addTodo() {
            if (this.newTodoText.trim()) {
                this.todos.push({
                    id: Date.now(),
                    text: this.newTodoText.trim(),
                    completed: false,
                    dueDate: this.newTodoDueDate,
                    editing: false
                })
                this.newTodoText = ''
                this.newTodoDueDate = ''
                this.saveTodos()
            }
        },

        /**
         * Remove a todo item from the list
         * @param {Object} todo - The todo item to remove
         * @returns {void}
         */
        removeTodo(todo) {
            const index = this.todos.indexOf(todo)
            if (index > -1) {
                this.todos.splice(index, 1)
                this.saveTodos()
            }
        },

        /**
         * Enter edit mode for a todo item
         * @param {Object} todo - The todo item to edit
         * @returns {void}
         */
        startEditing(todo) {
            todo.editing = true
            todo.editText = todo.text
        },

        /**
         * Save changes to a todo item
         * @param {Object} todo - The todo item being edited
         * @returns {void}
         */
        finishEditing(todo) {
            if (todo.editText.trim()) {
                todo.text = todo.editText.trim()
                todo.editing = false
                this.saveTodos()
            }
        },

        /**
         * Cancel editing a todo item
         * @param {Object} todo - The todo item being edited
         * @returns {void}
         */
        cancelEditing(todo) {
            todo.editing = false
        },

        /**
         * Save todos to localStorage
         * @returns {void}
         */
        saveTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos))
        }
    },

    watch: {
        /**
         * Watch for changes in todos array and save to localStorage
         * @param {Array} newTodos - The updated todos array
         * @returns {void}
         */
        'todos': {
            handler(newTodos) {
                this.saveTodos()
            },
            deep: true
        }
    }
}).mount('#app')