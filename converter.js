function toCelsius () {
	 var convertedTemp = (temp - 32) * 5/9;
   output.innerHTML = convertedTemp + " &#176; C";
   setColor(convertedTemp);
}

function toFahrenheit () {
	var convertedTemp = (temp * 9/5) + 32;
   output.innerHTML = convertedTemp + " &#176; F";
   setColor(temp);
}

function setColor(passedValue) {
  if(passedValue >= 32) {
    output.style = "color:red;";
  }else if(passedValue <= 0) {
    output.style = "color:blue;";
  }else {
    output.style = "color:green;";
  }
}

function determineConverter (clickEvent) {
  temp = document.getElementById('temp').value;
  if(document.getElementById("Fah").checked) {
  	toCelsius();
  } else if (document.getElementById("Cel").checked) {
  	toFahrenheit();
  } else {
  	output.innerHTML = "Select initial scale";
  }
}

function clearValues (clickEvent) {
	output.innerHTML = "<br>";
  output.style = "color:black";
  document.getElementById('temp').value = 0;
}

var button = document.getElementById("converter");
var button2 = document.getElementById("clearer");
var output = document.getElementById("output");
var temp;

button.addEventListener("click", determineConverter);
button2.addEventListener("click", clearValues);