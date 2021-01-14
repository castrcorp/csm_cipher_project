$(document).ready(function(){

    let lucky = ""
    const containerEl = $("#timeline");
    var dayHour = ""
    var screenEl = $("#screen");
       
    alert("oh hello. Well...");
    lucky = prompt("Good Morning!\nCould you verify the previous password for us?");
        console.log(lucky);
        if (lucky !== "EtAHmoy7Tu@m!") {
        while (lucky !== "EtAHmoy7Tu@m!") {
        lucky = prompt("Nice try, but seriously \nwe need the right answer"); 
                     }
                    }

    $(document).ready(function () {
        // an attempt at retreving localstorage, but it was proving to be unsuccessful. I think I'll have to go for the JSONstringify/parse method
        $("#9am .plan").val(localStorage.getItem("9oclock"));
        $("#10am .plan").val(localStorage.getItem("10oclock"));
        $("#11am .plan").val(localStorage.getItem("11oclock"));
        $("#12am .plan").val(localStorage.getItem("12oclock"));
        $("#1pm .plan").val(localStorage.getItem("1oclock"));
        $("#2pm .plan").val(localStorage.getItem("2oclock"));
        $("#3pm .plan").val(localStorage.getItem("3oclock"));
        $("#4pm .plan").val(localStorage.getItem("4oclock"));
        $("#5pm .plan").val(localStorage.getItem("5oclock"));
    
        // Time that shows at the top of the page. It will be different that the operating time, which is very european at the moment.
        var time = moment().format("dddd, hh:mm");
        // console.log(`time: ${time}`);
        $("#currentDay").append(time);
    
    // timeCheck() is a function that weighs the current pinged time (through moment's API) and compares that to the time slots on the scheduler -- it assigns their class (their color) based on whether or not the current time is "equal to", "less than", or "greater than" the pinged time.
        function timeCheck() {
            var dayHour = parseInt(moment().format("k"))
            var day = moment().format("dd");
            console.log(dayHour)
            console.log(day)
            $(".plan").each(function () {
                var blockTime = parseInt($(this).attr("data-time"));
                console.log(blockTime);
                
               

                if (dayHour === blockTime) {
                    $(this).removeClass("past");
                    $(this).removeClass("future");
                    $(this).addClass("present");
                } else if (dayHour < blockTime) {
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).addClass("future");
                } else if (dayHour === 9 && day === "Mo"){
                    $("#9am").removeClass("present")
                    $("#9am").removeClass("future")
                    $("#9am").removeClass("past")
                    $("#9am").addClass("mith")
                    $(this).addClass("past");
                    console.log("I guess it worked?")
                } else if (dayHour === 11 && day === "Th"){
                    $("#11am").removeClass("present")
                    $("#11am").removeClass("future")
                    $("#11am").removeClass("past")
                    $("#11am").addClass("mith")
                    $(this).addClass("past");
                    console.log("I guess it worked?")
                }else if (dayHour === 12 && day === "We"){
                    $("#12pm").removeClass("present")
                    $("#12pm").removeClass("future")
                    $("#12pm").removeClass("past")
                    $("#12pm").addClass("mith")
                    $(this).addClass("past");
                    console.log("I guess it worked?")
                }else if (dayHour === 14 && day === "Tu"){
                    $("#2pm").removeClass("present")
                    $("#2pm").removeClass("future")
                    $("#2pm").removeClass("past")
                    $("#2pm").addClass("mith")
                    $(this).addClass("past");
                    console.log("I guess it worked?")
                }else if (dayHour === 17 && day === "Fr"){
                    $("#5pm").removeClass("present")
                    $("#5pm").removeClass("future")
                    $("#5pm").removeClass("past")
                    $("#5pm").addClass("mith")
                    $(this).addClass("past");
                    console.log("I guess it worked?")
                }else {
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                    $(this).addClass("past");
                // } if 
                // }else {
                //     $("#9am").removeClass("mith")
                //     console.log("nope")
                }
                
                // //if (dayHour < 22) {
                //    $("#17").text("This is a MONDO hint.")
                //  }
    
                
            })
            $(".saveBtn").on("click",function (event) {
              
                console.log(dayHour)
            var activity = $(this).siblings(".textarea").val();
            console.log(activity);
            if (($("#9am").val().toLowerCase().trim() === "yiannis johnson") && (dayHour === 9) && (day === "Mo")) {
                // alert("oh I see. Well then...");
                //  lucky = prompt("What's the password");
                //  console.log(lucky);
                //  if (lucky !== "ducksMan") {
                //      while (lucky !== "ducksMan") {
                //         lucky = prompt("Nice try, but seriously \nI need the right answer"); 
                //      }
                //  }else {
                //      alert("Yea, you got that right...Ducks, man.");
                //      $("#10am").val("")
                //      const surprise = $("<div>").addClass("row");
                //      const newHour = $("<div>").addClass("col-2 hour d-flex justify-content-end");
                //      const newHourTime = newHour.text("11PM");
                //      const newText = $("<textarea>").addClass("col-8 textarea description plan text-warning bg-dark");
                //      const newTextEntry = newText.val("This could really use some contexxxt").attr("id","last");
                //     const newBtn = $("<button>").addClass("col-1 saveBtn").attr("src", "./images/proper/save-24.png");
                //     const newIcon= $("<img>").attr("src", "./images/proper/save-24.png");
                //     newBtn.append(newIcon);
                //     containerEl.append(surprise.append(newHour, newHourTime, newText, newTextEntry, newBtn));
                     
                //     const newImg= $("<img>").attr("src", "https://pbs.twimg.com/profile_banners/342926562/1609481012/1500x500");

                //     containerEl.append(surprise.append(newImg));
                alert("55251"); 
            } else {
                console.log("fail");
        }//end Monday
        if (($("#2pm").val().toLowerCase().trim() === "customer service department") && (dayHour === 14) && (day === "Tu")) {
            alert("22513"); 
        } else {
            console.log("fail");
        } //end Tuesday           
        if (($("#12pm").val().toLowerCase().trim() === "but hey we need your money") && (dayHour === 12) && (day === "We")) {
           alert("45342"); 
        } else {
            console.log("fail");
        }//end wednesday

        if (($("#11am").val().toLowerCase().trim() === "#637b-89") && (dayHour === 11) && (day === "Th")) {
            alert("14343"); 
    } else {
        console.log("fail");
        } //end thursday
        
        if (($("#5pm").val().trim() === "Keep your eyes on the horiSEOn") && (dayHour === 17) && (day === "Fr")) { 
            alert("21344"); 
    } else {
        console.log("fail");} //end Friday
    
        })
        
        }
        timeCheck()
 
    }) //don't delete this. It's very important.
    
}) //document ready end. End of script