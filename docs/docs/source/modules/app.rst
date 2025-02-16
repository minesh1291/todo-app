JavaScript Application
===================

Vue.js Application
----------------

The main application logic is implemented in ``app.js`` using Vue.js 3.

Components
~~~~~~~~~

Todo List
^^^^^^^^^

The todo list component provides the following functionality:

* Add new todos with due dates
* Mark todos as complete
* Edit existing todos
* Delete todos
* Persistent storage using localStorage

Methods
^^^^^^^

.. js:function:: addTodo()

   Add a new todo item to the list.

.. js:function:: removeTodo(todo)

   Remove a todo item from the list.

   :param Object todo: The todo item to remove

.. js:function:: startEditing(todo)

   Enter edit mode for a todo item.

   :param Object todo: The todo item to edit

.. js:function:: finishEditing(todo)

   Save changes to a todo item.

   :param Object todo: The todo item being edited

.. js:function:: cancelEditing(todo)

   Cancel editing a todo item.

   :param Object todo: The todo item being edited

.. js:function:: saveTodos()

   Save todos to localStorage.