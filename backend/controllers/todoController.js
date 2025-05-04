const { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } = require('../models/todoModel');

async function getAllTodos(req, res) {
  const todos = await getTodos(req.user.id);
  res.json(todos);
}

async function addTodo(req, res) {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const todo = await createTodo(title, req.user.id);
  res.status(201).json(todo);
}

async function updateTodoById(req, res) {
  const { id } = req.params;
  const { title, completed } = req.body;

  const success = await updateTodo(id, req.user.id, title, completed);
  if (!success) return res.status(500).json({ message: 'Failed to update todo' });

  res.json({ id, title: title, completed: completed });
}

async function deleteTodoById(req, res) {
  const { id } = req.params;
  const todo = await getTodoById(id, req.user.id);
  if (!todo) return res.status(404).json({ message: 'Todo not found' });

  const success = await deleteTodo(id, req.user.id);
  if (!success) return res.status(500).json({ message: 'Failed to delete todo' });

  res.json({ message: 'Todo deleted' });
}

module.exports = { getAllTodos, addTodo, updateTodoById, deleteTodoById };
