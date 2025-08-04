# Dash Fixer for ChatGPT

[![version](https://img.shields.io/badge/version-1.0.1-blue.svg)](https://github.com/omkarrajmane/dash-fixer-for-ChatGPT)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

A browser extension that enhances your ChatGPT experience by automatically replacing em dashes (—) with standard hyphens (-) and adding a convenient button to copy the cleaned text.

## Overview

This extension is designed for users who frequently copy text from ChatGPT and prefer standard hyphens over em dashes. It operates seamlessly in the background, making two key improvements to the ChatGPT interface:

1.  **Live Em Dash Replacement**: Automatically finds and replaces all em dashes (`—`) with hyphens (`-`) in the assistant's responses as they are generated.
2.  **Enhanced Copying**: Adds a new "Copy without em dashes" button to each message, allowing you to copy a cleaned version of the text directly to your clipboard.

## Features

- **Automatic Dash Replacement**: Modifies assistant messages in real-time, replacing `—` with `-`.
- **One-Click Clean Copy**: Adds a dedicated copy button next to the original one for copying text with hyphens.
- **Custom Tooltips**: Provides helpful tooltips for the new copy button, indicating its function and confirming when the text has been copied.
- **Seamless Integration**: Designed to work flawlessly with the ChatGPT UI without disrupting the user experience.
- **Lightweight and Efficient**: Runs efficiently with a `MutationObserver` to only process new content as it appears.

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

Once installed, the extension works automatically on the ChatGPT website.

1.  **Automatic Replacement**: As the assistant generates a response, you will notice that any em dashes (`—`) are immediately converted to hyphens (`-`).
2.  **Using the Copy Button**:
    - Hover over an assistant's message to see the action buttons appear.
    - Next to the standard copy button, you will find a new icon.
    - Hover over the new icon to see the "Copy without emdash —" tooltip.
    - Click the button to copy the message content with all em dashes already replaced. The tooltip will confirm "Copied!".

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
