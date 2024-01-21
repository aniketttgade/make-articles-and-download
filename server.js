const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Simple authentication middleware (replace with actual authentication logic)
const authenticate = (req, res, next) => {
  if (req.session && req.session.authenticated) {
    return next();
  } else {
    res.redirect('/');
  }
};

// Serve static files
app.use(express.static('public'));


// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulate authentication (replace with actual authentication logic)
  if (username === 'user' && password === 'pass') {
    req.session.authenticated = true;
    res.redirect('/write-article.html');
  } else {
    res.redirect('/');
  }
});

// Logout endpoint
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
