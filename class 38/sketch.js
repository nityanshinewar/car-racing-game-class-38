var gameState=0;
var database;
var playerCount;
var form;
var player;
var game;
var allPlayers;
var car1,car2,car3,car4;
var carArray;
function setup(){
    createCanvas(displayWidth-100,displayHeight-100);

    database=firebase.database();
   
    game=new Game();
    game.getState();
    game.startGame();
}

function draw(){
  if (playerCount===4){
      game.update(1);
  }

  if (gameState===1){
      clear();
      game.play();
  }
    
}

