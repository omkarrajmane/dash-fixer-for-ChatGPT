# Dash Fixer for ChatGPT

[![version](https://img.shields.io/badge/version-1.0.1-blue.svg)](https://github.com/omkarrajmane/dash-fixer-for-ChatGPT)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

A browser extension that enhances your ChatGPT experience by automatically replacing em dashes (—) with standard hyphens (-) and adding a convenient button to copy the cleaned text.

## Overview

This extension is designed for users who frequently copy text from ChatGPT but get caught on the internet because users spot the em dashes and smell AI slop from a mile away. It operates seamlessly in the background, so you can stop worrying about getting caught.

This extension does two simple things:

1.  **Live Em Dash Replacement**: Automatically finds and replaces all em dashes (`—`) with hyphens (`-`) in the assistant's responses messages as they are generated.
2.  **Enhanced Copying**: Adds a new "Copy without em dashes" button to each message, allowing you to copy a cleaned version of the text directly to your clipboard.

This extension is designed for users who frequently copy text from ChatGPT but get caught on the internet because users spot the em dashes and smell AI slop from a mile away. It operates seamlessly in the background, so you can stop worrying about getting caught.

This extension does two simple things:

1.  **Live Em Dash Replacement**: Automatically finds and replaces all em dashes (`—`) with hyphens (`-`) in the assistant's responses messages as they are generated.
2.  **Enhanced Copying**: Adds a new "Copy without em dashes" button to each message, allowing you to copy a cleaned version of the text directly to your clipboard.

Thats it! And all code is opensource for you to check - so no worring about your private data.

## Installation

You can install the Dash Fixer for ChatGPT in two ways:

### 1. From the Chrome Web Store (Recommended)

_Coming Soon!_ - A link will be provided here once the extension is published.

### 2. From Source

If you want to install the extension manually or contribute to its development, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/omkarrajmane/dash-fixer-for-ChatGPT.git
    ```
2.  **Open Chrome Extensions**: Navigate to `chrome://extensions` in your Chrome browser.
3.  **Enable Developer Mode**: Toggle the "Developer mode" switch in the top-right corner.
4.  **Load Unpacked**: Click the "Load unpacked" button and select the cloned repository's directory.

The extension should now be active in your browser.

## How to Use

Once installed, the extension works automatically on the ChatGPT website no need to enable/disable anything.

1.  **Automatic Replacement**: As the assistant generates a response, you will notice that any em dashes (`—`) are immediately converted to hyphens (`-`).
2.  **Using the Copy Button**:
    - Hover over an assistant's message to see the action buttons appear.
    - Next to the standard copy button, you will find a new icon.
    - Hover over the new icon to see the "Copy without emdash —" tooltip.
    - Click the button to copy the message content with all em dashes already replaced. The tooltip will confirm "Copied!".
3.  **Using the normal Copy Button**:
    - If you use the normal copy button, it copies the original text 'with' emdashes if any.

## Icons attribution

<a href="https://www.flaticon.com/free-icons/dash" title="dash icons">Dash icons created by O.moonstd - Flaticon</a>

## Contributing

Contributions are welcome! If you have ideas for improvements or find a bug, please feel free to open an issue or submit a pull request.

To get started:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
