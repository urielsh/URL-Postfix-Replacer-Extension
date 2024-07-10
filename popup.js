/* author: Uriel Shany 
*"https://www.freepik.com/author/freepik/icons/basic-straight-flat_3#from_element=families_block" - Icon by Freepik
*/
document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let url = new URL(tabs[0].url);
      url.pathname = "/somePostfixToAdd"; // Ensure this matches the postfix change
  
      fetch(url.href)
        .then(response => response.text())
        .then(data => {
          // Split the response text into lines
          let lines = data.split('\n');
          
          // Find the line containing "SERVER_NAME" - if applicable
          let serverNameLine = lines.find(line => line.includes('SERVER_NAME'));
          
          // Extract the server name value
          let serverName = serverNameLine ? serverNameLine.split(':')[1].trim() : 'SERVER_NAME not found';
  
          document.getElementById('content').innerText = `SERVER NAME: ${serverName}`;
        })
        .catch(error => {
          document.getElementById('content').innerText = 'Error fetching URL content';
        });
    });
  });
/* If you want to fetch and show all page content in a popup window
  document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let url = new URL(tabs[0].url);
      url.pathname = "/new-postfix"; // Ensure this matches the postfix change
  
      fetch(url.href)
        .then(response => response.text())
        .then(data => {
          // Create a temporary DOM to parse the fetched HTML
          let parser = new DOMParser();
          let doc = parser.parseFromString(data, 'text/html');
          let bodyText = doc.body.innerText;
  
          document.getElementById('content').innerText = bodyText;
        })
        .catch(error => {
          document.getElementById('content').innerText = 'Error fetching URL content';
        });
    });
  }); */
  
  