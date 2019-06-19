class HomeScreen extends Scene{
    constructor(){
        super();
        this.addNewLayer();
        this.render();
    }

    render(){
        let background = this.getLayer(0);
        background.canvas.style.backgroundColor = "blue";
        background.context.fillRect(240 - 150, 200, 300, 50);
        background.context.fillRect(240 - 150, 300, 300, 50);
        background.context.fillRect(240 - 150, 400, 300, 50);
        background.context.fillRect(240 - 150, 500, 300, 50);
    }
}