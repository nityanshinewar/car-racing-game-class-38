class Game{
constructor(){};


getState(){
var gameStateRef=database.ref("gameState");
gameStateRef.on("value",function(data){
gameState=data.val();
})
}

update(state){
database.ref("/").update({
gameState:state
})
}

startGame(){
if (gameState===0){
player=new Player();
player.getCount();
form=new Form();
form.display();
}
car1= createSprite(100,200);
car2= createSprite(300,200);
car3= createSprite(500,200);
car4= createSprite(700,200);
carArray=[car1,car2,car3,car4];
}

play(){
form.hide();
//textSize(30);
//text("Game Start",120,100);
Player.getPlayerInfo();

if (allPlayers!==undefined){
//var dp=130;
var index=0;
var x=0;
var y;
for(var plr in allPlayers){
   /* if (plr==="player"+player.index){
    fill ("red");
    }
    else{
    fill("black")
    }
    dp=dp+20;
    textSize(15);
    text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,dp)
    */
    index= index +1;
    x=x+200;
    y=displayHeight-allPlayers[plr].distance;
    carArray[index-1].x=x;
    carArray[index-1].y=y;

    if (index===player.index){
        carArray[index-1].shapeColor=("red");
    }
}
}
if 
(keyDown(UP_ARROW)&&player.index!==null){
 player.distance=player.distance+50
 player.update();
}
drawSprites();
}
}