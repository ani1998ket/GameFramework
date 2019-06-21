class LogoScreen extends Scene{
    constructor(){
        super();
        this.addNewLayer();
        this.render();
    }
    render(){
        let background = this.getLayer(0);
        background.canvas.style.backgroundColor = "yellow";
        background.context.fillRect(GAME_WIDTH/2 - 150, GAME_HEIGHT/2 - 25, 300, 50);
    }
    update(){

    }
}
