export function initCalculator() {
  const display = document.getElementById('display');
  const buttons = document.querySelector('.buttons');

  const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };

  function updateDisplay() {
    display.textContent = calculator.displayValue;
  }

  function inputDigit(digit) {
    if (calculator.waitingForSecondOperand) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue =
        calculator.displayValue === '0'
          ? digit
          : calculator.displayValue + digit;
    }
  }

  function inputDecimal() {
    if (calculator.waitingForSecondOperand) {
      calculator.displayValue = '0.';
      calculator.waitingForSecondOperand = false;
      return;
    }
    if (!calculator.displayValue.includes('.')) {
      calculator.displayValue += '.';
    }
  }

  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }

  function toggleSign() {
    calculator.displayValue = (
      parseFloat(calculator.displayValue) * -1
    ).toString();
  }

  function inputPercent() {
    const value = parseFloat(calculator.displayValue);
    if (value === 0) return;
    calculator.displayValue = String(value / 100);
  }

  function handleOperator(nextOperator) {
    const inputValue = parseFloat(calculator.displayValue);

    if (calculator.operator && calculator.waitingForSecondOperand) {
      calculator.operator = nextOperator;
      return;
    }

    if (calculator.firstOperand == null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (calculator.operator) {
      const result = calculate(
        calculator.firstOperand,
        inputValue,
        calculator.operator
      );
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }

  function calculate(a, b, operator) {
    switch (operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return b === 0 ? 'Error' : a / b;
      default:
        return b;
    }
  }

  buttons.addEventListener('click', (e) => {
    const btn = e.target;
    if (!btn.matches('button')) return;

    const action = btn.dataset.action;
    const value = btn.textContent.trim();

    if (!action) {
      inputDigit(value);
    } else {
      switch (action) {
        case 'decimal':
          inputDecimal();
          break;
        case 'clear':
          resetCalculator();
          break;
        case 'negate':
          toggleSign();
          break;
        case 'percent':
          inputPercent();
          break;
        case 'equals':
          handleOperator(calculator.operator);
          calculator.operator = null;
          break;
        default:
          handleOperator(action);
      }
    }
    updateDisplay();
  });

  updateDisplay();
}
