const textDisplay = document.getElementById('text-display');
const textInput = document.getElementById('text-input');
const timerDisplay = document.getElementById('timer');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');

const sampleText = "This is a simple typing test.";
let startTime, interval;

textDisplay.textContent = sampleText;

textInput.addEventListener('input', () => {
  if (!startTime) {
    startTime = Date.now();
    interval = setInterval(updateTime, 1000);
  }

  const enteredText = textInput.value;
  if (enteredText === sampleText) {
    clearInterval(interval);
    const timeTaken = (Date.now() - startTime) / 1000;
    timerDisplay.textContent = timeTaken.toFixed(2);

    const words = sampleText.split(" ").length;
    const wpm = (words / timeTaken) * 60;
    wpmDisplay.textContent = Math.round(wpm);

    const correctChars = enteredText.split('').filter((char, i) => char === sampleText[i]).length;
    const accuracy = (correctChars / sampleText.length) * 100;
    accuracyDisplay.textContent = Math.round(accuracy);
  }
});

function updateTime() {
  const timePassed = (Date.now() - startTime) / 1000;
  timerDisplay.textContent = timePassed.toFixed(2);
}
