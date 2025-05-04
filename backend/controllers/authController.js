const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findUserByUsername, createUser } = require('../models/userModel');
require('dotenv').config();

async function register(req, res) {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(req.body);
  if (!username || !password) return res.status(400).json({ message: 'Username and password required' });

  const user = await findUserByUsername(username);
  if (user) return res.status(409).json({ message: 'Username already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await createUser(username, hashedPassword);

  res.status(201).json({ id: newUser.id, username: newUser.username });

}

async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Username and password required' });

  const user = await findUserByUsername(username);
  if (!user) return res.status(401).json({ message: 'User does not existed' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Password is incorrect' });

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '12h' });
  res.json({ token });
}

module.exports = { register, login };
