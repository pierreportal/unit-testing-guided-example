function sum(a, b) {

  return (a || 0) + (b || 0);
}

function subtract(a, b) {
  return (a || 0) - (b || 0);
}

function divide(a, b) {
  if (!a || !b) {
    throw new Error('Cannot devide by 0');
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
