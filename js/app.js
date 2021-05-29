const app = {
  nbRows : 4,//axe y
  nbCells : 6, //axe x
  board : document.getElementById(`board`),

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
        } else if (j === app.player.x && i === app.player.y) {
          let playerIn = document.createElement(`div`);
          playerIn.classList.add(`player`);
          playerIn.classList.add(`player--${app.player.direction}`);
          cell.appendChild(playerIn);
        } 
      }
    }
  },

  clearBoard : () => {
    app.board.textContent= ``;
  },
  
  redrawBoard : () => {
    app.clearBoard();
    app.drawBoard();
  },

  turnLeft : () => {
    switch(app.player.direction) {
    case `right` :
      app.player.direction = `up`;
      break;
    case `up` :
      app.player.direction = `left`;
      break;
    case `left` :
      app.player.direction = `bottom`;
      break;
    case `bottom` :
      app.player.direction = `right`;
      break;
    } 
  },

  turnRight : () => {
    switch(app.player.direction) {
    case `right` :
      app.player.direction = `bottom`;
      break;
    case `bottom` :
      app.player.direction = `left`;
      break;
    case `up` :
      app.player.direction = `up`;
      break;
    case `left` :
      app.player.direction = `right`;
      break;
    } 
  },

  moveForward : () => {
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
  },

  test : () => {
    console.log(app.player.direction);
    app.redrawBoard();
  },
  
  init : () => {
    console.log(app.drawBoard());
  },
};

document.addEventListener(`DOMContentLoaded`,app.init);