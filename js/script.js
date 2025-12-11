const addNumbers = (first, second) => {
  return first + second;
}

const addBtn = document.querySelector('#addNum');
const display = document.querySelector('#display');
const firstInput = document.querySelector('#firstNumber');
const secondInput = document.querySelector('#secondNumber');

if (addBtn) {
  addBtn.addEventListener('click', () => {
    if (firstInput && secondInput && display) {
      const result = addNumbers(Number(firstInput.value), Number(secondInput.value));
      display.textContent = result;
    }
  });
}

if (typeof module !== "undefined") {
  module.exports = { addNumbers };
}
