$(document).ready(function(){

    let lucky = ""
    const containerEl = $("#timeline");

    var screenEl = $("#screen");
    
    console.log("But why are you here?");

    //confirm("'Well, this is unexpected'");

    console.log("you have to leave.");

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
            var dayHour = moment().format("k")
            console.log(dayHour)
            $(".plan").each(function () {
                var blockTime = parseInt($(this).attr("data-time"));
                
    
                if (dayHour === blockTime) {
                    $(this).removeClass("past");
                    $(this).removeClass("future");
                    $(this).addClass("present");
                } else if (dayHour < blockTime) {
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).addClass("future");
                } 
                 else {
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                    $(this).addClass("past");
                }
                
                // //if (dayHour < 22) {
                //    $("#17").text("This is a MONDO hint.")
                //  }
    
                
            })
        }
        timeCheck()
    // This is the "save" to local data function. Which works! I just...can't seem to get the data correctly after it's saved.
        $(".saveBtn").on("click",function (event) {
    
            
            var activity = $(this).siblings(".textarea").val();
            console.log(activity);
            if ($("#10am").val() === "you got it buddy" && $(".present")) {
                 alert("oh I see... well then");
                 lucky = prompt("So what's the password");
                 console.log(lucky);
                 if (lucky !== "ducksMan") {
                     while (lucky !== "ducksMan") {
                        lucky = prompt("nice try, but seriously \nI need the right answer"); 
                     }
                 }else {
                     alert("Yea, you got that right...Ducks, man.");
                     const surprise = $("<div>").addClass("row");
                     const newHour = $("<div>").addClass("col-2 hour d-flex justify-content-end");
                     const newHourTime = newHour.text("11PM");
                     const newText = $("<textarea>").addClass("col-8 textarea description plan text-warning bg-dark");
                     const newTextEntry = newText.val("This could really use some contexxxt");
                    const newBtn = $("<button>").addClass("col-1 saveBtn").attr("src", "./images/proper/save-24.png");
                    const newIcon= $("<img>").attr("src", "./images/proper/save-24.png");
                    newBtn.append(newIcon);
                    containerEl.append(surprise.append(newHour, newHourTime, newText, newTextEntry, newBtn));
                     
                    const newImg= $("<img>").attr("src", "https://pbs.twimg.com/profile_banners/342926562/1609481012/1500x500");

                    containerEl.append(surprise.append(newImg));
                 }
            } else {
                $(this).siblings(".textarea").empty();
        }
            var theHour = $(this).attr("data-todo");
            
    
            localStorage.setItem(theHour, activity);
    
        })
    
    
    }) //don't delete this. It's very important.
    
}) //document ready end. End of script