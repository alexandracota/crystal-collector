//when document is ready...
$(document).ready(function() {

//set all score values to zero.
	var wins = [];
	//Display on document.
	$("div.wins").html("Wins: " + wins);

	var losses = [];
	//Display on document.
	$("div.losses").html("Losses: " + losses);

	//Points user adds to score by clicking on crystals.
	var totalScore = 0;
	$("div.user-score").html(totalScore);

//Generate random number.
	var randomNumber = 0;
	for (var i = 0; i < 3; i++) {
		var random = Math.floor(Math.random() * 20) + 1;
		randomNumber = random;
		};
	//Display on document.
	$("div.random-number").html(randomNumber);


//Assign random value to crystal 1.

	//Crystal 1 value is initially zero.
	var crystal1 = 0;

	//For loop to generate a random number between 1 and 9.
	for (var i = 0; i < 1; i++) {
		var random = Math.floor(Math.random() * 9) + 1;
		//Then set value of Crystal 1 equal to the random number.
		var crystal1 = random;
		//Push the crystal's random value to the document.
		$('.crystal-1').data(crystal1);
	};
		console.log(crystal1);


//Assign random value to crystal 2.

	//Crystal 2 value is initially set to zero.
	var crystal2 = 0;
	
	//For loop to generate a random number between 1 and 9.
	for (var i = 0; i < 1; i++) {
		var random = Math.floor(Math.random() * 9) + 1;
		//Set value of crystal 2 equal to the random number.
		var crystal2 = random;
		//Push the crystal's random value to the document.
		$('.crystal-2').data(crystal2);
	};
		console.log(crystal2);
	

//Assign random value to crystal 3.

	//Crystal 3 value is initially set to zero.
	var crystal3 = 0;
	
	//For loop to generate a random number between 1 and 3.
	for (var i = 0; i < 2; i++) {
		var random = Math.floor(Math.random() * 3) + 1;
		//Set value of crystal 3 equal to the random number.
		crystal3 = random;
		//Push the crystal's random value to the document.
		$('.crystal-3').data(crystal3);
	};

		console.log(crystal3);

//Assign random value to crystal 4.
	
	//Crystal 4 is initially set to zero.
	var crystal4 = 0;
	//For loop to generate a random number between 1 and 4.
	for (var i = 0; i < 2; i++) {
		var random = Math.floor(Math.random() * 4) + 1;
		//Set value of crystal 4 equal to the random number.
		crystal4 = random;
		//Push crystal;s random value to the document.
		$('.crystal-4').data(crystal4);
	};

		console.log(crystal4);

//After all random values are assigned.

//When first crystal is clicked...
	$(document).on("click", ".Crystal-1", function() {
		//Add that number to the totalScore.
		totalScore = totalScore + crystal1;
		//Push to document.
		$("div.user-score").html(totalScore);
	});

//When the second crystal is clicked...
	$(document).on("click", ".Crystal-2", function() {
		//Add that number to the totalScore.
		totalScore = crystal2 + totalScore;
		//Push to document.
		$("div.user-score").html(totalScore);
	});

//When the third crystal is clicked.
	$(document).on("click", ".Crystal-3", function() {
		//Add that number to the totalScore.
		totalScore = crystal3 + totalScore;
		//Push to document.
		$("div.user-score").html(totalScore);
	});

//When the fourth crystal is clicked.
	$(document).on("click", ".Crystal-4", function() {
		//Add that value to the totalScore.
		totalScore = crystal4 + totalScore;
		$("div.user-score").html(totalScore);
	});

	//If the totalScore equals randomNumber...
	if (totalScore === randomNumber) {
		//Display "You win!"
		alert("You Win!");
		//Add one point to Wins.
		wins++;
		//Push to document.
		$("div.wins").html("Wins: " + wins);
		//Reset total score to zero.
		totalScore = 0;
		//Push to document.
		$("div.user-score").html(0)
	//If total score is ever greater than the random number...	
	} else if (totalScore >= randomNumber) {
		//Display "You lost!"
		alert("You lost!");
		//Add one point to losses.
		losses++;
		//Push to document.
		$("div.losses").html("Losses: " + losses);
	};

});
