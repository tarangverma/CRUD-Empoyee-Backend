const express = require('express');
const User = require('./user');

const router = express.Router();

// Create a new user
router.post('/users', async (req, res) => {
  const {  name, department, position, salary } = req.body;

  try {
    const user = new User({ name, department, position, salary});
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get users by id
router.get('/users/:id', async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update a user
router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, department, position, salary} = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { name, department, position, salary }, { new: true });
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = router;