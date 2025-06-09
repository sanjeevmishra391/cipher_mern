let count = 0;

const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increase');
const decrementButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

decrementButton.disabled = true;

// functions to modify the count
const incrementCount = () => {
  count++;
  if (count > 0) {
    decrementButton.disabled = false;
  }
  updateCountDisplay();
};

const decrementCount = () => {
  count--;
  updateCountDisplay();
  if (count <= 0) {
    decrementButton.disabled = true;
    return;
  }
}

const resetCount = () => {
  count = 0;
  decrementButton.disabled = true;
  updateCountDisplay();
}

function updateCountDisplay() {
  countDisplay.textContent = count;
} 

// event listeners
incrementButton.addEventListener('click', incrementCount);
decrementButton.addEventListener('click', decrementCount);
resetButton.addEventListener('click', resetCount);