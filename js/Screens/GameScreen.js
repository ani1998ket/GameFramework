class GameScreen extends Scene{
    constructor(){
        super();
        this.addNewLayers(3);
        this.gameWorld = new World();
        this.gameWorld.addGameObject( new Bird(this.getLayer(2), new Vector2d(50, 427), 30, 30));
        this.gameWorld.addGameObject(new GameObject(this.getLayer(1), new Vector2d(100, 50), 50, 400));
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