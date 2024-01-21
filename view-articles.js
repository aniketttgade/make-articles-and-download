// view-articles.js
document.addEventListener('DOMContentLoaded', function () {
    const articlesListContainer = document.querySelector('.articles-list');
  
    // Retrieve saved articles from local storage
    let savedArticles = JSON.parse(localStorage.getItem('articles')) || [];
  
    // Display the articles
    function displayArticles() {
      articlesListContainer.innerHTML = ''; // Clear previous content
  
      if (savedArticles.length > 0) {
        savedArticles.forEach((article, index) => {
          const articleSection = document.createElement('div');
          articleSection.classList.add('article');
          
          const titleElement = document.createElement('h2');
          titleElement.textContent = article.title;
  
          const contentElement = document.createElement('p');
          contentElement.textContent = article.content;
  
          const deleteButton = document.createElement('button');
          deleteButton.classList.add('delete-button');
          deleteButton.innerHTML = '<svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 4v1H5v2h14V5h-3V4h5v16H3V4h5zm-3 2v14h14V6H5zm9 1h1v9h-1zm-3 0h1v9h-1zm-3 0h1v9H8z"/></svg>';
          deleteButton.addEventListener('click', () => handleDelete(index));
  
          const downloadButton = document.createElement('button');
          downloadButton.classList.add('download-button');
          downloadButton.innerHTML = '<svg class="download-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 7v6h4l-5 5-5-5h4V7z"/></svg>';
          downloadButton.addEventListener('click', () => handleDownload(article));
  
          articleSection.appendChild(titleElement);
          articleSection.appendChild(contentElement);
          articleSection.appendChild(deleteButton);
          articleSection.appendChild(downloadButton);
  
          articlesListContainer.appendChild(articleSection);
          
          // Add a separator line between articles, except for the last one
          if (index < savedArticles.length - 1) {
            const separator = document.createElement('hr');
            articlesListContainer.appendChild(separator);
          }
        });
      } else {
        articlesListContainer.innerHTML = '<p>No articles available</p>';
      }
    }
  
    // Handle delete button click
    function handleDelete(index) {
      savedArticles.splice(index, 1);
      localStorage.setItem('articles', JSON.stringify(savedArticles));
      displayArticles(); // Update UI
    }
  
    // Handle download button click
    function handleDownload(article) {
      const blob = new Blob([`Title: ${article.title}\n\n${article.content}`], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement('a');
      a.href = url;
      a.download = `${article.title}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  
    displayArticles(); // Initial display
  });
  