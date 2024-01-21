document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simulate authentication (replace with actual authentication logic)
    if (username === 'user' && password === 'pass') {
      window.location.href = '/write-article.html';
    } else {
      alert('Invalid credentials');
    }
  });
  