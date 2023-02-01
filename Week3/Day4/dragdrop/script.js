const boxToDrop = document.getElementById("boxToDrop");
boxToDrop.setAttribute("draggable", true);
const boxToDrop2 = document.getElementById("boxToDrop2");
boxToDrop2.setAttribute("draggable", true);
const boxToDrop3 = document.getElementById("boxToDrop3");
boxToDrop3.setAttribute("draggable", true);

//1. Use dragStart event
boxToDrop.addEventListener("dragstart", startDragging);
boxToDrop2.addEventListener("dragstart", startDragging);
boxToDrop3.addEventListener("dragstart", startDragging);

function startDragging(evt){
    evt.target.classList.add("startDrag");
    evt.dataTransfer.setData("text/plain", evt.target.id);
    //use the dataTransfer object, to set the data that we want to drop in the future
    // console.log(evt.target.id);
    // console.log(evt.target); //box I drag
}

//2. Retrieve all the dropzones
function retrieveZonesAndAddEvents () {
    const allZones = document.querySelectorAll(".dropzone");
    // Give to each dropzone an event listener; loop
    for (let zone of allZones) {
        zone.addEventListener("dragover", overTarget);
        zone.addEventListener("drop", dropOnTarget);
    }
}

retrieveZonesAndAddEvents()


function overTarget (evt) {
    evt.preventDefault(); //necessary
    evt.target.classList.add("overDrop");
}

function dropOnTarget (evt) {
    evt.preventDefault();  //necessary
    evt.target.classList.add("droppedTarget");
    const data = evt.dataTransfer.getData("text/plain"); //id of the element
    // console.log(data);
    const elem = document.getElementById(data);
    evt.target.appendChild(elem);
}