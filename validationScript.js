// JavaScript code for form validation
// Retrieve the input field value
var submitBtn = document.querySelector('[type="submit"]');
submitBtn.addEventListener('click',formValidation);
var inputValue = document.getElementById('inputField').addEventListener('input',inputValidation);
// Regular expression pattern for alphanumeric input
var regEx = /^[a-zA-Z0-9]+$/
// Check if the input value matches the pattern
// Valid input: display confirmation and submit the form
// Invalid input: display error message
// Prevent form from submitting
function formValidation(event)
{
  var inputValue = document.getElementById('inputField');
  if(regEx.test(inputValue.value))
  {
    alert("Submitting");
  }
  else
  {
    event.preventDefault();
    alert("Error in input please verify that input is alphanumeric");
  }
}

function inputValidation(event)
{
  event.preventDefault();
  var inputValueBox = document.getElementById('inputField');

  if(regEx.test(inputValueBox.value))
  {
    inputValueBox.setAttribute('style','border: solid; border-color:green;');
  }
  else
  {
    inputValueBox.setAttribute('style','border: solid; border-color:red;');
  }
}