
# URL Postfix Replacer Extension

## Overview

The URL Postfix Replacer is a Chrome browser extension designed to modify the postfix of the current tab's URL and display the result. This extension fetches the content of the modified URL and can either extract the "SERVER_NAME" key and its value or display the entire page content.

## Features

- Replaces the postfix of the current tab's URL.
- Fetches and displays the content of the modified URL.
- Extracts and shows the "SERVER_NAME" key and its value from the URL content.
- Option to display the entire page content in the popup.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/url-postfix-replacer.git
   ```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the cloned repository directory.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. The extension will modify the postfix of the current tab's URL.
3. The popup will display the "SERVER_NAME" key and its value from the URL content by default.
4. To display the entire page content, modify the `popup.js` script as described below.

## Development

### File Structure

```
url-postfix-replacer/
├── background.js
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── manifest.json
├── popup.html
└── popup.js
```

### Scripts

- **background.js**: Handles the URL modification.
- **popup.js**: Fetches and displays the "SERVER_NAME" key and its value or the entire page content.

### Manifest

Ensure the `manifest.json` file includes the necessary permissions and settings for Chrome.

### Displaying Entire Page Content

To display the entire page content in the popup, modify the `popup.js` script-
comment-block the current code and uncomment the second block of code. 

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, please contact me through Github - Uriel Shany