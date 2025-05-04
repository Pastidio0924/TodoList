const db = require('./db');

async function findUserByUsername(username) {
  const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0];
}

async function createUser(username, hashedPassword) {
  const [result] = await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
  return { id: result.insertId, username };
}

async function findUserById(id) {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
}

module.exports = { findUserByUsername, createUser, findUserById };
