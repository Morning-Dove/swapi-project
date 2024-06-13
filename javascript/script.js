"use strict";

document.getElementById("fetchBtn").addEventListener("click", async () => {
    const audio = document.getElementById("themesong");
    audio.play();

    const swapiData = await getSwapiData();
    console.log(swapiData);
    displayCharacters(swapiData);
});

const getSwapiData = async () => {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    return data.results;
};

const displayCharacters = (characters) => {
    const outputBox = document.getElementById('output');
    outputBox.innerHTML = '';

    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character');
        characterElement.innerHTML = `
            <h2>${character.name}</h2>
            <p>Height: ${character.height}</p>
            <p>Mass: ${character.mass}</p>
            <p>Hair Color: ${character.hair_color}</p>
            <p>Skin Color: ${character.skin_color}</p>
            <p>Eye Color: ${character.eye_color}</p>
            <p>Birth Year: ${character.birth_year}</p>
            <p>Gender: ${character.gender}</p>
        `;
        outputBox.appendChild(characterElement);
    });

  const scrollSpeed = 25; // Adjust scrolling speed as needed
  const scrollIncrement = 1; // Adjust scroll increment as needed
  let scrollPosition = 0;

  // Function to handle scrolling
  function scrollContent() {
    // Increment the scroll position
    scrollPosition += scrollIncrement;
    outputBox.scrollTop = scrollPosition;

    // Check if the content has scrolled to the top
    if (scrollPosition >= outputBox.scrollHeight - outputBox.clientHeight) {
      // Move content back to the beginning
      scrollPosition = 0;
      outputBox.scrollTop = 0;
    }

    setTimeout(scrollContent, scrollSpeed);
  }

  scrollContent();
};



