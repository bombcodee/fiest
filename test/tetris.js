const board = document.querySelector('#board');
const startButton = document.querySelector('#start-button');

// Create 2D array to represent board
const boardArray = [];
for (let i = 0; i < 20; i++) {
  boardArray.push(Array(10).fill(0));
}

// Render the board
function render() {
  board.innerHTML = '';
  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 10; col++) {
      const square = document.createElement('div');
      if (boardArray[row][col] === 1) {
        square.classList.add('filled');
      }
      board.appendChild(square);
    }
  }
}

// Add logic for moving and rotating tetrominoes
// Add logic for detecting lines and clearing them
// Add score and level logic
// Add game over logic

// Start the game when the start button is pressed
startButton.addEventListener('click', function() {
  // Start the game
});

// Initial render
render();
