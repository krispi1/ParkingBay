export function parkOnSite(){
    console.log("script loaded..");
    const divElems = document.getElementsByClassName("parkingSlot");
    const slotIdsDiv = document.getElementById("slotIds");
    for(var i = 0; i < divElems.length; i++){
        divElems[i].addEventListener("click", manParkingSlot);
        slotIdsDiv.innerHTML += divElems[i].id + " ";
    }
}

export function manParkingSlot(){
    console.log( this.id + " just got clicked!" );
}