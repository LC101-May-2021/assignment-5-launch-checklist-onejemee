// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");
//const {formSubmission} = require("./scriptHelper")

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let listedPlanet = pickPlanet(listedPlanets)
        console.log(listedPlanet)
        addDestinationInfo(document, listedPlanet.name, listedPlanet.diameter, listedPlanet.star, listedPlanet.distance, listedPlanet.moons, listedPlanet.image)
    
   })
let listStatus = document.getElementById("faultyItems")
listStatus.style.visibility = "hidden"
let form = this.document.querySelector("form")  
form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilot = document.querySelector("input[name=pilotName]")
        let pilotName = pilot.value
        let copilot = document.querySelector("input[name=copilotName]")
        let copilotName = copilot.value
        let fuel = document.querySelector("input[name=fuelLevel]")
        let fuelLevel = fuel.value
        let cargo = document.querySelector("input[name=cargoMass]")
        let cargoMass = cargo.value
        formSubmission(document, listStatus, pilotName, copilotName, fuelLevel, cargoMass);
    });
});
