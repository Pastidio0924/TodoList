const db = require('./db');

async function getTodos(userId) {
  const [rows] = await db.query('SELECT * FROM todos WHERE user_id = ?', [userId]);
  return rows;
}

async function getTodoById(id, userId) {
  const [rows] = await db.query('SELECT * FROM todos WHERE id = ? AND user_id = ?', [id, userId]);
  return rows[0];
}

async function createTodo(title, userId) {
  const [result] = await db.query('INSERT INTO todos (title, user_id) VALUES (?, ?)', [title, userId]);
  return { id: result.insertId, title, completed: false };
}

async function updateTodo(id, userId, title, completed) {
  const [result] = await db.query(
    'UPDATE todos SET title = ?, completed = ? WHERE id = ? AND user_id = ?',
    [title, completed, id, userId]
  );
  return result.affectedRows > 0;
}

async function deleteTodo(id, userId) {
  const [result] = await db.query('DELETE FROM todos WHERE id = ? AND user_id = ?', [id, userId]);
  return result.affectedRows > 0;
}

module.exports = { getTodos, getTodoById, createTodo, updateTodo, deleteTodo };
