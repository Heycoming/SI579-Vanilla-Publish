const addNumbers = (first, second) => {
  return first + second;
}

document.querySelector('#addNum').addEventListener('click', () => {
  const firstNumber = document.querySelector('#firstNumber').value;
  const secondNumber = document.querySelector('#secondNumber').value;
  const result = addNumbers(Number(firstNumber), Number(secondNumber));
  alert(`The result is: ${result}`);
});

if (typeof module !== "undefined") {
  module.exports = { addNumbers };
}