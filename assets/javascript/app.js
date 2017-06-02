
//Hiding the start button and showing the quiz section
$(document).ready(function(){
	
	$("#quiz").hide();
	$("#score-page").hide();

	$("#start").click(function(){
	$("#quiz").show(1000);
	$("#start").hide();

})
})

	$("#end").click(function(){
	$("#score-page").show(1000);
	$("#quiz").hide();
	$("#start").hide();
	
})


























//Timer
$(document).ready(function() {
	start();
    var time = 90;
 
 function reset() {
   time = 0;
   $("#display").html("Time Remaining:  " + "0:00");

 }

 function start() {
  intervalId = setInterval(count, 1000);
 }

 function stop() {
   console.log("stopping");
   clearInterval(intervalId);
 }

 function count() {
 	if (time <= 0){
 		stop();
 	}
 	else{
   	time--;
   	console.log(time);
  	var converted = timeConverter(time);
  	$("#display").html(converted);

  }
 }

 // to convert the time from ms to min/sec

 function timeConverter(t) {

   var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

   if (seconds < 10) {
     seconds = "0" + seconds;
   }

   if (minutes === 0) {
     minutes = "00";
   }
   else if (minutes < 10) {
     minutes = "0" + minutes;
   }

   return minutes + ":" + seconds;
 }
})






