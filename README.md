![Download Helper icon](https://raw.githubusercontent.com/YiNanKai/chrome-extension-download-helper/master/icon.png)
# Download Helper
## About
This is a chrome extension to help you download the document in the current page, including PDF, DOCX, PPT for now
## How it works
Access the current page DOM, and find all the `a` elements which its `href` attribute contains specific file type. Then add these link to the dialog.

Dialog use Angular framework.
## Install
- Download the zip and uncompress it
- Open extension page in Chrome
- Drag the directory to extension page

## Usage
- Click the icon the Chrome tool bar and there will be a dialog to show all the document in this page
- You can select special type of document to display
- Click the link to open it in a new tab and download it
