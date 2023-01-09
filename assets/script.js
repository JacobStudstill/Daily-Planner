//Display current time in header using dayjs()
var today = dayjs();
$('#currentDay').text(today.format("dddd, MMMM D YYYY, h:mm:ss a"));

//Update page every second so time is current
var timeUpdated = setInterval(function () {
  var current = moment().format("dddd, MMMM D YYYY, h:mm:ss a")
  $('#currentDay').text(current)
},1000);

//Event Listener on the save button to add user text into local storage
$(".saveBtn").on("click", function(){
  var time = $(this).parent().attr("id");
  var info = $(this).siblings(".description").val();

  console.log(time);
  console.log(info);

  localStorage.setItem(time,info);
})

// Get information from local storage for the corresponding hours
$("#hour-5 .description").val(localStorage.getItem("hour-5"));
$("#hour-6 .description").val(localStorage.getItem("hour-6"));
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));
$("#hour-19 .description").val(localStorage.getItem("hour-19"));
$("#hour-20 .description").val(localStorage.getItem("hour-20"));
$("#hour-21 .description").val(localStorage.getItem("hour-21"));
$("#hour-22 .description").val(localStorage.getItem("hour-22"));


function whatHour(){
  var currentHour = moment().hour()
  
  $(".time-block").each(function() {
    var hourOfTime = $(this).attr("id");

    console.log(hourOfTime);
    console.log(currentHour);

    if (hourOfTime < currentHour){
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    if (hourOfTime == currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    if (hourOfTime > currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
};

whatHour();