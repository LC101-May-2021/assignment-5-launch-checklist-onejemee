// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const div = document.getElementById("missionTarget")
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}  </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`

}

function validateInput(testInput) {
   if (testInput === "") {
       return "Empty"
   } else if (isNaN(testInput)) {
       return "Not a Number" 
       } else {
           return "Is a Number"
       }
   }

function formSubmission(document, listStatus, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    // let listStatus = document.getElementById("faultyItems")
           if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
              alert("All fields are required!");
           } else if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number" || validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number" ) {
                alert("You need to give proper data types!")
           } else {
               if (fuelLevel.value < 10000) {
                    fuelStatus.innerHTML = `Fuel level is too low for takeoff`
                    launchStatus.style.color = "red"
                    launchStatus.innerHTML = `Shuttle not ready for launch`
                } else if (cargoLevel.value >= 10000) { 
                    cargoStatus.innerHTML = `There is too much mass for travel`
                    launchStatus.style.color = "red"
                    launchStatus.innerHTML = `Shuttle not ready for launch`
                } else {
                    launchStatus.innerHTML = "Shuttle is ready"
                    launchStatus.style.color = "green"
                }
                listStatus.style.visibility = "visible"
                pilotStatus.innerHTML = `Pilot ${pilot.value} is ready`
                copilotStatus.innerHTML = `Copilot ${copilot.value} is ready`
                }

    
        console.log(`${pilot.value}  ${fuelLevel.value}  ${copilot.value} ${cargoLevel.value}`)
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned
}

function pickPlanet(planets) {
    let num = Math.floor(Math.random()*planets.length)
    return planets[num]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
