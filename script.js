// Select input and result elements
const inputField = document.getElementById("ipt");
const resultDisplay = document.getElementById("result");

// Add event listener to the input field
inputField.addEventListener("input", () => {
  // Get the input value and convert to a number
  const inputValue = parseFloat(inputField.value);

  // Check if the input is a valid number
  if (isNaN(inputValue)) {
    resultDisplay.textContent = "Result: Please enter a valid number.";
    return;
  }

  // Perform the division
  const result = inputValue / 1.5;

  // Display the result
  resultDisplay.textContent = `Result: ${result}`;
});
