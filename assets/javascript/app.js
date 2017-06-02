var incorrect = 0;
var correct = 0;
var value = " ";

//Array for correct answers
var correctAnswers = [
{
	question1: "c",
	question2: "b",
	question3: "a",
	question4: "d",
	question5: "b",
	question6: "a",
	question7: "d",
	question8: "a",
}
]





//Hiding the start button and showing the quiz section
$(document).ready(function(){
	
	$("#quiz").hide();
	$("#score-page").hide();
	$("#end").hide();

	$("#start").click(function(){
	$("#quiz").show(1000);
	$("#start").hide();
	$("#end").show();
	})

	$("#end").click(function(){
	$("#end").hide();
	$("#score-page").show(1000);
	$("#quiz").hide();
	$("#start").hide();
			console.log("it is working");

	

	$(":radio").each(function(index, item){
	var name = $(this).attr("name");

	console.log(name);

	if($("input:radio[name="+name+"]:checked").length == 0){
		incorrect++;

		console.log("unchecked");
	}

	else{
		var selects = ($("input:radio[name ="+name+"]:checked").val());
		console.log("checked", selects, name);

		if (name = "question1"){
			value = correctAnswers[0].question1;
			console.log(value);
			checkValue(selects, value);

		}

		else if (name = "question2"){
			value = correctAnswers[0].question2;
			console.log(value);
			checkValue(selects, value);
			
		}

		else if (name = "question3"){
			value = correctAnswers[0].question3;
			console.log(value);
			checkValue(selects, value);
			
		}

		else if (name = "question4"){
			value = correctAnswers[0].question4;
			console.log(value);
			checkValue(selects, value);
			
		}

		else if (name = "question5"){
			value = correctAnswers[0].question5;
			console.log(value);
			checkValue(selects, value);
			
		}

		else if (name = "question6"){
			value = correctAnswers[0].question6;
			console.log(value);
			checkValue(selects, value);
			
		}

		else if (name = "question7"){
			value = correctAnswers[0].question7;
			console.log(value);
			checkValue(selects, value);
			
		}

		else if (name = "question8"){
			value = correctAnswers[0].question8;
			console.log(value);
			checkValue(selects, value);
			
		}
	}
	
	
//End
})


	//For some reason it is all multiplying by 4...

      correct = correct / 4;
      incorrect = incorrect / 4;

		$("#scoreboard").append("Correct answers: " + correct + "   " + "Incorrect answer:  " + incorrect);
		



		//Tried making a loop for making the above steps easier.......

			// for (var i = 0; i <correctAnswers.length; i++){
			// 	var obj = correctAnswers[i];

			// 	var value = correctAnswers[0].question1;
			// 	console.log(value);

			// 		for (var prop in obj){
			// 			console.log("prop: ", obj[prop]);
			// 		}
			// }

	
		

	


})

	function checkValue(selectedValue, correctValue){

			if (correctValue === selectedValue){
				correct++;
			}
				else{
					incorrect++;
				}

		}
	})









//Timer
$(document).ready(function() {
	start();
    var time = 10;
 
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
 	$("#quiz").hide();
 	$("#end").hide();
   	$("#score-page").show(1000);
   	$("#scoreboard").append("Correct answers: " + correct + "   " + "Incorrect answer:  " + incorrect);


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










