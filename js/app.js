const app = {
  nbRows : 4,
  nbCells : 6,
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
  
  init : () => {
    console.log(app.drawBoard());
  },
};

document.addEventListener(`DOMContentLoaded`,app.init);
//pour la partie moveforward j'ai envie de tester les boucles for ou do...while