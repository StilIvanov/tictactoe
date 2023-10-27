const allSquares = document.querySelectorAll('.board__square')
const title = document.querySelector('.board__title')

let currentPlayer = "X"
let gameOver = false
let board = new Array(9)

allSquares.forEach((square, i) => {
  square.addEventListener("click", () => {

    if(square.innerHTML || gameOver) {
      return
    }

    square.innerHTML = currentPlayer
    board[i] = currentPlayer

    if(checkDraw()) {
      title.innerHTML = `Draw`
      gameOver = true
      return
    }

    if(checkWin ()) {
      title.innerHTML = `${currentPlayer} Win`
      gameOver = true
      return
    }

    title.innerHTML = `${currentPlayer}'s Turn`
    currentPlayer = currentPlayer === "X" ? "O" : "X"
  })
})

function restartGame() {
  board = new Array(9)
  gameOver = false
  allSquares.forEach((square) => {
    square.innerHTML = ""
    title.innerHTML = `${currentPlayer}'s Turn`
  })
}

function checkDraw () {
  for(let i = 0; i < board.length; ++i) {
    if(!board[i]) {
      return false
    }
  }
  return true
}

function checkWin () {
  const winningIndicies = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ]

  for(let i = 0; i < winningIndicies.length; ++i ) {
    const mathingIndicies = winningIndicies[i]

    let symbol1 = board[mathingIndicies[0]]
    let symbol2 = board[mathingIndicies[1]]
    let symbol3 = board[mathingIndicies[2]]

    if(!symbol1 || !symbol2 || !symbol3) {
      continue
    }
    if(symbol1 === symbol2 && symbol2 === symbol3) {

      return true
    }
    }
}

