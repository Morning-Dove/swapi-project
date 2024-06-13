# SWAPI Project

This is a frontend repo where I'll be working with the [SWAPI API](https://swapi.dev/).

Link to view on GitHub Pages: https://morning-dove.github.io/swapi-project/

## Project Overview
The SWAPI Project is a web-based application that fetches data from the Star Wars API (SWAPI) and displays information about Star Wars characters. The project includes custom cursor functionality that resembles a lightsaber, which reacts to mouse and keyboard events for an enhanced user experience.

## Features
* Fetch Star Wars Data: Click the "Fetch Star Wars" button to retrieve and display information about Star Wars characters.
* Custom Cursor: A lightsaber-themed cursor that extends, retracts, and rotates based on mouse and keyboard interactions.
    * click mouse to activate the light saber.
    * Press r to start/stop rotating the light saber.
* Background Music: Plays the Star Wars theme song when fetching data.
* Auto-Scrolling: Smooth auto-scrolling of fetched character data.

### File Descriptions

#### index.html
This file contains the HTML structure of the project, including references to the CSS and JavaScript files. Key elements include:

A button to fetch Star Wars data.
A container to display fetched character information.
Audio elements for background music and sound effects.

#### script.js
This JavaScript file handles fetching data from the SWAPI and displaying it. Key functionalities include:

Fetching data from SWAPI using the Fetch API.
Displaying character information dynamically in the HTML.
Playing background music upon data fetch.
Implementing auto-scrolling for the character data display.

#### cursor.js
This JavaScript file manages the custom cursor functionality. Key functionalities include:

Creating and positioning a custom cursor that mimics a lightsaber.
Extending and retracting the lightsaber blade on mouse events.
Rotating the cursor on keyboard events.
Customizing the appearance and behavior of the lightsaber blade.

## How to Run the Project
Clone the Repository: Clone the project repository to your local machine.

git clone https://github.com/morning-dove/swapi-project.git

Open index.html: Open the index.html file in your web browser to view and interact with the project.

### Dependencies
The project requires an internet connection to fetch data from the SWAPI.

## Future Enhancements
* Character Details: Add more detailed information about each character.
* Search Functionality: Implement a search feature to look up specific characters.
* Responsive Design: Improve the layout for better mobile device support.
* Additional API Integration: Fetch and display data from other Star Wars-related APIs.



