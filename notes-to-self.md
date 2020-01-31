## Game logic
```js 
const gameBoard = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']

if(gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {{ 
}
else if(gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]){ 
}
else if(gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]){ 
}
else if(gameBoard[0] === gameBoard[8] && gameBoard[0] === gameBoard[4]){ 
}
else if(gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]){ 
}
else if(gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]){ 
}
else if(gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]){ 
}
else if(gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
}
else if (//all buttons are marked but no win condition) {
  $('#message').text('STALEMATE')
}
else {
  return
}
```
## UX


## UI


## 