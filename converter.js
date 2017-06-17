//////////////////////////////////////////////
// Variables for referencing HTML elements //
////////////////////////////////////////////

var inputBox = document.getElementById("tempInput");

var fahrRadio = document.getElementById("fahrenheitRadio");

var celsRadio = document.getElementById("celsiusRadio");

var convertBtn = document.getElementById("convertButton");

var clearBtn = document.getElementById("clearButton");

var resulth3 = document.getElementById("resultsAppear");


///////////////////////
// Functions Needed //
/////////////////////

// 1. Function to first, grab user's input and then, determine which conversion should happen based 
// on which radio button is selected; appropriate function is then fired

var whichScale = function () {

  var userInput = inputBox.value;

  if (fahrRadio.checked) {

      console.log("Fahrenheit is selected.");

      convertToFahrenheit(userInput);
  }

  else {

    console.log("Celsius is selected");

    convertToCelsius(userInput);
  }
};


// 2. Function to convert userInput from Celcius to Fahrenheit

var convertToFahrenheit = function (x) {

  console.log(x);

  x = x * 1.8 + 32;

  console.log(x);

  resulth3.innerHTML = x;

};


// 3. Function to convert userInput from Celcius to Fahrrenheit

var convertToCelsius = function (xy) {

  xy = (xy - 32) * (5/9);

  console.log(xy);

  resulth3.innerHTML = xy;

};


// 4. Function to change color of result output to h3 element depending on value of result (if/else if/else) 











// 6. Function to clear input field when user clicks "Clear" button


var clearInputBox = function () {

  console.log("You clicked clear, my dear.")

  inputBox.value = "";

};


//////////////////////
// Event listeners // 
////////////////////

// Add an event listener to the "convert" button; when clicked, the whichScale function is called
convertBtn.addEventListener("click", whichScale);


// 5. Function that, when user clicks "Enter" in input field, fires the conversion function
inputBox.addEventListener("keydown", function (e) {
  
  console.log("e",e);

  if (e.keyCode === 13) {

    console.log("e",e);
     
     whichScale();

    }
});
 

// Add an event listener to the "clear" button; when clicked, the clearInputBox is called
clearBtn.addEventListener("click", clearInputBox);