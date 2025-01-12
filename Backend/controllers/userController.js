const { User } = require('../models/User');

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = await User.query().insert({ email, password }); 
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.query().findOne({ email });

    // Verify password (replace with actual password hashing and comparison)
    if (user && user.password === password) {
      // Generate JWT (not implemented in this example)
      res.status(200).json({ message: 'Login successful' }); 
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};