/* const jsdom = require('jsdom');
const fs = require('fs');
const  { JSDOM } = jsdom;

const indexHtml = fs.readFileSync('./public/index.html', 'utf8' , (err, contents) => {
    return contents;
});

const { document } = (new JSDOM(indexHtml, { runScripts: "dangerously" })).window; */

export function parkOnSite(){
    console.log("script loaded..");
    const divElems = document.getElementsByClassName("parkingSlot");
    const slotIdsDiv = document.getElementById("slotIds");
    for(var i = 0; i < divElems.length; i++){
        console.log(divElems[i].id);
        slotIdsDiv.innerHTML += divElems[i].id;
    }
    
}