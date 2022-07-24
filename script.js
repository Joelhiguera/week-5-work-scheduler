var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var currentTime = moment();
$("#currentLocalTime").text(today.format('LTS'))