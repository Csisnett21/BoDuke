let squares = document.querySelectorAll('.square');
let scoreBoard = document.querySelector('#score');
let currentPlayer = 'Starfleet';
let starfleetScore = 0;
let klingonScore = 0;
let gameMode = '';

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {
    if (this.innerHTML === '') {
      if (currentPlayer === 'Starfleet') {
        this.innerHTML = '<img src="https://davejamesonair.files.wordpress.com/2016/09/star-trek-combadge.jpg" style="width: 100%; height: 100%;">';
        currentPlayer = 'Klingon Empire';
        if (checkForWinner('Starfleet')) {
          starfleetScore++;
          scoreBoard.innerHTML = 'Starfleet: ' + starfleetScore + ' Klingon Empire: ' + klingonScore;
          alert('Starfleet wins!');
          resetGame();
        }
      } else {
        this.innerHTML = '<img src="https://cdn.shopify.com/s/files/1/0289/1534/products/QMx_ST_Klingon_Badge_988x988_01_medium.jpg?v=1532970298" style="width: 100%; height: 100%;">';
        currentPlayer = 'Starfleet';
        if (checkForWinner('Klingon Empire')) {
          klingonScore++;
          scoreBoard.innerHTML = 'Starfleet: ' + starfleetScore + ' Klingon Empire: ' + klingonScore;
          alert('Klingon Empire wins!');
          resetGame();
        }
      }
    }
  });
}
do {
    gameMode = prompt('Choose a game mode: 1 VS 1 , 1 VS Elon Musk');
  } while (gameMode !== '1' && gameMode !== '2');
  
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
      if (this.innerHTML === '') {
        if (currentPlayer === 'Starfleet') {
          this.innerHTML = '<img src="https://davejamesonair.files.wordpress.com/2016/09/star-trek-combadge.jpg" style="width: 100%; height: 100%;">';
          currentPlayer = 'Klingon Empire';
          if (checkForWinner('Starfleet')) {
            starfleetScore++;
            scoreBoard.innerHTML = 'Starfleet: ' + starfleetScore + ' Klingon Empire: ' + klingonScore;
            alert('Starfleet wins!');
            resetGame();
          } else if (gameMode === '2') {
            playAI();
          }
        } else {
          this.innerHTML = '<img src="https://cdn.shopify.com/s/files/1/0289/1534/products/QMx_ST_Klingon_Badge_988x988_01_medium.jpg?v=1532970298" style="width: 100%; height: 100%;">';
          currentPlayer = 'Starfleet';
          if (checkForWinner('Klingon Empire')) {
            klingonScore++;
            scoreBoard.innerHTML = 'Starfleet: ' + starfleetScore + ' Klingon Empire: ' + klingonScore;
            alert('Klingon Empire wins!');
            resetGame();
          }
        }
      }
    });
  }
  let emptySquares = []
  function playAI() {
    let emptySquare = [];
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].innerHTML === '') {
        emptySquare.push(i);
      }
    }
}
  
    let randomIndex = Math.floor(Math.random() * emptySquares.length);
    let randomSquare = squares[emptySquares[randomIndex]];
    randomSquare.innerHTML = '<img src="https://cdn.shopify.com/s/files/1/0289/1534/products/QMx_ST_Klingon_Badge_988x988_01_medium.jpg?v=1532970298" style="width: 100%; height: 100%;">';
    currentPlayer = 'Starfleet';
    if (checkForWinner('Klingon Empire'))


function resetGame() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
  }
  currentPlayer = 'Starfleet';
}
function checkForWinner(player) {
  const winningCombinations = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], 
    [2, 1, 0], 
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      squares[a].innerHTML !== '' &&
      squares[a].innerHTML === squares[b].innerHTML &&
      squares[b].innerHTML === squares[c].innerHTML
    ) {
      return winningCombinations[i];
    }
  }

  return null;
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {
    if (this.innerHTML === '') {
      if (currentPlayer === 'Starfleet') {
        this.innerHTML = '<img src="https://davejamesonair.files.wordpress.com/2016/09/star-trek-combadge.jpg" style="width: 100%; height: 100%;">';
        currentPlayer = 'Klingon Empire';
        const winner = checkForWinner('Starfleet');
        if (winner) {
          starfleetScore++;
          scoreBoard.innerHTML = 'Starfleet: ' + starfleetScore + ' Klingon Empire: ' + klingonScore;
          document.querySelector('#winner').innerHTML = 'Starfleet wins!';
          resetGame();
        }
      } else {
        this.innerHTML = '<img src="https://cdn.shopify.com/s/files/1/0289/1534/products/QMx_ST_Klingon_Badge_988x988_01_medium.jpg?v=1532970298" style="width: 100%; height: 100%;">';
        currentPlayer = 'Starfleet';
        const winner = checkForWinner('Klingon Empire');
        if (winner) {
          klingonScore++;
          scoreBoard.innerHTML = 'Starfleet: ' + starfleetScore + ' Klingon Empire: ' + klingonScore;
          document.querySelector('#winner').innerHTML = 'Klingon Empire wins!';
          resetGame();
        }
      }
    }
  });
}
