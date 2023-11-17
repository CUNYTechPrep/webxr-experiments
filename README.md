# WebXR Experiments

## Introduction

Our goal is to build interactive WebXR environments with navigable rooms and dynamic backgrounds that will be used by CUNY.

## Installation

To run the WebXR on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/CUNYTechPrep/webxr-experiments.git
   ```

2. Navigate to the project directory:
   ```
   cd webxr-experiments
   ```

3. Install dependencies (ensure Node.js is installed):
   ```
   npm install
   ```

4. Start the local server:
   ```
   npm start
   ```

The application should now be running on `localhost:8080`.

## Usage

The main functionalities of the project are defined in `rooms.js` and `config.js`, where `rooms.js` handles the creation of different "rooms" in the WebXR environment, and `config.js` specifies the configuration for these rooms.

### Key Features:

- **Dynamic Room Navigation**: Navigate through different virtual rooms, each with its own set of interactions and backgrounds.
- **Background Management**: Set different backgrounds for each room.
- **Interactions**: Interact with elements within each room to trigger various actions like changing rooms or displaying information.
