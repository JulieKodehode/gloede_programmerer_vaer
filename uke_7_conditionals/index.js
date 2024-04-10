// if else statements

// If the statement within the if () is true,
// the code within the curly braces will run

// You should always have a else statement
// that will run in any other case than the if statement is true

// To add more conditions you can use else if ()

let isBlue = true;

function changeIsBlue() {
  if (isBlue == true) {
    console.log("the sky is blue");
    isBlue = false;
  } else {
    console.log("the sky is not blue");
    isBlue = true;
  }
}
