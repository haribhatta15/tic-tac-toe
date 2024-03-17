const board = document.getElementById("board");
let currentPlayer = "X"; // Start with player X
let gameBoard = ["", "", "", "", "", "", "", "", ""];

// Function to handle cell click
function cellClick(index) {
  if (gameBoard[index] === "") {
    gameBoard[index] = currentPlayer;
    renderBoard();
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch players
  }
}

// Function to rerender the board
function renderBoard() {
  board.innerHTML = "";
  gameBoard.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    cellElement.innerText = cell;
    cellElement.addEventListener("click", () => cellClick(index));
    board.appendChild(cellElement);
  });
}

// Function to check for a winner
function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      alert(`${gameBoard[a]} wins!`);
      resetGame();
      return;
    }
  }

  if (!gameBoard.includes("")) {
    alert("It's a draw!");
    resetGame();
  }
}

// Function to Reset the game
function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  renderBoard();
}

// Initial board rendering
renderBoard();
