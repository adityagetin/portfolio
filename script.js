// Add your JavaScript code here
console.log('Welcome to Aditya Pal\'s Portfolio!');
function updateButtons() {
  buttons.forEach((button, index) => {
    button.classList.toggle('sills_button-disabled', index !== currentIndex);
  });

  const activeButton = buttonContainer.children[currentIndex];
  activeButton.classList.add('active');
  buttons.forEach((button, index) => {
    if (index !== currentIndex) {
      buttonContainer.children[index].classList.remove('active');
    }
  });
}

function nextButton() {
  currentIndex = (currentIndex + 1) % buttons.length;
  updateButtons();
}

setInterval(nextButton, 1000); // Change button every 3 seconds (adjust as needed)

