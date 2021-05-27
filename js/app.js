var app = {};
  app.player = [{ //le joueur
    //gérer la position du joueur sur la grille
    x: 0, 
    y: 0,
    direction: "right",
  }]
  app.targetCell = [{ //case à atteindre
    x: 5,
    y: 3,
  }]
  app.drawBoard= function(){
    nbRows = 4;
    nbCells = 6;
    for (var i=0; i<nbRows; i++) {
      var row =document.createElement('div');
      row.className ='row';
      document.querySelector('#board').appendChild(row);
      for (var j=0; j<nbCells; j++) {
        var cell =document.createElement('div');
        cell.className ='cell';
        row.appendChild(cell);
      }
    }
  }
  app.init= function () {
    console.log(this.drawBoard());
  }
  app.init();