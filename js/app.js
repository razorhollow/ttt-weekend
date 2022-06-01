/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('div')
const messageEl = document.querySelector('#message')
const gameBoard = document.querySelector('.board')
const resetBtn = document.querySelector('#reset-btn')

/*----------------------------- Event Listeners -----------------------------*/

gameBoard.addEventListener('click', handleClick)
resetBtn.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/
init ()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render()
}

function render() {
  renderMessage()
  renderSquare()
}

function renderSquare() {
  for(let i = 0; i < board.length; i++){
  if (board[i] === 1) {
    squareEls[i].textContent = 'x'
  } else if (board[i] === -1) {
    squareEls[i].textContent = 'o'
  } else { 
    squareEls[i].textContent = ''
  }
}
}

function renderMessage(){
  if (winner === null) {
    messageEl.textContent = `It's Player ${whosTurn()}'s Turn!`
  } else if(winner === 'T'){
    messageEl.textContent = "It's a Tie!"
  } else {
    messageEl.textContent = `Congratulations Player ${whosTurn()}! You Won!`
  }
}

function whosTurn(){
  return turn === 1? "X" : "O"
}

function nextPlayer() {
  turn *= -1
}

function handleClick(evt) {
  let id = evt.target.id
  let sqIdx = id[2]
  if (board[sqIdx]) {
    return
  } else if (winner) {
    return
  } else {
    getWinner()
    board[sqIdx] = turn
    nextPlayer()
    render()
  }
}
  
function getWinner(){
  winningCombos.forEach(function(combo){
    let total = 0
    combo.forEach(idx => total += board[idx])
    total = Math.abs(total)
    if(total === 3) {
      winner = board[combo[0]]
    }
    console.log(total)
     
    
    
  })
}





  // g) Set the `winner` variable if there's a winner by calling a new 
  //    function: `getWinner`.

  // h) All the state has been updated so we need to render our updated state 
  //    to the user by calling the `render` function we wrote earlier.

// Step 7 - Build the `getWinner` function

  // a) Create a function called `getWinner`

  /* 
   * There are two methods you can use to find out if there is a winner.
   *
   * Step b1 below is a more elegant method that takes advantage of the
   * `winningCombos` array you wrote above in step 5. 
   *
   * Step b2 might be a little simpler to comprehend, but you'll need to write  
   * more code. Step b2 also won't take advantage of the `winningCombos`
   * array, but using it as a reference will help you build a solution.
   * ***Ensure you choose only one path.***
   */

  // b1) Loop through each of the winning combination arrays defined in the 
  //     `winningCombos` array. Total up the three board positions using the 
  //     three indexes in the current combo. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at
  //     the index specified by the first index of that winning combination's
  //     array by returning that value.

  // b2) For each one of the winning combinations you wrote in step 5, find the
  //     total of each winning combination. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at 
  //     the index specified by the first index of that winning combination's 
  //     array by returning that value.

  // c) If there is no winner, check to see if there is a tie. Set the `winner` 
  //    variable to `'T'` if there are no more nulls in the board array by 
  //    returning the string `'T'`.

  // d) If there is no winner and there isn’t a tie, return `null`.

// Step 8 - Create Reset functionality

  // a) Add a reset button to the HTML document.

  // b) Store the new reset button element in a constant named `resetBtnEl`.

  // c) Attach an event listener to the `resetBtnEl`. On the `'click'` event it 
  //    should call the `init` function you created in 3.