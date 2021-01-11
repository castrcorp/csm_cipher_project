$(document).ready(function(){

    let lucky = ""
    const containerEl = $("#timeline");
    var dayHour = ""
    var screenEl = $("#screen");
       
    alert("oh I see. Well then...");
    lucky = prompt("Good Morning!\nCould you verify your User name for us?");
        console.log(lucky);
        if (lucky !== "saAHPlwF") {
        while (lucky !== "saAHPlwF") {
        lucky = prompt("Nice try, but seriously \nI need the right answer"); 
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
                } else {
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                    $(this).addClass("past");
                }
                
                // //if (dayHour < 22) {
                //    $("#17").text("This is a MONDO hint.")
                //  }
    
                
            })
            $(".saveBtn").on("click",function (event) {
              
                console.log(dayHour)
            var activity = $(this).siblings(".textarea").val();
            console.log(activity);
            if (($("#9am").val().toLowerCase().trim() === "yiannis johnson") && (dayHour === 12) && (day === "Su")) {
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
                $("#9am").val("55251"); 
            } else {
                console.log("fail");
        }//end Monday
        if (($("#2pm").val().toLowerCase().trim() === "customer service department") && (dayHour === 12) && (day === "Su")) {
            $("#2pm").val("22513"); 
        } else {
            console.log("fail");
        } //end Tuesday           
        if (($("#12pm").val().toLowerCase().trim() === "social media marketing") && (dayHour === 12) && (day === "Su")) {
            $("#12pm").val("45342"); 
        } else {
            console.log("fail");
        }//end wednesday

        if (($("#11am").val().toLowerCase().trim() === "#637b-89") && (dayHour === 12) && (day === "Su")) {
            $("#11am").val("14343"); 
    } else {
        console.log("fail");
        } //end thursday
        if (($("#5pm").val().toLowerCase().trim() === "keep your eyes on the horiseon") && (dayHour === 12) && (day === "Su")) { 
            $("#5pm").val("21344"); 
    } else {
        console.log("fail");} //end Friday
    
        })
        
        }
        timeCheck()
 
    }) //don't delete this. It's very important.
    
}) //document ready end. End of script