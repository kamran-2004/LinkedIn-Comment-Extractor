document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  chrome.storage.local.set({ credentials: { email, password } }, function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('url-form').style.display = 'block';
  });
});

document.getElementById('url-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const postUrl = document.getElementById('post-url').value;
  
  chrome.runtime.sendMessage({ action: 'extractComments', url: postUrl }, function(response) {
    const status = document.getElementById('status');
    if (response.success) {
      status.textContent = 'Comments extracted successfully! Check your downloads.';
    } else {
      status.textContent = 'Error extracting comments: ' + response.error;
    }
  });
});
