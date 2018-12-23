$(function () {
   //Click the go button
   $("#go").click(function () {
      //build a function that checks to see if a car has won the race
      function checkIfComplete() {
         if (isComplete == false) {
            isComplete = true;
         } else {
            place = "second";
         }
      }

      //Get the width of the cars
      var carWidth = $("#car1").width();

      // Get the width of the racetrack
      var raceTrackWidth = $(window).width() - carWidth;

      // Get the random # between 1 and 5000ms
      var raceTime1 = Math.floor((Math.random() * 5000) + 1);
      var raceTime2 = Math.floor((Math.random() * 5000) + 1);

      // Set a flag variable FALSE by default
      var isComplete = false;

      // Set a flag variable FIRST by default
      var place = 'first';

      // Animate car1
      $("#car1").animate({
         // Move the car width of the racetrack 
         left: raceTrackWidth
      }, raceTime1, function () {
         // Animation is complete

         //Run a function
         checkIfComplete();

         // Give some text feedback
         $("#raceInfo1 span").text("Finished in " + place + " place and clocked in at " + raceTime1 + "miliseconds!")
      });

      // Animate car2
      $("#car2").animate({
         // Move the car width of the racetrack 
         left: raceTrackWidth
      }, raceTime2, function () {
         // Animation is complete

         //Run a function
         checkIfComplete();

         // Give some text feedback
         $("#raceInfo2 span").text("Finished in " + place + " place and clocked in at " + raceTime2 + "miliseconds!")
      });
   });

   $("#reset").click(function () {
      $(".car").css("left", "0");
      $(".raceInfo span").text("");
   });
});