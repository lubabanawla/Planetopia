window.onload = init;

function init() {
  console.log("window has loaded");
  state.i = 1;
  state.j = 1;
  state.k = 1;
}

var state = {
  j: 0,
  k: 0,
};

function nextlandscape() {
  console.log("inside function nextshoe");
  console.log(state.j);
  var shoe = document.getElementById("shoes");
  if (state.j === 0) {
    shoe.setAttribute("class", "cloudy");
    state.j++;
    console.log(state.j);
  } else if (state.j === 1) {
    shoe.setAttribute("class", "jupiter");
    state.j++;
    console.log(state.j);
  } else if (state.j === 2) {
    shoe.setAttribute("class", "scales");
    state.j = 0;
  }
}

function nextring() {
  console.log("inside function nexthair");
  console.log(state.k);
  var hairf = document.getElementById("rings");

  if (state.k === 0) {
    hairf.setAttribute("class", "onering");
    state.k++;
    console.log(state.k);
  } else if (state.k === 1) {
    hairf.setAttribute("class", "tworings");
    state.k++;
    console.log(state.k);
  } else if (state.k === 2) {
    hairf.setAttribute("class", "snowring");
    state.k = 0;
  } else if (state.k === 3) {
    hairf.setAttribute("class", "snowring2");
    state.k = 0;
  }
}

document.getElementById("colorPicker").addEventListener("input", function () {
  const circle = document.getElementById("circle");
  circle.style.backgroundColor = this.value;
});

document
  .getElementById("planetForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    const name = document.getElementById("nameInput").value;
    const heading = document.getElementById("planetHeading");

    // Create a new <h1> element
    const newHeading = document.createElement("h1");
    newHeading.id = "planetHeading"; // Set the id attribute
    newHeading.textContent = `Planet ${name}`; // Set the text content

    // Replace the old heading with the new one
    heading.replaceWith(newHeading);
  });

const defaultPlanetData = {
  planetName: "Teras",
  color: "#000000",
  appearance: "smooth",
  ringDescription: "transparent",
};

function startVisit() {
  const planetName =
    document.getElementById("nameInput").value || defaultPlanetData.planetName;
  const color =
    document.getElementById("colorPicker").value || defaultPlanetData.color;
  const appearance =
    state.j === 0 ? "cloudy" : state.j === 1 ? "jupiter-esque" : "scaly";
  const ringDescription =
    state.k === 0
      ? "single"
      : state.k === 1
      ? "group of two"
      : state.k === 2
      ? "snowy"
      : "lightly snowy";

  const url = `/visit?planetName=${encodeURIComponent(
    planetName
  )}&color=${encodeURIComponent(color)}&appearance=${encodeURIComponent(
    appearance
  )}&ringDescription=${encodeURIComponent(ringDescription)}`;
  window.location.href = url;
}
