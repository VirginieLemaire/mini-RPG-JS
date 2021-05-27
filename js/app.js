var app = {};
  app.player = { //le joueur
    //gérer la position du joueur sur la grille
    x: 0, 
    y: 0,
    direction: "right",
  }
  app.targetCell = { //case à atteindre
    x: 5,
    y: 3,
  }
  app.drawBoard= function(){
    nbRows = 4;
    nbCells = 6;
    for (var i=0; i<nbRows; i++) {
      var row = document.createElement('div');
      row.className ='row';
      document.querySelector('#board').appendChild(row);
      for (var j=0; j<nbCells; j++) {
        var cell = document.createElement('div');
        cell.className = 'cell';
        row.appendChild(cell);
        if (j === app.targetCell.x && j === app.targetCell.y) {
          cell.classList.toggle('targetCell')
        } else if (j === app.player.x && i === app.player.y) {
          var playerIn = document.createElement('div');
          playerIn.className = 'player ';
          cell.appendChild(playerIn);
        } 
      }
    }
  }
  app.init = function () {
    console.log(this.drawBoard());
  }
  app.clearBoard = function() {
    document.getElementById('board').removeChild();
  }
  app.redrawBoard = function(){
    app.clearBoard();
    app.drawBoard();
  }
app.init();