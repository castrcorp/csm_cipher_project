$(document).ready(function(){

    var screenEl = $("#screen");
    
    console.log("But why are you here?");

    confirm("'Well, this is unexpected'");

    console.log("you have to leave.");

    var userEntry = prompt("If you want to go any further\n...tell me what you want")
        if (userEntry !== "duck") {
            while (userEntry !== "duck") {
                userEntry = prompt('No, seriously, we need to know. \n \n It better not be about duck.');}
        }  
        console.log("NOW");
        
    screenEl.text("You shouldn't have done that.");
        


}) //document ready end. End of script