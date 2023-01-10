//Display current time in header using dayjs()
var today = dayjs();
$('#currentDay').text(today.format("dddd, MMMM D YYYY, h:mm:ss a"));

//Update page every second so time is current
var timeUpdated = setInterval(function () {
  var current = moment().format("dddd, MMMM D YYYY, h:mm:ss a")
  $('#currentDay').text(current)
},1000);

//Reload the page if the hour changes
var refresh = setInterval(function() {
  var hourRefresh = moment().hour()
  if(hourRefresh - hourRefresh !== 0) {
    window.location.reload();
  }
},1000)



//Event Listener on the save button to add user text into local storage
$(".saveBtn").on("click", function(){
  var time = $(this).parent().attr("id");
  var info = $(this).siblings(".description").val();

  console.log(time);
  console.log(info);

  localStorage.setItem(time,info);
})

// Get information from local storage for the corresponding hours
$("#5 .description").val(localStorage.getItem("5"));
$("#6 .description").val(localStorage.getItem("6"));
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));
$("#20 .description").val(localStorage.getItem("20"));
$("#21 .description").val(localStorage.getItem("21"));
$("#22 .description").val(localStorage.getItem("22"));

//Check the state of the current time and compare to each value of id which holds value of the hour
//I had to remove the hour- from each id so I can compare a string to a number for the if statements
//Assign the class to each id depending on if its past, present, or future
function whatHour(){
  var currentHour = moment().hour()
  
  $(".time-block").each(function() {
    var hourOfTime = $(this).attr("id");
    //Log the two variables of this function to make sure they are pulling correct values
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

//Clear the values of the planner once the hour hits 1 which would be 1:00 am the next day
function clearValue() {
  var resetHour = moment().hour()
  // console.log(resetHour)
  if(resetHour == 1) {
    localStorage.clear();
  }
}


whatHour();
clearValue();