//////////////////////////////////////////////
// Variables for referencing HTML elements //
////////////////////////////////////////////

var inputBox = document.getElementById("tempInput");

var fahrRadio = document.getElementById("fahrenheitRadio");

var celsRadio = document.getElementById("celsiusRadio");

var convertBtn = document.getElementById("convertButton");

var clearBtn = document.getElementById("clearButton");

var resulth3 = document.getElementById("resultsAppear");

var userInput;

var result;


///////////////////////
// Functions Needed //
/////////////////////

// 1. Function to determine which conversion should happen based on which radio button is selected

var whichScale = function () {

  if (fahrRadio.checked) {

      console.log("Fahrenheit is selected.");

      return true;
  }

  else {

    console.log("Celsius is selected");

    return false;
  }
};


// 2. Function to convert userInput from Fahrenheit to Celcius
// 3. Function to convert userInput from Celcius to Fahrrenheit
// 4. Function to change color of result output to h3 element depending on value of result (if/else if/else) 
// 5. Function that, when user clicks "Enter" in input field, fires the conversion function
// 6. Function to clear input field when user clicks "Clear" button


//////////////////////
// Event listeners // 
////////////////////

// Add an event listener to the "convert" button; when clicked, the whichScale function is called
convertBtn.addEventListener("click", whichScale);