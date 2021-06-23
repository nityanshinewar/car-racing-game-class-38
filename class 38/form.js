class Form{

    constructor(){
        this.input=createInput("Name");
        this.button=createButton("play");
        this.greeting=createElement("h3");
    };


    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
    var title=createElement("h2");
    title.html("Car Racing Game");
    title.position(displayWidth/2+350,0);

    this.input.position(displayWidth/2+350,displayHeight/2);
    this.button.position(displayWidth/2+350,displayHeight/2+100);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value()
        playerCount=playerCount+1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Welcome "+player.name);
        this.greeting.position(displayWidth/2+350,displayHeight/4);
    })    
}
 

}