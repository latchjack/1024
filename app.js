document.addEventListener('DOMContentLoaded', () => {
  const gridDisplay = document.querySelector('.grid')
  const scoreDisplay = document.queryElementById('.score')
  const resultDisplay = document.queryElementById('.result')
  const width = 4
  let squares = []

  // create the board
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      square = document.createElement('div')
      square.innerHTML = 0
      gridDisplay.appendChild(square)
      squares.push(square)
    }
  }
  createBoard()

})