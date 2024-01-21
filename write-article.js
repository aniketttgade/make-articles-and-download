// write-article.js
document.getElementById('articleForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const title = document.getElementById('articleTitle').value;
  const content = document.getElementById('articleContent').value;

  // Save the article locally (for demonstration purposes)
  const savedArticles = JSON.parse(localStorage.getItem('articles')) || [];
  savedArticles.push({ title, content });
  localStorage.setItem('articles', JSON.stringify(savedArticles));

  // Redirect to the "View Articles" page
  window.location.href = 'view-articles.html';
});


