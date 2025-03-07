chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'extractComments') {
    chrome.storage.local.get(['credentials'], function(result) {
      const { email, password } = result.credentials;
      const postUrl = request.url;
      
      fetch('http://localhost:5000/extract-comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          post_url: postUrl
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const blob = new Blob([data.csv_content], { type: 'text/csv' });
          const url = URL.createObjectURL(blob);
          
          chrome.downloads.download({
            url: url,
            filename: 'linkedin_comments.csv',
            saveAs: true
          }, function(downloadId) {
            sendResponse({ success: true });
          });
        } else {
          sendResponse({ success: false, error: data.error });
        }
      })
      .catch(error => {
        sendResponse({ success: false, error: error.message });
      });
    });
    return true; // Keep the message channel open for async response
  }
});
