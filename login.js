$(document).ready(function(){
console.log("connected");

console.log("really?");

timeCheck()

function timeCheck() {
    var dayHour = moment().format("kkmm")
    console.log(dayHour)

    if(dayHour > 900 && dayHour < 917 === false) {
        while ((dayHour > 900 && dayHour < 917) === false){
            const late = moment().format("h:mm")
            alert(`Attention!! It is ${late}. You\'re absence has been logged.\nHuman Resources has been notified.`);
    }  
    }
   
}

timeCheck()

$("#submit").on("click",function(event) {
   
    if (($("#user_name").val() !== "saAHPlwF") || ($("#password").val() !== "EtAHmoy7Tu@m!")) {
        event.preventDefault();
        $("#user_name").val("")
        $("#password").val("")
    } else {
        return;  
    }
    
    })
    
})//end of doc ready

