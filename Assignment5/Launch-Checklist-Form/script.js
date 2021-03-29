

fetch("https://handlers.education.launchcode.org/static/planets.json").then( response => {
   response.json().then( json => {
      const destination = document.getElementById("missionTarget");
      let index = Math.floor(Math.random() * 6);
      destination.innerHTML = `
      <h2>Mission Destination</h2>
<ul>
   <li>Name: ${json[index].name}</li>
   <li>Diameter: ${json[index].diameter}</li>
   <li>Star: ${json[index].star}</li>
   <li>Distance from Earth: ${json[index].distance}</li>
   <li>Number of Moons: ${json[index].moons}</li>
</ul>
<img src="${json[index].image}">
      `
   });
});

const form = document.getElementById("launchForm");
form.addEventListener("submit", (event) => {
   
   event.preventDefault();
   
   const pilotName = document.querySelector("input[name=pilotName]");
   const coPilotName = document.querySelector("input[name=copilotName]");
   const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
   const cargoMass = document.querySelector("input[name=cargoMass]").value;
   
   const pilotStatus = document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready.`;
   const copilotStatus = document.getElementById("copilotStatus").innerHTML = `Co-pilot ${coPilotName.value} is ready.`;
   
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   const launchStatus = document.getElementById("launchStatus");
   const faultyItems = document.getElementById("faultyItems");



   if (fuelLevel < 10000) {
      faultyItems.style.visibility = "visible";
      fuelStatus.innerHTML = `There is not enough fuel for the journey.`;
      launchStatus.innerHTML = `Shuttle not ready for launch.`;
      launchStatus.style.color = "red";
   } 
   
   if (cargoMass > 10000) {
      faultyItems.style.visibility = "visible";
      cargoStatus.innerHTML = `There is too much mass of cargo for the shuttle to launch.`;
      launchStatus.innerHTML = `Shuttle not ready for launch.`;
      launchStatus.style.color = "red";
   }

   if (fuelLevel >= 10000 && cargoMass <= 10000) {
      launchStatus.style.color = "green";
      launchStatus.innerHTML = `Shuttle is ready for launch.`
   }
   
});




