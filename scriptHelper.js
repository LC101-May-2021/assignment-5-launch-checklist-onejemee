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
            listStatus.style.visibility = "visible"
            pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`
            copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`
               if (fuelLevel.value < 10000 && cargoLevel.value <= 10000) {
                    fuelStatus.innerHTML = `Fuel level too low for launch`
                    cargoStatus.innerHTML = `Cargo mass low enough for launch`
                    launchStatus.style.color = "rgb(199, 37, 78)"
                    launchStatus.innerHTML = `Shuttle Not Ready for Launch`
                } else if (fuelLevel.value >= 10000 && cargoLevel.value > 10000) { 
                    cargoStatus.innerHTML = `Cargo mass too heavy for launch`
                    fuelStatus.innerHTML = `Fuel level high enough for launch`
                    launchStatus.style.color = "rgb(199, 37, 78)"
                    launchStatus.innerHTML = `Shuttle Not Ready for Launch` 
                } else if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
                    cargoStatus.innerHTML = `Cargo mass too heavy for launch`
                    fuelStatus.innerHTML = `Fuel level too low for launch`
                    launchStatus.style.color = "rgb(199, 37, 78)"
                    launchStatus.innerHTML = `Shuttle Not Ready for Launch`
                }
                 else {
                    launchStatus.innerHTML = "Shuttle is Ready for Launch"
                    launchStatus.style.color = "rgb(65, 159, 106)"
                    fuelStatus.innerHTML = `Fuel level high enough for launch`
                    cargoStatus.innerHTML = `Cargo mass low enough for launch`
                }
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

