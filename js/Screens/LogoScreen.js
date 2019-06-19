class LogoScreen extends Scene{
    constructor(){
        super();
        this.addNewLayer();
        this.render();
    }

    render(){
        let background = this.getLayer(0);
        background.canvas.style.backgroundColor = "yellow";
        background.context.fillRect(240 - 150, 320 - 25, 300, 50);
    }
}
