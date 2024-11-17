# Planetopia

During Hack Club Ascend, we were tasked with designing a planet and asked, "What would be a planet you would want to visit?" Through brainstorming, we realized that there's no single right answer to this question. Everyone has their own vision of utopia, and our project reflects that diversity. Despite facing challenges such as coding errors and occasional confusion about our direction, we achieved what we call a "mission success." Start your own journey by clicking "blast off," create your own planet, and explore its background with a personal tour guide!

## Setup

## Prerequisites

- A web browser
- An internet connection
- A Mac with at least 8GB of RAM and macOS 10.15 or later
- An installation of `homebrew`
    > [!IMPORTANT]
    > If you don't have Homebrew installed, you can install it by running the following command in your terminal:
    >
    > ```bash
    > /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    > ```

- A functional VSCode installation

## Installation

1. Install Ollama by running the following command in your terminal:

    ```bash
    brew install ollama
    ```

2. Set Ollama's environment variable, then restart the app.

    ```bash
    launchctl setenv OLLAMA_HOST "0.0.0.0"
    brew services restart ollama
    ```

3. Install the latest version of Meta's `llama3.2` model, then start the server.

    ```bash
    ollama pull llama3.2
    ollama serve
    ```

4. Clone this repository and navigate to the project directory.

    ```bash
    git clone https://github.com/lubabanawla/Planetopia.git
    cd Planetopia
    ```

5. Open VSCode and install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
6. Right-click on `index.html` and select "Open with Live Server." On Mac, hold Command while clicking to bring up the context menu.
7. Click "Blast Off" to start your journey!
