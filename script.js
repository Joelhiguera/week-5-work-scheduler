//function so that the DOM loads before this script runs that way there are no bugs
$(document).ready(function () {


// Displaying todays date in specific format
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// Displaying current time in specific format
var currentTime = moment();
$("#currentLocalTime").text(today.format('LT'))


//call timer function
timer();

// Set interval for timer to call every 30 seconds
setInterval(timer, 30000 )



// Function to loop through each time block and change design attribute based on current time
function timer() {
  let currentHour = moment().hour()
  $(".time-block").each(function () {
    let blockHour = parseInt($(this).attr("id"))
    if(blockHour < currentHour) {
      $(this).addClass("past")
    } else if(blockHour === currentHour) {
      $(this).removeClass("past")
      $(this).addClass("present")
    } else {
      $(this).removeClass("past")
      $(this).removeClass("present")
      $(this).addClass("future")
    }
  })
}

// Function for save button to save textarea content into local storage
$(".saveBtn").on("click", function () {
  let value = $(this).siblings(".description").val()
  let time = $(this).parent().attr("id")
  localStorage.setItem(time, value)
})



$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))
$("#18 .description").val(localStorage.getItem("18"))
$("#19 .description").val(localStorage.getItem("19"))
$("#20 .description").val(localStorage.getItem("20"))
$("#21 .description").val(localStorage.getItem("21"))

})