var app = {};
  app.player = [{ //le joueur
    //gérer la position du joueur sur la grille
    x: 0; 
    y: 0;
    direction: "right";
  }]

  app.targetCell = [{ //case à atteindre
    x: 5;
    y: 3;
  }]



  init: function () {
    console.log('init !');
  }


document.addEventListener('DOMContentLoaded', app.init);