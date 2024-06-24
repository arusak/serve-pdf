# PDF Sever Educational App

## Overview
This app serves as an educational tool to understand how different HTTP headers can affect the delivery and display of PDF files in a web browser. Experiment with the provided controls to see the effects in real-time.

This app demonstrates different methods of accessing PDF content in a web browser. It allows users to explore the impact of various HTTP headers (`Content-Type` and `Content-Disposition`) on how a PDF is served and displayed. The app provides examples of displaying PDFs within an iframe and opening them in a new window using JavaScript.

## Usage

### Prerequisites

- Node.js
- A valid SSL certificate (key and cert files)

### Installation

1. Clone the repository and navigate to the project directory.

    ```sh
    git clone <repository-url>
    cd <project-directory>
    ```

2. Install the necessary dependencies.

    ```sh
    npm install
    ```

3. Ensure you have your SSL certificate and key files (`localhost.crt` and `localhost.key`) in the root directory.

4. Start the server using Node.js. By default, the server runs on `https://localhost:8787`.

```sh
node app.js
```

You can also specify a custom hostname using the command line arguments:

```sh
node app.js --hostname <custom-hostname>
```

### Accessing the App

Open your web browser and navigate to `https://{hostname}:8787`. 

### Exploring the Features

#### Iframes Section

The app displays the PDF in multiple iframes, each configured with different header combinations:

- **No Headers**: Displays the PDF without any special headers.
- **Content-Type Header**: Sets the `Content-Type` header to `application/pdf`.
- **Content-Disposition Header**: Sets the `Content-Disposition` header to `inline; filename="document.pdf"`.
- **Both Headers**: Sets both `Content-Type` and `Content-Disposition` headers.

#### Window Open Method

- Use the checkboxes to select which headers to include in the response.
- Check the `target=_blank` checkbox to open the PDF in a new tab/window.
- Click the `Show document` button to see the result.


