const app = {
  nbRows : 4,//axe y
  nbCells : 6, //axe x
  board : document.getElementById(`board`),
  gameOver : false,
  nbMoves : 0, //initialisation nb de mouvements

  player : { //le joueur
    x: 0, 
    y: 0,
    direction: `right`,
  },

  targetCell : { //case à atteindre
    x: 5,
    y: 3,
  },

  drawBoard : () => {
    for (let i=0; i<app.nbRows; i++) {
      const row = document.createElement(`div`);
      row.classList.add(`row`);
      app.board.appendChild(row);
      for (let j=0; j<app.nbCells; j++) {
        const cell = document.createElement(`div`);
        cell.classList.add(`cell`);
        row.appendChild(cell);
        if (j === app.targetCell.x && i === app.targetCell.y) {
          cell.classList.add(`targetCell`);
        } 
        if (j === app.player.x && i === app.player.y) {
          const playerIn = document.createElement(`div`);
          playerIn.classList.add(`player`);
          playerIn.classList.add(`player--${app.player.direction}`);
          cell.appendChild(playerIn);
        } 
      }
    }
    app.isGameOver();
  },

  clearBoard : () => {
    app.board.textContent= ``;
  },
  
  redrawBoard : () => {
    app.clearBoard();
    app.drawBoard();
  },

  moveForward : () => {
    app.nbMoves++;
    if(app.gameOver) return;
    switch (app.player.direction) {
    case `right` :
      if (app.player.x<(app.nbCells-1)) app.player.x++;
      break;
    case `bottom` :
      if (app.player.y<(app.nbRows-1)) app.player.y++;
      break;
    case `up` :
      if (app.player.y>0) app.player.y--;
      break;
    case `left` :
      if (app.player.x>0) app.player.x--;
      break;
    }
    app.redrawBoard();
  },

  listenKeyboardEvents : () => {
    if (app.gameOver) return;
    document.addEventListener(`keyup`, function(event){
      console.log(event);
      switch (event.code) {
      case `ArrowRight` :
        if (app.player.direction === `right`)  app.moveForward();
        else {
          app.player.direction = `right`;
          app.moveForward();
        }
        break;
      case `ArrowDown` :
        if (app.player.direction === `bottom`)  app.moveForward();
        else {
          app.player.direction = `bottom`;
          app.moveForward();
        }
        break;
      case `ArrowLeft` :
        if (app.player.direction === `left`)  app.moveForward();
        else {
          app.player.direction = `left`;
          app.moveForward();
        }
        break;
      case `ArrowUp` :
        if (app.player.direction === `up`)  app.moveForward();
        else {
          app.player.direction = `up`;
          app.moveForward();
        }
        break;  
      }
    });
  },

  win : () => {
    alert(`Bravo, vous avez atteint la cible en ${app.nbMoves} mouvements`);
  },

  isGameOver : () => {
    if (app.player.x === app.targetCell.x && app.player.y === app.targetCell.y) {
      setTimeout(app.win,100);
      app.gameOver = true;
    }
  },
  
  init : () => {
    console.log(`init !`);
    app.drawBoard();
    app.listenKeyboardEvents();
  },
};

document.addEventListener(`DOMContentLoaded`,app.init);