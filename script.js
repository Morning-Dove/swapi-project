"use strict";

document.getElementById("fetchBtn").addEventListener("click", () => {
    const swapiData = getSwapiData();
    console.log(swapiData);
});

const getSwapiData = async () => {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();
    return data;
};