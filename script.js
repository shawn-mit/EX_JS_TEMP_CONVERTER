
var f = document.getElementById("F");
var  c  = document.getElementById("C");

 var submit = document.getElementById("submit");

var input = document.getElementById("input");

var output = document.getElementById("output");

 var clear = document.getElementById("clear");

// Get a reference to the button element in the DOM



 





// happen based on which radio button is selected.
// This function should determine which conversion should

function toCelsius (inputFromDetermineConverter) {
	var outputTemp = (inputFromDetermineConverter - 32) / 1.8;
	//console.log("celsius", input);
	outputToDom (outputTemp, "C");
}

function toFahrenheit (inputFromDetermineConverter) {
	var outputTemp = (inputFromDetermineConverter * 1.8) + 32;
	//console.log("fahrenheit" , input);
	outputToDom (outputTemp, "F");
	
}

/*function getInput (callThisWhateverYouWant) {
	console.log("It's running!", callThisWhateverYouWant);
}
*/

function determineConverter (inputFromCheckInput) {
  //console.log("event", clickEvent);

if (f.checked) {
		toFahrenheit(inputFromCheckInput);
	}

	else if (c.checked){
		toCelsius(inputFromCheckInput);
	

	} else {

		alert("Something's broken!");

		}


}


function checkInput(){
	//console.log(input.value);
	if (input.value) {
		determineConverter(input.value);
	} else {
		alert("No input.")
	}
}

//function outputToDom () {



function outputToDom (outputTemp, type) {
	console.log("outputToDom", outputTemp.toFixed(0), type);

	if (type === "C") {
		if (outputTemp > 32) {
			output.innerHTML = "<p class= 'red'>" + outputTemp + "</p>";
			} else if (outputTemp < 0 ) {
				output.innerHTML = "<p class = 'blue'>" + outputTemp + "</p>";
			} else {
				output.innerHTML = "<p class = 'green'>" + outputTemp + "</p>";
			}


	} else {	}{

			if (outputTemp > 90){
				output.innerHTML = "<p class = 'red'>" + outputTemp + "</p>";
			} else if (outputTemp < 32 )
			 {
				output.innerHTML = "<p class = 'blue'>" + outputTemp + "</p>";
			} else {
				output.innerHTML = "<p class = 'green'>" + outputTemp + "</p>";

			}

		}


	}



function resetForm () { 
	console.log("resetForm running");
	input.value = ""; 
	output.innerHTML = "";
	f.checked = false;
	c.checked = false; 

}
 

// Assign a function to be executed when the button is clicked
submit.addEventListener("click", checkInput);

clear.addEventListener("click", resetForm );