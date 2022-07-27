$(document).ready(function () {


var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var currentTime = moment();
$("#currentLocalTime").text(today.format('LT'))



timer();

setInterval(timer, 30000 )



//need a time function to change the time blocks based on the current time
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

// need a function to save items in to local storage that are entered into a block
$(".saveBtn").on("click", function () {
  let value = $(this).siblings(".description").val()
  let time = $(this).parent().attr("id")
  localStorage.setItem(time, value)
})

$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))

})