const express = require('express');
const router = express.Router();
const { getAllTodos, addTodo, updateTodoById, deleteTodoById } = require('../controllers/todoController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, getAllTodos);
router.post('/', authenticateToken, addTodo);
router.put('/:id', authenticateToken, updateTodoById);
router.delete('/:id', authenticateToken, deleteTodoById);

module.exports = router;
