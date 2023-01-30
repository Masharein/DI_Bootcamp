const solarSystem = [
    {
        planetName : "Earth",
        moon : 1,
    },
    {
        planetName : "Jupiter",
        color: "blue",
        moon : 3,
    },
    {
        planetName : "Mercury",
        moon : 7,
    }
];

function addPlanets () {
    const sectionPlanets = document.querySelector(".listPlanets");
    for(let planet of solarSystem){
        const planetDiv = document.createElement("div");
        const content = document.createTextNode(planet["planetName"]);
        const classEachPlanet = planet["planetName"].toLowerCase(); //class for each planet
        planetDiv.classList.add("planet", classEachPlanet);
        planetDiv.appendChild(content);

        for (let i = 1; i <= planet["moon"]; i++) {
            const moonDiv = document.createElement("div");
            moonDiv.classList.add("moon");
            planetDiv.appendChild(moonDiv);
            moonDiv.style.left = `${15*i}px`
        }

        sectionPlanets.appendChild(planetDiv);

        //other possibility to set the backgroundcolor of the planets
        // planetDiv.style.backgroundColor = `${planet["color"]}`;
    }
}

addPlanets()