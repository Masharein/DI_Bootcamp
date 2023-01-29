const solarSystem = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "yellow", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturn", color: "khaki", moons: 82 },
    { name: "Uranus", color: "cyan", moons: 27 },
    { name: "Neptune", color: "blue", moons: 14 }
  ];
  
  const section = document.querySelector(".listPlanets");
  
  solarSystem.forEach(planet => {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.innerHTML = planet.name;
    section.appendChild(planetDiv);
  
    for (let i = 0; i < planet.moons; i++) {
      const moonDiv = document.createElement("div");
      moonDiv.classList.add("moon");
      planetDiv.appendChild(moonDiv);
    }
  });
  