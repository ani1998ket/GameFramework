class GameScreen extends Scene{
    constructor(){
        super();
        this.addNewLayers(3);
        this.gameWorld = new World();
        this.gameWorld.addGameObject( new Bird(this.gameWorld, this.getLayer(2), new Vector2d(50, 427), 30, 30));
    }

    update(){
        let playerLayer = this.getLayer(2);  
        this.gameWorld.update();
    }

    render(){
        let background = this.getLayer(0);
        let pipeLayer = this.getLayer(1);
        let playerLayer = this.getLayer(2);

        background.canvas.style.backgroundColor = "blue";
        playerLayer.context.clearRect(0, 0, playerLayer.canvas.width, playerLayer.canvas.height); 
        this.gameWorld.render();  
    }


}