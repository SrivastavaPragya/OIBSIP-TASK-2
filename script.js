let displayValue = '';

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function appendValue(value) {
  displayValue += value;
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result;
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
